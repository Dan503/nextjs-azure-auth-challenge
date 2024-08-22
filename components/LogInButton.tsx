import { getAuth } from '../auth'
import { useAuthContext } from './AuthContext'
import styles from './LogInButton.module.css'

export function LoginButton() {
	const { setAccount } = useAuthContext()
	return (
		<button
			className={styles.LogInButton}
			onClick={async () => {
				try {
					const auth = await getAuth()
					const loginResponse = await auth.loginPopup()
					setAccount(loginResponse.account)
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
