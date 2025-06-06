import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Portuguese Verb Conjugator',
	description: 'Learn and practice Brazilian Portuguese verb conjugations',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={`${inter.className} bg-fca5a5 text-7f1d1d`}>
				<div className='flex min-h-screen flex-col'>
					<header className='border-b border-red-300 bg-red-50 sticky top-0 z-10 shadow-md'>
						<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between'>
							<h1 className='text-xl font-bold text-7f1d1d'>Portuguese Verb Conjugator</h1>
						</div>
					</header>
					<main className='flex-1 w-full mx-auto'>{children}</main>
					<footer className='border-t border-red-300 bg-red-50 py-6 shadow-inner'>
						<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-red-900 text-sm'>
							<p>Created to help you learn Brazilian Portuguese verb conjugations</p>
							<p className='mt-2'>&copy; {new Date().getFullYear()} Pieter-Jan Scheir</p>
						</div>
					</footer>
				</div>
			</body>
		</html>
	)
}
