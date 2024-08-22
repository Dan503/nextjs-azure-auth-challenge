'use client'
import Link from 'next/link'
import { useAuthContext } from '../../../components/AuthContext'
import { LogoutButton } from '../../../components/LogOutButton'

export default function SecurePage() {
	const { account: authState } = useAuthContext()
	return (
		<>
			<h1>Secure Area</h1>
			<h2>Authorized as {authState?.name}</h2>
			<p>You should only be able to see this page if you are logged in</p>
			<p>
				<Link href="/">Back to home</Link>
			</p>
			<p>
				<LogoutButton />
			</p>
		</>
	)
}
