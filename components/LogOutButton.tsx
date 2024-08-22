import { getAuth } from '../auth'
import { useAuthContext } from './AuthContext'
import styles from './LogInButton.module.css'

export function LogoutButton() {
	const { setAccount } = useAuthContext()
	return (
		<button
			className={styles.LogInButton}
			onClick={async () => {
				try {
					const auth = await getAuth()
					await auth.logoutPopup()
					setAccount(null)
				} catch (e) {
					alert('Logout failed')
					console.error(e)
				}
			}}
		>
			Logout
		</button>
	)
}
