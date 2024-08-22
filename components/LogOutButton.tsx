import { getAuth } from '../auth'
import { useAuthContext } from './AuthContext'
import styles from './LogInButton.module.css'

interface Props {
	onLogout?: () => void
}

export function LogoutButton({ onLogout }: Props) {
	const { setAccount } = useAuthContext()
	return (
		<button
			className={styles.LogInButton}
			onClick={async () => {
				try {
					const auth = await getAuth()
					await auth.logout()
					setAccount(null)
					onLogout?.()
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
