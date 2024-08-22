'use client'
import { AccountInfo } from '@azure/msal-browser'
import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from 'react'
import { getAuth } from '../auth'

export interface AuthContextValue {
	account: AccountInfo | null
	setAccount: React.Dispatch<React.SetStateAction<AccountInfo | null>>
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
	const [account, setAccount] = useState<AccountInfo | null>(null)
	const [contextValue, setContextValue] = useState(defaultAuthContext)

	useEffect(() => {
		async function handleAuthFetch() {
			try {
				const auth = await getAuth()
				const activeAccount = await auth.getActiveAccount()
				setAccount(activeAccount)
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
