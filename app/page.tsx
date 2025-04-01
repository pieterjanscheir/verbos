'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Verb, verbs } from '@/lib/config'

export default function Home() {
	const [selectedVerb, setSelectedVerb] = useState<Verb | null>(null)
	const [searchTerm, setSearchTerm] = useState('')

	// Set the first verb as selected by default
	useEffect(() => {
		if (verbs.length > 0 && !selectedVerb) {
			setSelectedVerb(verbs[0])
		}
	}, [selectedVerb])

	// Filter verbs based on search term
	const filteredVerbs = verbs.filter(
		(verb) =>
			verb.infinitive.toLowerCase().includes(searchTerm.toLowerCase()) ||
			verb.translation.toLowerCase().includes(searchTerm.toLowerCase()),
	)

	// Function to select a verb
	const handleVerbSelect = (verb: Verb) => {
		setSelectedVerb(verb)
	}

	// Transform the first letter to uppercase
	const capitalize = (str: string) => {
		return str.charAt(0).toUpperCase() + str.slice(1)
	}

	// Get correct conjugation for example sentences
	const getConjugationExample = (verb: string, tense: string) => {
		switch (verb) {
			case 'falar':
				return tense === 'present'
					? 'speak'
					: tense === 'preterite'
					? 'spoke'
					: tense === 'imperfect'
					? 'was speaking'
					: tense === 'future'
					? 'will speak'
					: 'would speak'
			case 'andar':
				return tense === 'present'
					? 'walk'
					: tense === 'preterite'
					? 'walked'
					: tense === 'imperfect'
					? 'was walking'
					: tense === 'future'
					? 'will walk'
					: 'would walk'
			case 'trabalhar':
				return tense === 'present'
					? 'work'
					: tense === 'preterite'
					? 'worked'
					: tense === 'imperfect'
					? 'was working'
					: tense === 'future'
					? 'will work'
					: 'would work'
			case 'comprar':
				return tense === 'present'
					? 'buy'
					: tense === 'preterite'
					? 'bought'
					: tense === 'imperfect'
					? 'was buying'
					: tense === 'future'
					? 'will buy'
					: 'would buy'
			case 'morar':
				return tense === 'present'
					? 'live'
					: tense === 'preterite'
					? 'lived'
					: tense === 'imperfect'
					? 'was living'
					: tense === 'future'
					? 'will live'
					: 'would live'
			case 'comer':
				return tense === 'present'
					? 'eat'
					: tense === 'preterite'
					? 'ate'
					: tense === 'imperfect'
					? 'was eating'
					: tense === 'future'
					? 'will eat'
					: 'would eat'
			case 'beber':
				return tense === 'present'
					? 'drink'
					: tense === 'preterite'
					? 'drank'
					: tense === 'imperfect'
					? 'was drinking'
					: tense === 'future'
					? 'will drink'
					: 'would drink'
			case 'vender':
				return tense === 'present'
					? 'sell'
					: tense === 'preterite'
					? 'sold'
					: tense === 'imperfect'
					? 'was selling'
					: tense === 'future'
					? 'will sell'
					: 'would sell'
			case 'aprender':
				return tense === 'present'
					? 'learn'
					: tense === 'preterite'
					? 'learned'
					: tense === 'imperfect'
					? 'was learning'
					: tense === 'future'
					? 'will learn'
					: 'would learn'
			case 'viver':
				return tense === 'present'
					? 'live'
					: tense === 'preterite'
					? 'lived'
					: tense === 'imperfect'
					? 'was living'
					: tense === 'future'
					? 'will live'
					: 'would live'
			case 'partir':
				return tense === 'present'
					? 'leave'
					: tense === 'preterite'
					? 'left'
					: tense === 'imperfect'
					? 'was leaving'
					: tense === 'future'
					? 'will leave'
					: 'would leave'
			case 'abrir':
				return tense === 'present'
					? 'open'
					: tense === 'preterite'
					? 'opened'
					: tense === 'imperfect'
					? 'was opening'
					: tense === 'future'
					? 'will open'
					: 'would open'
			case 'ser':
				return tense === 'present'
					? 'am/is'
					: tense === 'preterite'
					? 'was'
					: tense === 'imperfect'
					? 'was being'
					: tense === 'future'
					? 'will be'
					: 'would be'
			case 'estar':
				return tense === 'present'
					? 'am/is'
					: tense === 'preterite'
					? 'was'
					: tense === 'imperfect'
					? 'was being'
					: tense === 'future'
					? 'will be'
					: 'would be'
			case 'ir':
				return tense === 'present'
					? 'go'
					: tense === 'preterite'
					? 'went'
					: tense === 'imperfect'
					? 'was going'
					: tense === 'future'
					? 'will go'
					: 'would go'
			case 'ter':
				return tense === 'present'
					? 'have'
					: tense === 'preterite'
					? 'had'
					: tense === 'imperfect'
					? 'was having'
					: tense === 'future'
					? 'will have'
					: 'would have'
			case 'fazer':
				return tense === 'present'
					? 'do/make'
					: tense === 'preterite'
					? 'did/made'
					: tense === 'imperfect'
					? 'was doing/making'
					: tense === 'future'
					? 'will do/make'
					: 'would do/make'
			case 'dizer':
				return tense === 'present'
					? 'say'
					: tense === 'preterite'
					? 'said'
					: tense === 'imperfect'
					? 'was saying'
					: tense === 'future'
					? 'will say'
					: 'would say'
			case 'ver':
				return tense === 'present'
					? 'see'
					: tense === 'preterite'
					? 'saw'
					: tense === 'imperfect'
					? 'was seeing'
					: tense === 'future'
					? 'will see'
					: 'would see'
			case 'pôr':
				return tense === 'present'
					? 'put'
					: tense === 'preterite'
					? 'put'
					: tense === 'imperfect'
					? 'was putting'
					: tense === 'future'
					? 'will put'
					: 'would put'
			case 'poder':
				return tense === 'present'
					? 'can'
					: tense === 'preterite'
					? 'could'
					: tense === 'imperfect'
					? 'was able to'
					: tense === 'future'
					? 'will be able to'
					: 'would be able to'
			case 'saber':
				return tense === 'present'
					? 'know'
					: tense === 'preterite'
					? 'knew'
					: tense === 'imperfect'
					? 'was knowing'
					: tense === 'future'
					? 'will know'
					: 'would know'
			case 'querer':
				return tense === 'present'
					? 'want'
					: tense === 'preterite'
					? 'wanted'
					: tense === 'imperfect'
					? 'was wanting'
					: tense === 'future'
					? 'will want'
					: 'would want'
			case 'ouvir':
				return tense === 'present'
					? 'hear'
					: tense === 'preterite'
					? 'heard'
					: tense === 'imperfect'
					? 'was hearing'
					: tense === 'future'
					? 'will hear'
					: 'would hear'
			case 'dar':
				return tense === 'present'
					? 'give'
					: tense === 'preterite'
					? 'gave'
					: tense === 'imperfect'
					? 'was giving'
					: tense === 'future'
					? 'will give'
					: 'would give'
			case 'trazer':
				return tense === 'present'
					? 'bring'
					: tense === 'preterite'
					? 'brought'
					: tense === 'imperfect'
					? 'was bringing'
					: tense === 'future'
					? 'will bring'
					: 'would bring'
			case 'ler':
				return tense === 'present'
					? 'read'
					: tense === 'preterite'
					? 'read'
					: tense === 'imperfect'
					? 'was reading'
					: tense === 'future'
					? 'will read'
					: 'would read'
			case 'escrever':
				return tense === 'present'
					? 'write'
					: tense === 'preterite'
					? 'wrote'
					: tense === 'imperfect'
					? 'was writing'
					: tense === 'future'
					? 'will write'
					: 'would write'
			default:
				return 'do'
		}
	}

	return (
		<div className='flex h-full bg-fca5a5 p-4'>
			{/* Sidebar */}
			<div className='w-72 border-r border-red-300 pr-4 overflow-y-auto bg-red-50 rounded-xl shadow-lg mx-4 p-4'>
				<div className='mb-6'>
					<input
						type='text'
						placeholder='Search verbs...'
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className='w-full px-3 py-2 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-white text-7f1d1d placeholder-red-400 shadow-sm'
					/>
				</div>
				<div className='space-y-2'>
					{filteredVerbs.map((verb) => (
						<button
							key={verb.infinitive}
							onClick={() => handleVerbSelect(verb)}
							className={`w-full text-left px-4 py-3 rounded-lg transition-colors shadow-sm ${
								selectedVerb?.infinitive === verb.infinitive
									? 'bg-red-200 text-7f1d1d font-semibold shadow-md'
									: 'hover:bg-red-200 text-7f1d1d bg-white'
							}`}
						>
							<div className='font-medium'>{verb.infinitive}</div>
							<div className='text-xs text-red-900'>{verb.translation}</div>
						</button>
					))}
				</div>
			</div>

			{/* Main content */}
			<div className='flex-1 overflow-y-auto pl-6 py-6 bg-fca5a5'>
				{selectedVerb ? (
					<motion.div
						key={selectedVerb.infinitive}
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3 }}
						className='max-w-4xl mx-auto'
					>
						<div className='mb-8 bg-white p-6 rounded-xl shadow-lg'>
							<h2 className='text-3xl font-bold text-7f1d1d'>{capitalize(selectedVerb.infinitive)}</h2>
							<p className='text-lg text-red-900 mt-2'>
								{selectedVerb.translation} | {selectedVerb.type}
							</p>
						</div>

						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
							{/* Present Tense */}
							<div className='bg-white rounded-xl shadow-lg border border-red-200 overflow-hidden transform transition-all hover:scale-[1.02]'>
								<div className='px-6 py-4 border-b border-red-200 bg-red-50'>
									<h3 className='text-lg font-semibold text-7f1d1d'>Present Tense</h3>
								</div>
								<div className='p-6'>
									<div className='space-y-4'>
										<div>
											<div className='text-sm font-medium text-red-700 mb-1'>Eu</div>
											<div className='text-xl font-medium text-7f1d1d'>
												{selectedVerb.tenses.present.eu}
											</div>
										</div>
										<div>
											<div className='text-sm font-medium text-red-700 mb-1'>Você/Ele/Ela</div>
											<div className='text-xl font-medium text-7f1d1d'>
												{selectedVerb.tenses.present.você}
											</div>
										</div>
										<div>
											<div className='text-sm font-medium text-red-700 mb-1'>Nós</div>
											<div className='text-xl font-medium text-7f1d1d'>
												{selectedVerb.tenses.present.nós}
											</div>
										</div>
										<div>
											<div className='text-sm font-medium text-red-700 mb-1'>Vocês/Eles/Elas</div>
											<div className='text-xl font-medium text-7f1d1d'>
												{selectedVerb.tenses.present.vocês}
											</div>
										</div>
									</div>
									<div className='mt-6 pt-4 border-t border-red-100'>
										<div className='text-7f1d1d font-medium mb-2'>Example:</div>
										<div className='text-7f1d1d'>
											Eu {selectedVerb.tenses.present.eu} todos os dias.
										</div>
										<div className='text-sm text-red-900 mt-1'>
											I {getConjugationExample(selectedVerb.infinitive, 'present')} every day.
										</div>
									</div>
								</div>
							</div>

							{/* Preterite Tense */}
							<div className='bg-white rounded-xl shadow-lg border border-red-200 overflow-hidden transform transition-all hover:scale-[1.02]'>
								<div className='px-6 py-4 border-b border-red-200 bg-red-50'>
									<h3 className='text-lg font-semibold text-7f1d1d'>Preterite Tense</h3>
								</div>
								<div className='p-6'>
									<div className='space-y-4'>
										<div>
											<div className='text-sm font-medium text-red-700 mb-1'>Eu</div>
											<div className='text-xl font-medium text-7f1d1d'>
												{selectedVerb.tenses.preterite.eu}
											</div>
										</div>
										<div>
											<div className='text-sm font-medium text-red-700 mb-1'>Você/Ele/Ela</div>
											<div className='text-xl font-medium text-7f1d1d'>
												{selectedVerb.tenses.preterite.você}
											</div>
										</div>
										<div>
											<div className='text-sm font-medium text-red-700 mb-1'>Nós</div>
											<div className='text-xl font-medium text-7f1d1d'>
												{selectedVerb.tenses.preterite.nós}
											</div>
										</div>
										<div>
											<div className='text-sm font-medium text-red-700 mb-1'>Vocês/Eles/Elas</div>
											<div className='text-xl font-medium text-7f1d1d'>
												{selectedVerb.tenses.preterite.vocês}
											</div>
										</div>
									</div>
									<div className='mt-6 pt-4 border-t border-red-100'>
										<div className='text-7f1d1d font-medium mb-2'>Example:</div>
										<div className='text-7f1d1d'>Eu {selectedVerb.tenses.preterite.eu} ontem.</div>
										<div className='text-sm text-red-900 mt-1'>
											I {getConjugationExample(selectedVerb.infinitive, 'preterite')} yesterday.
										</div>
									</div>
								</div>
							</div>

							{/* Imperfect Tense */}
							<div className='bg-white rounded-xl shadow-lg border border-red-200 overflow-hidden transform transition-all hover:scale-[1.02]'>
								<div className='px-6 py-4 border-b border-red-200 bg-red-50'>
									<h3 className='text-lg font-semibold text-7f1d1d'>Imperfect Tense</h3>
								</div>
								<div className='p-6'>
									<div className='space-y-4'>
										<div>
											<div className='text-sm font-medium text-red-700 mb-1'>Eu</div>
											<div className='text-xl font-medium text-7f1d1d'>
												{selectedVerb.tenses.imperfect.eu}
											</div>
										</div>
										<div>
											<div className='text-sm font-medium text-red-700 mb-1'>Você/Ele/Ela</div>
											<div className='text-xl font-medium text-7f1d1d'>
												{selectedVerb.tenses.imperfect.você}
											</div>
										</div>
										<div>
											<div className='text-sm font-medium text-red-700 mb-1'>Nós</div>
											<div className='text-xl font-medium text-7f1d1d'>
												{selectedVerb.tenses.imperfect.nós}
											</div>
										</div>
										<div>
											<div className='text-sm font-medium text-red-700 mb-1'>Vocês/Eles/Elas</div>
											<div className='text-xl font-medium text-7f1d1d'>
												{selectedVerb.tenses.imperfect.vocês}
											</div>
										</div>
									</div>
									<div className='mt-6 pt-4 border-t border-red-100'>
										<div className='text-7f1d1d font-medium mb-2'>Example:</div>
										<div className='text-7f1d1d'>
											Eu {selectedVerb.tenses.imperfect.eu} quando criança.
										</div>
										<div className='text-sm text-red-900 mt-1'>
											I {getConjugationExample(selectedVerb.infinitive, 'imperfect')} when I was a
											child.
										</div>
									</div>
								</div>
							</div>

							{/* Future Tense */}
							<div className='bg-white rounded-xl shadow-lg border border-red-200 overflow-hidden transform transition-all hover:scale-[1.02]'>
								<div className='px-6 py-4 border-b border-red-200 bg-red-50'>
									<h3 className='text-lg font-semibold text-7f1d1d'>Future Tense</h3>
								</div>
								<div className='p-6'>
									<div className='space-y-4'>
										<div>
											<div className='text-sm font-medium text-red-700 mb-1'>Eu</div>
											<div className='text-xl font-medium text-7f1d1d'>
												{selectedVerb.tenses.future.eu}
											</div>
										</div>
										<div>
											<div className='text-sm font-medium text-red-700 mb-1'>Você/Ele/Ela</div>
											<div className='text-xl font-medium text-7f1d1d'>
												{selectedVerb.tenses.future.você}
											</div>
										</div>
										<div>
											<div className='text-sm font-medium text-red-700 mb-1'>Nós</div>
											<div className='text-xl font-medium text-7f1d1d'>
												{selectedVerb.tenses.future.nós}
											</div>
										</div>
										<div>
											<div className='text-sm font-medium text-red-700 mb-1'>Vocês/Eles/Elas</div>
											<div className='text-xl font-medium text-7f1d1d'>
												{selectedVerb.tenses.future.vocês}
											</div>
										</div>
									</div>
									<div className='mt-6 pt-4 border-t border-red-100'>
										<div className='text-7f1d1d font-medium mb-2'>Example:</div>
										<div className='text-7f1d1d'>Eu {selectedVerb.tenses.future.eu} amanhã.</div>
										<div className='text-sm text-red-900 mt-1'>
											I {getConjugationExample(selectedVerb.infinitive, 'future')} tomorrow.
										</div>
									</div>
								</div>
							</div>

							{/* Conditional Tense */}
							<div className='bg-white rounded-xl shadow-lg border border-red-200 overflow-hidden transform transition-all hover:scale-[1.02]'>
								<div className='px-6 py-4 border-b border-red-200 bg-red-50'>
									<h3 className='text-lg font-semibold text-7f1d1d'>Conditional Tense</h3>
								</div>
								<div className='p-6'>
									<div className='space-y-4'>
										<div>
											<div className='text-sm font-medium text-red-700 mb-1'>Eu</div>
											<div className='text-xl font-medium text-7f1d1d'>
												{selectedVerb.tenses.conditional.eu}
											</div>
										</div>
										<div>
											<div className='text-sm font-medium text-red-700 mb-1'>Você/Ele/Ela</div>
											<div className='text-xl font-medium text-7f1d1d'>
												{selectedVerb.tenses.conditional.você}
											</div>
										</div>
										<div>
											<div className='text-sm font-medium text-red-700 mb-1'>Nós</div>
											<div className='text-xl font-medium text-7f1d1d'>
												{selectedVerb.tenses.conditional.nós}
											</div>
										</div>
										<div>
											<div className='text-sm font-medium text-red-700 mb-1'>Vocês/Eles/Elas</div>
											<div className='text-xl font-medium text-7f1d1d'>
												{selectedVerb.tenses.conditional.vocês}
											</div>
										</div>
									</div>
									<div className='mt-6 pt-4 border-t border-red-100'>
										<div className='text-7f1d1d font-medium mb-2'>Example:</div>
										<div className='text-7f1d1d'>
											Eu {selectedVerb.tenses.conditional.eu} se pudesse.
										</div>
										<div className='text-sm text-red-900 mt-1'>
											I {getConjugationExample(selectedVerb.infinitive, 'conditional')} if I
											could.
										</div>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				) : (
					<div className='flex items-center justify-center h-full'>
						<p className='text-7f1d1d font-medium p-8 bg-white rounded-xl shadow-lg'>
							Select a verb to see its conjugation
						</p>
					</div>
				)}
			</div>
		</div>
	)
}
