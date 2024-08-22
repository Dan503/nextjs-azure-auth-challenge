'use client'
import { usePathname, useRouter } from 'next/navigation'
import { ReactNode, useEffect } from 'react'
import { useAuthContext } from '../../components/AuthContext'

interface Props {
	children: ReactNode
}

export default function SecureLayout({ children }: Props) {
	const router = useRouter()
	const { account, isIntendedToBeLoggedIn } = useAuthContext()
	const pathname = usePathname()

	useEffect(() => {
		if (!account && isIntendedToBeLoggedIn === false) {
			router.replace(`/unauthorized?path=${pathname}`)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [account])

	if (!account) {
		return <p>Loading...</p>
	}

	return <>{children}</>
}
