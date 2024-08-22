import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthContextProvider } from '../components/AuthContext'
import { Suspense } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: {
		template: '%s | Azure Auth Challenge',
		default: 'Azure Auth Challenge',
	},
	description:
		'Creating an Next.js App that uses MSLA authentication that runs in GitHub Pages.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<main>
					<Suspense fallback={<p>Loading...</p>}>
						<AuthContextProvider>{children}</AuthContextProvider>
					</Suspense>
				</main>
			</body>
		</html>
	)
}
