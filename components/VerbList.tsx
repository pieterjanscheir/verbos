'use client'

import { useEffect, useRef, type RefObject } from 'react'
import { Search, X } from 'lucide-react'
import { GROUPS, groupOf, type Verb, type VerbGroup } from '@/lib/config'

type Props = {
	verbs: Verb[]
	selected: string | null
	onSelect: (infinitive: string) => void
	query: string
	onQueryChange: (q: string) => void
	group: VerbGroup
	onGroupChange: (g: VerbGroup) => void
	searchRef: RefObject<HTMLInputElement | null>
}

const DOT: Record<string, string> = {
	'-ar': 'bg-amber-400',
	'-er': 'bg-sky-400',
	'-ir': 'bg-emerald-400',
	irregular: 'bg-rose-400',
}

export function VerbList({
	verbs,
	selected,
	onSelect,
	query,
	onQueryChange,
	group,
	onGroupChange,
	searchRef,
}: Props) {
	const listRef = useRef<HTMLDivElement>(null)

	// Keep the selected item visible when navigating with the keyboard.
	useEffect(() => {
		if (!selected || !listRef.current) return
		const el = listRef.current.querySelector<HTMLElement>(`[data-verb="${selected}"]`)
		el?.scrollIntoView({ block: 'nearest' })
	}, [selected])

	return (
		<div className='flex flex-col gap-4'>
			<div className='relative'>
				<Search className='pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-rose-400' />
				<input
					ref={searchRef}
					type='text'
					placeholder='Search verbs…  ( / )'
					value={query}
					onChange={(e) => onQueryChange(e.target.value)}
					className='w-full rounded-xl border border-rose-200/70 bg-white/80 py-2.5 pl-9 pr-9 text-rose-950 shadow-sm outline-none transition placeholder:text-rose-400 focus:border-rose-400 focus:ring-2 focus:ring-rose-400/40 dark:border-white/10 dark:bg-white/5 dark:text-rose-50 dark:placeholder:text-rose-300/50'
				/>
				{query && (
					<button
						type='button'
						onClick={() => onQueryChange('')}
						aria-label='Clear search'
						className='absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1 text-rose-400 hover:bg-rose-100 hover:text-rose-600 dark:hover:bg-white/10'
					>
						<X className='h-4 w-4' />
					</button>
				)}
			</div>

			<div className='flex flex-wrap gap-1.5'>
				{GROUPS.map((g) => (
					<button
						key={g.key}
						type='button'
						onClick={() => onGroupChange(g.key)}
						className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
							group === g.key
								? 'bg-rose-600 text-white shadow-sm shadow-rose-600/30'
								: 'bg-rose-100/70 text-rose-700 hover:bg-rose-200 dark:bg-white/5 dark:text-rose-200 dark:hover:bg-white/10'
						}`}
					>
						{g.label}
					</button>
				))}
			</div>

			<div
				ref={listRef}
				className='scrollbar-thin -mr-1 max-h-[60vh] space-y-1.5 overflow-y-auto pr-1 lg:max-h-[calc(100vh-19rem)]'
			>
				{verbs.length === 0 ? (
					<p className='px-2 py-6 text-center text-sm text-rose-500/80'>No verbs match.</p>
				) : (
					verbs.map((verb) => {
						const active = selected === verb.infinitive
						return (
							<button
								key={verb.infinitive}
								data-verb={verb.infinitive}
								onClick={() => onSelect(verb.infinitive)}
								className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition ${
									active
										? 'bg-rose-600 text-white shadow-sm shadow-rose-600/30'
										: 'bg-white/60 text-rose-950 hover:bg-rose-100 dark:bg-white/[0.03] dark:text-rose-50 dark:hover:bg-white/10'
								}`}
							>
								<span
									className={`h-2 w-2 shrink-0 rounded-full ${DOT[groupOf(verb)]} ${
										active ? 'opacity-90' : ''
									}`}
								/>
								<span className='min-w-0 flex-1'>
									<span className='block font-medium'>{verb.infinitive}</span>
									<span
										className={`block truncate text-xs ${
											active ? 'text-rose-100' : 'text-rose-500/80 dark:text-rose-300/60'
										}`}
									>
										{verb.translation}
									</span>
								</span>
							</button>
						)
					})
				)}
			</div>
		</div>
	)
}
