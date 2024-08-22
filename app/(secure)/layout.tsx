'use client'
import { usePathname, useRouter } from 'next/navigation'
import { ReactNode, useEffect } from 'react'
import { useAuthContext } from '../../components/AuthContext'

interface Props {
	children: ReactNode
}

export default function SecureLayout({ children }: Props) {
	const router = useRouter()
	const { account } = useAuthContext()
	const pathname = usePathname()

	useEffect(() => {
		if (!account) {
			router.replace(`/unauthorized?path=${pathname}`)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [account])

	if (!account) {
		return null
	}

	return <>{children}</>
}
