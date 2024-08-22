'use client'
import Link from 'next/link'
import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useAuthContext } from '../../components/AuthContext'
import { LoginButton } from '../../components/LogInButton'

export default function UnauthorizedPage() {
	const searchParams = useSearchParams()
	const { account } = useAuthContext()
	const redirectPath = searchParams.get('path')
	const router = useRouter()

	useEffect(() => {
		if (account && redirectPath) {
			router.replace(redirectPath)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [account, redirectPath])

	return (
		<>
			<h1>Unauthorized</h1>
			<p>You are not authorized to view this page</p>

			<p>
				<LoginButton />
			</p>
			<p>
				<Link href="/">Back to home</Link>
			</p>
		</>
	)
}
