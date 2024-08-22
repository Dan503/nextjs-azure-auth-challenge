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

type SetState<T> = React.Dispatch<React.SetStateAction<T>>

export interface AuthContextValue {
	account: AccountInfo | null
	setAccount: SetState<AccountInfo | null>
	isIntendedToBeLoggedIn: boolean | undefined
	setIsIntendedToBeLoggedIn: SetState<boolean | undefined>
}

export const defaultAuthContext: AuthContextValue = {
	account: null,
	setAccount: () => null,
	isIntendedToBeLoggedIn: undefined,
	setIsIntendedToBeLoggedIn: () => null,
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
	const [isIntendedToBeLoggedIn, setIsIntendedToBeLoggedIn] =
		useState<boolean>()

	useEffect(() => {
		handleAuthFetch()

		async function handleAuthFetch() {
			try {
				const auth = await getAuth()
				const activeAccount = await auth.getActiveAccount()
				setIsIntendedToBeLoggedIn(true)
				setAccount(activeAccount)
			} catch {
				setIsIntendedToBeLoggedIn(false)
				setAccount(null)
			}
		}
	}, [])

	// Backup method of retrieving account details
	// MSAL seems to have a bug causing it to lose the login session details on page refresh
	useEffect(() => {
		const sessionStorageString = sessionStorage.getItem('activeAccount')
		const isLoggedIn = Boolean(account || sessionStorageString)

		if (isIntendedToBeLoggedIn === false && isLoggedIn) {
			setAccount(null)
			setSessionAccount(null)
			return
		}

		if (!account && sessionStorageString) {
			const storageValue = JSON.parse(sessionStorageString)
			setIsIntendedToBeLoggedIn(true)
			setAccount(storageValue)
			setSessionAccount(storageValue)
			return
		}

		if (account && !sessionStorageString) {
			setIsIntendedToBeLoggedIn(true)
			setSessionAccount(account)
		}
	}, [account, isIntendedToBeLoggedIn])

	useEffect(() => {
		if (isIntendedToBeLoggedIn && sessionAccount) {
			sessionStorage.setItem(
				'activeAccount',
				JSON.stringify(sessionAccount),
			)
		} else if (isIntendedToBeLoggedIn === false) {
			sessionStorage.setItem('activeAccount', '')
		}
	}, [isIntendedToBeLoggedIn, sessionAccount])

	useEffect(() => {
		setContextValue({
			account: isIntendedToBeLoggedIn === false ? null : account,
			setAccount,
			isIntendedToBeLoggedIn,
			setIsIntendedToBeLoggedIn,
		})
	}, [account, isIntendedToBeLoggedIn])

	return (
		<authContext.Provider value={contextValue}>
			{children}
		</authContext.Provider>
	)
}
