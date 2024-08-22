'use client'
import { Account } from 'msal'
import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from 'react'
import { getAuth } from '../auth'

export interface AuthContextValue {
	account: Account | null
	setAccount: React.Dispatch<React.SetStateAction<Account | null>>
}

export const defaultAuthContext: AuthContextValue = {
	account: null,
	setAccount: () => null,
}

export const authContext = createContext<AuthContextValue>(defaultAuthContext)

export function useAuthContext() {
	return useContext(authContext)
}

interface Props {
	children: ReactNode
}

// ES Lint says fast refresh only works if files only export either components or functions/variables not both
export function AuthContextProvider({ children }: Props) {
	const [account, setAccount] = useState<Account | null>(null)
	const [contextValue, setContextValue] = useState(defaultAuthContext)

	useEffect(() => {
		async function handleAuthFetch() {
			try {
				const auth = await getAuth()
				const response = await auth.getAccount()
				setAccount(response)
			} catch {
				setAccount(null)
			}
		}
		handleAuthFetch()
	}, [])

	useEffect(() => {
		setContextValue({ account, setAccount })
	}, [account])

	return (
		<authContext.Provider value={contextValue}>
			{children}
		</authContext.Provider>
	)
}
