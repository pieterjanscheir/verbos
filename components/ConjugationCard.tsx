'use client'

import { motion } from 'framer-motion'
import { PEOPLE, type EnglishForms, type Conjugation, type TenseKey, TENSES } from '@/lib/config'

type Props = {
	tenseKey: TenseKey
	conjugation: Conjugation
	en: EnglishForms
	index: number
}

export function ConjugationCard({ tenseKey, conjugation, en, index }: Props) {
	const tense = TENSES.find((t) => t.key === tenseKey)!

	return (
		<motion.div
			initial={{ opacity: 0, y: 12 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.25, delay: index * 0.04 }}
			className='overflow-hidden rounded-2xl border border-rose-200/70 bg-white/80 shadow-sm shadow-rose-900/5 backdrop-blur transition-shadow hover:shadow-md hover:shadow-rose-900/10 dark:border-white/10 dark:bg-white/[0.04] dark:shadow-black/20'
		>
			<div className='border-b border-rose-200/70 bg-rose-50/70 px-5 py-3 dark:border-white/10 dark:bg-white/[0.03]'>
				<h3 className='text-sm font-semibold uppercase tracking-wide text-rose-700 dark:text-rose-300'>
					{tense.label}
				</h3>
			</div>
			<div className='p-5'>
				<dl className='space-y-3'>
					{PEOPLE.map((p) => (
						<div key={p.key} className='flex items-baseline justify-between gap-3'>
							<dt className='text-xs font-medium text-rose-500/90 dark:text-rose-400/80'>{p.label}</dt>
							<dd className='text-right text-lg font-semibold text-rose-950 dark:text-rose-50'>
								{conjugation[p.key]}
							</dd>
						</div>
					))}
				</dl>
				<div className='mt-4 border-t border-rose-100 pt-3 dark:border-white/10'>
					<p className='font-medium text-rose-900 dark:text-rose-100'>{tense.pt(conjugation.eu)}</p>
					<p className='mt-0.5 text-sm text-rose-600/80 dark:text-rose-300/70'>{tense.en(en)}</p>
				</div>
			</div>
		</motion.div>
	)
}
