'use client'
import * as MSAL from '@azure/msal-browser'

export async function getAuth() {
	const baseUri = `${window.location.origin}/azure-auth-fe-only-challenge/`

	const msalConfig: MSAL.Configuration = {
		auth: {
			// There is no way to avoid exposing this to the client without using an edge function
			// Hardcoding the value to make things simple
			clientId: '625af569-3c39-4e98-a97c-3a60973c09a6',
			redirectUri: baseUri,
			// I'm using this because I'm testing with a personal microsoft account
			authority: 'https://login.microsoftonline.com/consumers',
			// This is supposed to redirect back to the home page after logging out. It doesn't appear to be working.
			postLogoutRedirectUri: baseUri,
		},
		cache: {
			cacheLocation: 'localStorage',
		},
	}

	const auth = await MSAL.createStandardPublicClientApplication(msalConfig)
	return auth
}
