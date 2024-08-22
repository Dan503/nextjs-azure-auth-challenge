import { AuthResponse } from 'msal'
import { getAuth } from '../auth'
import { useAuthContext } from './AuthContext'
import styles from './LogInButton.module.css'

interface Props {
	onLogin?: (authResponse: AuthResponse) => void
}

export function LoginButton({ onLogin }: Props) {
	const { setAccount } = useAuthContext()
	return (
		<button
			className={styles.LogInButton}
			onClick={async () => {
				try {
					const auth = await getAuth()

					if (auth.getLoginInProgress()) {
						alert(
							'There is another existing login session blocking your login attempt',
						)
					} else {
						const loginResponse = await auth.loginPopup()
						setAccount(loginResponse.account)
						onLogin?.(loginResponse)
					}
				} catch (e) {
					alert('Login failed')
					setAccount(null)
					console.error(e)
				}
			}}
		>
			Login
		</button>
	)
}
