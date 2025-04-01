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
			<body className={`${inter.className} bg-zinc-50 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-50`}>
				<div className='flex min-h-screen flex-col'>
					<header className='border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 sticky top-0 z-10'>
						<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between'>
							<h1 className='text-xl font-bold text-violet-600 dark:text-violet-400'>
								Portuguese Verb Conjugator
							</h1>
							<div className='flex items-center space-x-4'>
								<button className='px-3 py-1.5 rounded-md bg-violet-100 text-violet-700 dark:bg-violet-900 dark:text-violet-100 text-sm font-medium hover:bg-violet-200 dark:hover:bg-violet-800 transition-colors'>
									Switch Theme
								</button>
							</div>
						</div>
					</header>
					<main className='flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8'>{children}</main>
					<footer className='border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 py-6'>
						<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-zinc-500 dark:text-zinc-400 text-sm'>
							<p>Created to help you learn Brazilian Portuguese verb conjugations</p>
						</div>
					</footer>
				</div>
			</body>
		</html>
	)
}
