import { getAuth } from '../auth'
import { useAuthContext } from './AuthContext'
import styles from './LogInButton.module.css'

export function LoginButton() {
	const { setAccount, setIsIntendedToBeLoggedIn } = useAuthContext()
	return (
		<button
			className={styles.LogInButton}
			onClick={async () => {
				try {
					const auth = await getAuth()
					const loginResponse = await auth.loginPopup()
					setIsIntendedToBeLoggedIn(true)
					setAccount(loginResponse.account)
				} catch (e) {
					alert('Login failed')
					setIsIntendedToBeLoggedIn(false)
					setAccount(null)
					console.error(e)
				}
			}}
		>
			Login
		</button>
	)
}
