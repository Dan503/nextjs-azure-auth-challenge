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
	setSessionAccount: React.Dispatch<React.SetStateAction<AccountInfo | null>>
}

export const defaultAuthContext: AuthContextValue = {
	account: null,
	setAccount: () => null,
	setSessionAccount: () => null,
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
	const [sessionAccount, setSessionAccount] = useState<AccountInfo | null>(
		null,
	)

	useEffect(() => {
		handleAuthFetch()
		getSessionActiveAccount()

		async function handleAuthFetch() {
			try {
				const auth = await getAuth()
				const activeAccount = await auth.getActiveAccount()
				setAccount(activeAccount)
			} catch {
				setAccount(null)
			}
		}

		function getSessionActiveAccount() {
			const sessionAccountString = sessionStorage.getItem('activeAccount')
			setSessionAccount(
				sessionAccountString ? JSON.parse(sessionAccountString) : null,
			)
		}
	}, [])

	// Backup method of retrieving account details
	// MSAL seems to have a bug causing it to lose the login session details on page refresh
	useEffect(() => {
		if (!account && sessionAccount) {
			setAccount(sessionAccount)
		}

		if (account && !sessionAccount) {
			sessionStorage.setItem(
				'activeAccount',
				account ? JSON.stringify(account) : '',
			)
			setSessionAccount(account)
		}

		setContextValue({
			account: account || sessionAccount,
			setAccount,
			setSessionAccount,
		})
	}, [account, sessionAccount])

	return (
		<authContext.Provider value={contextValue}>
			{children}
		</authContext.Provider>
	)
}
