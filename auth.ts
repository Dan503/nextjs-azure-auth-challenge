'use client'
import * as MSAL from '@azure/msal-browser'

export async function getAuth() {
	const baseUri = `${window.location.origin}/azure-auth-fe-only-challenge/`

	const msalConfig: MSAL.Configuration = {
		auth: {
			// The environment variable version of setting clientId
			// There is no way to avoid exposing this to the client without using an edge function
			clientId: process.env.NEXT_PUBLIC_AZURE_CLIENT_ID as string,
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
