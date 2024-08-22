'use client'
import Link from 'next/link'
import { useAuthContext } from '../components/AuthContext'
import { LoginButton } from '../components/LogInButton'
import { LogoutButton } from '../components/LogOutButton'

export default function Home() {
	const { account } = useAuthContext()
	return (
		<>
			<h1>Home page</h1>
			{account && (
				<h2>
					Welcome <i>{account.name}</i>!
				</h2>
			)}
			<p>
				Navigate to the <Link href="/secure-page">secure page</Link>
			</p>
			<p>{account ? <LogoutButton /> : <LoginButton />}</p>
		</>
	)
}
