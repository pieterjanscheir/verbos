'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

/** Inline script that applies the saved theme before paint to avoid a flash. */
export const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d);}catch(e){}})();`

export function ThemeToggle() {
	const [dark, setDark] = useState(false)
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
		setDark(document.documentElement.classList.contains('dark'))
	}, [])

	const toggle = () => {
		const next = !dark
		setDark(next)
		document.documentElement.classList.toggle('dark', next)
		try {
			localStorage.setItem('theme', next ? 'dark' : 'light')
		} catch {}
	}

	return (
		<button
			type='button'
			onClick={toggle}
			aria-label='Toggle dark mode'
			aria-pressed={dark}
			className='inline-flex h-9 w-9 items-center justify-center rounded-lg border border-rose-200/70 bg-white/70 text-rose-700 shadow-sm transition-colors hover:bg-rose-100 dark:border-white/10 dark:bg-white/5 dark:text-rose-200 dark:hover:bg-white/10'
		>
			{/* Render a stable icon until mounted to keep SSR/CSR markup aligned */}
			{mounted && dark ? <Sun className='h-5 w-5' /> : <Moon className='h-5 w-5' />}
		</button>
	)
}
