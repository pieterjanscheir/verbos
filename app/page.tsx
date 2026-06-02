'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { groupOf, verbs, type VerbGroup } from '@/lib/config'
import { VerbList } from '@/components/VerbList'
import { VerbDetail } from '@/components/VerbDetail'

function readHash(): string | null {
	if (typeof window === 'undefined') return null
	const raw = decodeURIComponent(window.location.hash.replace(/^#/, ''))
	return verbs.some((v) => v.infinitive === raw) ? raw : null
}

export default function Home() {
	const [query, setQuery] = useState('')
	const [group, setGroup] = useState<VerbGroup>('all')
	const [selected, setSelected] = useState<string | null>(null)
	const searchRef = useRef<HTMLInputElement>(null)

	// Initialise from the URL hash (deep link) or fall back to the first verb,
	// and stay in sync with browser back/forward navigation.
	useEffect(() => {
		setSelected(readHash() ?? verbs[0]?.infinitive ?? null)
		const onHash = () => {
			const h = readHash()
			if (h) setSelected(h)
		}
		window.addEventListener('hashchange', onHash)
		return () => window.removeEventListener('hashchange', onHash)
	}, [])

	const select = useCallback((infinitive: string) => {
		setSelected(infinitive)
		if (typeof window !== 'undefined') {
			window.history.replaceState(null, '', `#${encodeURIComponent(infinitive)}`)
		}
	}, [])

	const filtered = useMemo(() => {
		const q = query.trim().toLowerCase()
		return verbs.filter((v) => {
			const matchesGroup = group === 'all' || groupOf(v) === group
			const matchesQuery =
				!q ||
				v.infinitive.toLowerCase().includes(q) ||
				v.translation.toLowerCase().includes(q)
			return matchesGroup && matchesQuery
		})
	}, [query, group])

	// Keyboard navigation: "/" focuses search, arrows move through the list.
	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			const target = e.target as HTMLElement | null
			const typing = target?.tagName === 'INPUT' || target?.tagName === 'TEXTAREA'

			if (e.key === '/' && !typing) {
				e.preventDefault()
				searchRef.current?.focus()
				return
			}
			if (e.key === 'Escape' && typing && target === searchRef.current) {
				setQuery('')
				searchRef.current?.blur()
				return
			}
			if ((e.key === 'ArrowDown' || e.key === 'ArrowUp') && filtered.length > 0) {
				e.preventDefault()
				const idx = filtered.findIndex((v) => v.infinitive === selected)
				const delta = e.key === 'ArrowDown' ? 1 : -1
				const next = idx === -1 ? 0 : (idx + delta + filtered.length) % filtered.length
				select(filtered[next].infinitive)
			}
		}
		window.addEventListener('keydown', onKey)
		return () => window.removeEventListener('keydown', onKey)
	}, [filtered, selected, select])

	const selectedVerb = useMemo(
		() => verbs.find((v) => v.infinitive === selected) ?? null,
		[selected],
	)

	return (
		<div className='grid grid-cols-1 gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[20rem_1fr] lg:px-8'>
			<aside className='lg:sticky lg:top-[5.5rem] lg:self-start'>
				<VerbList
					verbs={filtered}
					selected={selected}
					onSelect={select}
					query={query}
					onQueryChange={setQuery}
					group={group}
					onGroupChange={setGroup}
					searchRef={searchRef}
				/>
			</aside>

			<section className='min-w-0'>
				{selectedVerb ? (
					<VerbDetail verb={selectedVerb} />
				) : (
					<div className='flex h-64 items-center justify-center rounded-2xl border border-rose-200/70 bg-white/70 text-rose-600 dark:border-white/10 dark:bg-white/5 dark:text-rose-300'>
						Select a verb to see its conjugation.
					</div>
				)}
			</section>
		</div>
	)
}
