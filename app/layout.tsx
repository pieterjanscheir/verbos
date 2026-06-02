import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Languages } from 'lucide-react'
import { ThemeToggle, themeInitScript } from '@/components/ThemeToggle'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Verbos — Brazilian Portuguese Verb Conjugator',
	description: 'Browse, search, and learn Brazilian Portuguese verb conjugations across five tenses.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' suppressHydrationWarning>
			<head>
				<script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
			</head>
			<body className={`${inter.className} text-rose-950 antialiased dark:text-rose-50`}>
				<div className='flex min-h-screen flex-col'>
					<header className='sticky top-0 z-20 border-b border-rose-200/60 bg-white/70 backdrop-blur-md dark:border-white/10 dark:bg-[#1a1012]/70'>
						<div className='mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8'>
							<div className='flex items-center gap-3'>
								<span className='flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-rose-700 text-white shadow-md shadow-rose-500/30'>
									<Languages className='h-5 w-5' />
								</span>
								<div className='leading-tight'>
									<h1 className='text-lg font-bold tracking-tight text-rose-950 dark:text-rose-50'>
										Verbos
									</h1>
									<p className='text-xs text-rose-600/80 dark:text-rose-300/70'>
										Brazilian Portuguese conjugator
									</p>
								</div>
							</div>
							<ThemeToggle />
						</div>
					</header>
					<main className='mx-auto w-full max-w-7xl flex-1'>{children}</main>
					<footer className='border-t border-rose-200/60 py-6 dark:border-white/10'>
						<div className='mx-auto max-w-7xl px-4 text-center text-sm text-rose-700/70 dark:text-rose-300/60 sm:px-6 lg:px-8'>
							<p>Created to help you learn Brazilian Portuguese verb conjugations</p>
							<p className='mt-1'>&copy; {new Date().getFullYear()} Pieter-Jan Scheir</p>
						</div>
					</footer>
				</div>
			</body>
		</html>
	)
}
