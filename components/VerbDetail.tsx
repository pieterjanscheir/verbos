'use client'

import { motion } from 'framer-motion'
import { capitalize, TENSES, type Verb } from '@/lib/config'
import { ConjugationCard } from './ConjugationCard'

const TYPE_STYLES: Record<string, string> = {
	'-ar': 'bg-amber-100 text-amber-800 dark:bg-amber-400/15 dark:text-amber-300',
	'-er': 'bg-sky-100 text-sky-800 dark:bg-sky-400/15 dark:text-sky-300',
	'-ir': 'bg-emerald-100 text-emerald-800 dark:bg-emerald-400/15 dark:text-emerald-300',
	irregular: 'bg-rose-100 text-rose-800 dark:bg-rose-400/15 dark:text-rose-300',
}

function typeBadge(type: string) {
	if (type.includes('irregular')) return TYPE_STYLES.irregular
	if (type.includes('-ar')) return TYPE_STYLES['-ar']
	if (type.includes('-er')) return TYPE_STYLES['-er']
	return TYPE_STYLES['-ir']
}

export function VerbDetail({ verb }: { verb: Verb }) {
	return (
		<motion.div
			key={verb.infinitive}
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3 }}
		>
			<div className='mb-6 rounded-2xl border border-rose-200/70 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/[0.04]'>
				<div className='flex flex-wrap items-center gap-3'>
					<h2 className='text-3xl font-bold tracking-tight text-rose-950 dark:text-rose-50'>
						{capitalize(verb.infinitive)}
					</h2>
					<span
						className={`rounded-full px-3 py-1 text-xs font-semibold ${typeBadge(verb.type)}`}
					>
						{verb.type}
					</span>
				</div>
				<p className='mt-2 text-lg text-rose-700 dark:text-rose-200'>{verb.translation}</p>
			</div>

			<div className='grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3'>
				{TENSES.map((t, i) => (
					<ConjugationCard
						key={t.key}
						tenseKey={t.key}
						conjugation={verb.tenses[t.key]}
						en={verb.en}
						index={i}
					/>
				))}
			</div>
		</motion.div>
	)
}
