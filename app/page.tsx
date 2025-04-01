'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// Define the type for our verb data
type Verb = {
	infinitive: string
	translation: string
	type: string
	tenses: {
		present: {
			eu: string
			você: string
			nós: string
			vocês: string
		}
		preterite: {
			eu: string
			você: string
			nós: string
			vocês: string
		}
		imperfect: {
			eu: string
			você: string
			nós: string
			vocês: string
		}
		future: {
			eu: string
			você: string
			nós: string
			vocês: string
		}
		conditional: {
			eu: string
			você: string
			nós: string
			vocês: string
		}
	}
}

// Verb data
const verbs: Verb[] = [
	{
		infinitive: 'falar',
		translation: 'to speak',
		type: 'regular -ar',
		tenses: {
			present: {
				eu: 'falo',
				você: 'fala',
				nós: 'falamos',
				vocês: 'falam',
			},
			preterite: {
				eu: 'falei',
				você: 'falou',
				nós: 'falamos',
				vocês: 'falaram',
			},
			imperfect: {
				eu: 'falava',
				você: 'falava',
				nós: 'falávamos',
				vocês: 'falavam',
			},
			future: {
				eu: 'falarei',
				você: 'falará',
				nós: 'falaremos',
				vocês: 'falarão',
			},
			conditional: {
				eu: 'falaria',
				você: 'falaria',
				nós: 'falaríamos',
				vocês: 'falariam',
			},
		},
	},
	{
		infinitive: 'andar',
		translation: 'to walk',
		type: 'regular -ar',
		tenses: {
			present: {
				eu: 'ando',
				você: 'anda',
				nós: 'andamos',
				vocês: 'andam',
			},
			preterite: {
				eu: 'andei',
				você: 'andou',
				nós: 'andamos',
				vocês: 'andaram',
			},
			imperfect: {
				eu: 'andava',
				você: 'andava',
				nós: 'andávamos',
				vocês: 'andavam',
			},
			future: {
				eu: 'andarei',
				você: 'andará',
				nós: 'andaremos',
				vocês: 'andarão',
			},
			conditional: {
				eu: 'andaria',
				você: 'andaria',
				nós: 'andaríamos',
				vocês: 'andariam',
			},
		},
	},
	{
		infinitive: 'trabalhar',
		translation: 'to work',
		type: 'regular -ar',
		tenses: {
			present: {
				eu: 'trabalho',
				você: 'trabalha',
				nós: 'trabalhamos',
				vocês: 'trabalham',
			},
			preterite: {
				eu: 'trabalhei',
				você: 'trabalhou',
				nós: 'trabalhamos',
				vocês: 'trabalharam',
			},
			imperfect: {
				eu: 'trabalhava',
				você: 'trabalhava',
				nós: 'trabalhávamos',
				vocês: 'trabalhavam',
			},
			future: {
				eu: 'trabalharei',
				você: 'trabalhará',
				nós: 'trabalharemos',
				vocês: 'trabalharão',
			},
			conditional: {
				eu: 'trabalharia',
				você: 'trabalharia',
				nós: 'trabalharíamos',
				vocês: 'trabalhariam',
			},
		},
	},
	{
		infinitive: 'comprar',
		translation: 'to buy',
		type: 'regular -ar',
		tenses: {
			present: {
				eu: 'compro',
				você: 'compra',
				nós: 'compramos',
				vocês: 'compram',
			},
			preterite: {
				eu: 'comprei',
				você: 'comprou',
				nós: 'compramos',
				vocês: 'compraram',
			},
			imperfect: {
				eu: 'comprava',
				você: 'comprava',
				nós: 'comprávamos',
				vocês: 'compravam',
			},
			future: {
				eu: 'comprarei',
				você: 'comprará',
				nós: 'compraremos',
				vocês: 'comprarão',
			},
			conditional: {
				eu: 'compraria',
				você: 'compraria',
				nós: 'compraríamos',
				vocês: 'comprariam',
			},
		},
	},
	{
		infinitive: 'morar',
		translation: 'to live, to reside',
		type: 'regular -ar',
		tenses: {
			present: {
				eu: 'moro',
				você: 'mora',
				nós: 'moramos',
				vocês: 'moram',
			},
			preterite: {
				eu: 'morei',
				você: 'morou',
				nós: 'moramos',
				vocês: 'moraram',
			},
			imperfect: {
				eu: 'morava',
				você: 'morava',
				nós: 'morávamos',
				vocês: 'moravam',
			},
			future: {
				eu: 'morarei',
				você: 'morará',
				nós: 'moraremos',
				vocês: 'morarão',
			},
			conditional: {
				eu: 'moraria',
				você: 'moraria',
				nós: 'moraríamos',
				vocês: 'morariam',
			},
		},
	},
	{
		infinitive: 'comer',
		translation: 'to eat',
		type: 'regular -er',
		tenses: {
			present: {
				eu: 'como',
				você: 'come',
				nós: 'comemos',
				vocês: 'comem',
			},
			preterite: {
				eu: 'comi',
				você: 'comeu',
				nós: 'comemos',
				vocês: 'comeram',
			},
			imperfect: {
				eu: 'comia',
				você: 'comia',
				nós: 'comíamos',
				vocês: 'comiam',
			},
			future: {
				eu: 'comerei',
				você: 'comerá',
				nós: 'comeremos',
				vocês: 'comerão',
			},
			conditional: {
				eu: 'comeria',
				você: 'comeria',
				nós: 'comeríamos',
				vocês: 'comeriam',
			},
		},
	},
	{
		infinitive: 'beber',
		translation: 'to drink',
		type: 'regular -er',
		tenses: {
			present: {
				eu: 'bebo',
				você: 'bebe',
				nós: 'bebemos',
				vocês: 'bebem',
			},
			preterite: {
				eu: 'bebi',
				você: 'bebeu',
				nós: 'bebemos',
				vocês: 'beberam',
			},
			imperfect: {
				eu: 'bebia',
				você: 'bebia',
				nós: 'bebíamos',
				vocês: 'bebiam',
			},
			future: {
				eu: 'beberei',
				você: 'beberá',
				nós: 'beberemos',
				vocês: 'beberão',
			},
			conditional: {
				eu: 'beberia',
				você: 'beberia',
				nós: 'beberíamos',
				vocês: 'beberiam',
			},
		},
	},
	{
		infinitive: 'vender',
		translation: 'to sell',
		type: 'regular -er',
		tenses: {
			present: {
				eu: 'vendo',
				você: 'vende',
				nós: 'vendemos',
				vocês: 'vendem',
			},
			preterite: {
				eu: 'vendi',
				você: 'vendeu',
				nós: 'vendemos',
				vocês: 'venderam',
			},
			imperfect: {
				eu: 'vendia',
				você: 'vendia',
				nós: 'vendíamos',
				vocês: 'vendiam',
			},
			future: {
				eu: 'venderei',
				você: 'venderá',
				nós: 'venderemos',
				vocês: 'venderão',
			},
			conditional: {
				eu: 'venderia',
				você: 'venderia',
				nós: 'venderíamos',
				vocês: 'venderiam',
			},
		},
	},
	{
		infinitive: 'aprender',
		translation: 'to learn',
		type: 'regular -er',
		tenses: {
			present: {
				eu: 'aprendo',
				você: 'aprende',
				nós: 'aprendemos',
				vocês: 'aprendem',
			},
			preterite: {
				eu: 'aprendi',
				você: 'aprendeu',
				nós: 'aprendemos',
				vocês: 'aprenderam',
			},
			imperfect: {
				eu: 'aprendia',
				você: 'aprendia',
				nós: 'aprendíamos',
				vocês: 'aprendiam',
			},
			future: {
				eu: 'aprenderei',
				você: 'aprenderá',
				nós: 'aprenderemos',
				vocês: 'aprenderão',
			},
			conditional: {
				eu: 'aprenderia',
				você: 'aprenderia',
				nós: 'aprenderíamos',
				vocês: 'aprenderiam',
			},
		},
	},
	{
		infinitive: 'viver',
		translation: 'to live (life)',
		type: 'regular -er',
		tenses: {
			present: {
				eu: 'vivo',
				você: 'vive',
				nós: 'vivemos',
				vocês: 'vivem',
			},
			preterite: {
				eu: 'vivi',
				você: 'viveu',
				nós: 'vivemos',
				vocês: 'viveram',
			},
			imperfect: {
				eu: 'vivia',
				você: 'vivia',
				nós: 'vivíamos',
				vocês: 'viviam',
			},
			future: {
				eu: 'viverei',
				você: 'viverá',
				nós: 'viveremos',
				vocês: 'viverão',
			},
			conditional: {
				eu: 'viveria',
				você: 'viveria',
				nós: 'viveríamos',
				vocês: 'viveriam',
			},
		},
	},
	{
		infinitive: 'partir',
		translation: 'to leave, to depart',
		type: 'regular -ir',
		tenses: {
			present: {
				eu: 'parto',
				você: 'parte',
				nós: 'partimos',
				vocês: 'partem',
			},
			preterite: {
				eu: 'parti',
				você: 'partiu',
				nós: 'partimos',
				vocês: 'partiram',
			},
			imperfect: {
				eu: 'partia',
				você: 'partia',
				nós: 'partíamos',
				vocês: 'partiam',
			},
			future: {
				eu: 'partirei',
				você: 'partirá',
				nós: 'partiremos',
				vocês: 'partirão',
			},
			conditional: {
				eu: 'partiria',
				você: 'partiria',
				nós: 'partiríamos',
				vocês: 'partiriam',
			},
		},
	},
	{
		infinitive: 'abrir',
		translation: 'to open',
		type: 'regular -ir',
		tenses: {
			present: {
				eu: 'abro',
				você: 'abre',
				nós: 'abrimos',
				vocês: 'abrem',
			},
			preterite: {
				eu: 'abri',
				você: 'abriu',
				nós: 'abrimos',
				vocês: 'abriram',
			},
			imperfect: {
				eu: 'abria',
				você: 'abria',
				nós: 'abríamos',
				vocês: 'abriam',
			},
			future: {
				eu: 'abrirei',
				você: 'abrirá',
				nós: 'abriremos',
				vocês: 'abrirão',
			},
			conditional: {
				eu: 'abriria',
				você: 'abriria',
				nós: 'abriríamos',
				vocês: 'abririam',
			},
		},
	},
	{
		infinitive: 'ser',
		translation: 'to be (permanent)',
		type: 'irregular',
		tenses: {
			present: {
				eu: 'sou',
				você: 'é',
				nós: 'somos',
				vocês: 'são',
			},
			preterite: {
				eu: 'fui',
				você: 'foi',
				nós: 'fomos',
				vocês: 'foram',
			},
			imperfect: {
				eu: 'era',
				você: 'era',
				nós: 'éramos',
				vocês: 'eram',
			},
			future: {
				eu: 'serei',
				você: 'será',
				nós: 'seremos',
				vocês: 'serão',
			},
			conditional: {
				eu: 'seria',
				você: 'seria',
				nós: 'seríamos',
				vocês: 'seriam',
			},
		},
	},
	{
		infinitive: 'estar',
		translation: 'to be (temporary)',
		type: 'irregular',
		tenses: {
			present: {
				eu: 'estou',
				você: 'está',
				nós: 'estamos',
				vocês: 'estão',
			},
			preterite: {
				eu: 'estive',
				você: 'esteve',
				nós: 'estivemos',
				vocês: 'estiveram',
			},
			imperfect: {
				eu: 'estava',
				você: 'estava',
				nós: 'estávamos',
				vocês: 'estavam',
			},
			future: {
				eu: 'estarei',
				você: 'estará',
				nós: 'estaremos',
				vocês: 'estarão',
			},
			conditional: {
				eu: 'estaria',
				você: 'estaria',
				nós: 'estaríamos',
				vocês: 'estariam',
			},
		},
	},
	{
		infinitive: 'ir',
		translation: 'to go',
		type: 'irregular',
		tenses: {
			present: {
				eu: 'vou',
				você: 'vai',
				nós: 'vamos',
				vocês: 'vão',
			},
			preterite: {
				eu: 'fui',
				você: 'foi',
				nós: 'fomos',
				vocês: 'foram',
			},
			imperfect: {
				eu: 'ia',
				você: 'ia',
				nós: 'íamos',
				vocês: 'iam',
			},
			future: {
				eu: 'irei',
				você: 'irá',
				nós: 'iremos',
				vocês: 'irão',
			},
			conditional: {
				eu: 'iria',
				você: 'iria',
				nós: 'iríamos',
				vocês: 'iriam',
			},
		},
	},
	{
		infinitive: 'ter',
		translation: 'to have',
		type: 'irregular',
		tenses: {
			present: {
				eu: 'tenho',
				você: 'tem',
				nós: 'temos',
				vocês: 'têm',
			},
			preterite: {
				eu: 'tive',
				você: 'teve',
				nós: 'tivemos',
				vocês: 'tiveram',
			},
			imperfect: {
				eu: 'tinha',
				você: 'tinha',
				nós: 'tínhamos',
				vocês: 'tinham',
			},
			future: {
				eu: 'terei',
				você: 'terá',
				nós: 'teremos',
				vocês: 'terão',
			},
			conditional: {
				eu: 'teria',
				você: 'teria',
				nós: 'teríamos',
				vocês: 'teriam',
			},
		},
	},
	{
		infinitive: 'fazer',
		translation: 'to do, to make',
		type: 'irregular',
		tenses: {
			present: {
				eu: 'faço',
				você: 'faz',
				nós: 'fazemos',
				vocês: 'fazem',
			},
			preterite: {
				eu: 'fiz',
				você: 'fez',
				nós: 'fizemos',
				vocês: 'fizeram',
			},
			imperfect: {
				eu: 'fazia',
				você: 'fazia',
				nós: 'fazíamos',
				vocês: 'faziam',
			},
			future: {
				eu: 'farei',
				você: 'fará',
				nós: 'faremos',
				vocês: 'farão',
			},
			conditional: {
				eu: 'faria',
				você: 'faria',
				nós: 'faríamos',
				vocês: 'fariam',
			},
		},
	},
	{
		infinitive: 'dizer',
		translation: 'to say, to tell',
		type: 'irregular',
		tenses: {
			present: {
				eu: 'digo',
				você: 'diz',
				nós: 'dizemos',
				vocês: 'dizem',
			},
			preterite: {
				eu: 'disse',
				você: 'disse',
				nós: 'dissemos',
				vocês: 'disseram',
			},
			imperfect: {
				eu: 'dizia',
				você: 'dizia',
				nós: 'dizíamos',
				vocês: 'diziam',
			},
			future: {
				eu: 'direi',
				você: 'dirá',
				nós: 'diremos',
				vocês: 'dirão',
			},
			conditional: {
				eu: 'diria',
				você: 'diria',
				nós: 'diríamos',
				vocês: 'diriam',
			},
		},
	},
	{
		infinitive: 'ver',
		translation: 'to see',
		type: 'irregular',
		tenses: {
			present: {
				eu: 'vejo',
				você: 'vê',
				nós: 'vemos',
				vocês: 'veem',
			},
			preterite: {
				eu: 'vi',
				você: 'viu',
				nós: 'vimos',
				vocês: 'viram',
			},
			imperfect: {
				eu: 'via',
				você: 'via',
				nós: 'víamos',
				vocês: 'viam',
			},
			future: {
				eu: 'verei',
				você: 'verá',
				nós: 'veremos',
				vocês: 'verão',
			},
			conditional: {
				eu: 'veria',
				você: 'veria',
				nós: 'veríamos',
				vocês: 'veriam',
			},
		},
	},
	{
		infinitive: 'pôr',
		translation: 'to put',
		type: 'irregular',
		tenses: {
			present: {
				eu: 'ponho',
				você: 'põe',
				nós: 'pomos',
				vocês: 'põem',
			},
			preterite: {
				eu: 'pus',
				você: 'pôs',
				nós: 'pusemos',
				vocês: 'puseram',
			},
			imperfect: {
				eu: 'punha',
				você: 'punha',
				nós: 'púnhamos',
				vocês: 'punham',
			},
			future: {
				eu: 'porei',
				você: 'porá',
				nós: 'poremos',
				vocês: 'porão',
			},
			conditional: {
				eu: 'poria',
				você: 'poria',
				nós: 'poríamos',
				vocês: 'poriam',
			},
		},
	},
	{
		infinitive: 'poder',
		translation: 'to be able to, can',
		type: 'irregular',
		tenses: {
			present: {
				eu: 'posso',
				você: 'pode',
				nós: 'podemos',
				vocês: 'podem',
			},
			preterite: {
				eu: 'pude',
				você: 'pôde',
				nós: 'pudemos',
				vocês: 'puderam',
			},
			imperfect: {
				eu: 'podia',
				você: 'podia',
				nós: 'podíamos',
				vocês: 'podiam',
			},
			future: {
				eu: 'poderei',
				você: 'poderá',
				nós: 'poderemos',
				vocês: 'poderão',
			},
			conditional: {
				eu: 'poderia',
				você: 'poderia',
				nós: 'poderíamos',
				vocês: 'poderiam',
			},
		},
	},
	{
		infinitive: 'saber',
		translation: 'to know',
		type: 'irregular',
		tenses: {
			present: {
				eu: 'sei',
				você: 'sabe',
				nós: 'sabemos',
				vocês: 'sabem',
			},
			preterite: {
				eu: 'soube',
				você: 'soube',
				nós: 'soubemos',
				vocês: 'souberam',
			},
			imperfect: {
				eu: 'sabia',
				você: 'sabia',
				nós: 'sabíamos',
				vocês: 'sabiam',
			},
			future: {
				eu: 'saberei',
				você: 'saberá',
				nós: 'saberemos',
				vocês: 'saberão',
			},
			conditional: {
				eu: 'saberia',
				você: 'saberia',
				nós: 'saberíamos',
				vocês: 'saberiam',
			},
		},
	},
]

export default function Home() {
	const [selectedVerb, setSelectedVerb] = useState<Verb | null>(null)
	const [searchTerm, setSearchTerm] = useState('')
	const [activeTense, setActiveTense] = useState('present')

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

	// Handle tense change
	const handleTenseChange = (tense: string) => {
		setActiveTense(tense)
	}

	// Transform the first letter to uppercase
	const capitalize = (str: string) => {
		return str.charAt(0).toUpperCase() + str.slice(1)
	}

	return (
		<div className='flex h-full'>
			{/* Sidebar */}
			<div className='w-72 border-r border-zinc-200 dark:border-zinc-800 pr-4 overflow-y-auto'>
				<div className='mb-4'>
					<input
						type='text'
						placeholder='Search verbs...'
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className='w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 dark:bg-zinc-800'
					/>
				</div>
				<div className='space-y-1'>
					{filteredVerbs.map((verb) => (
						<button
							key={verb.infinitive}
							onClick={() => handleVerbSelect(verb)}
							className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
								selectedVerb?.infinitive === verb.infinitive
									? 'bg-violet-100 dark:bg-violet-900 text-violet-800 dark:text-violet-100'
									: 'hover:bg-zinc-100 dark:hover:bg-zinc-800'
							}`}
						>
							<div className='font-medium'>{verb.infinitive}</div>
							<div className='text-xs text-zinc-500 dark:text-zinc-400'>{verb.translation}</div>
						</button>
					))}
				</div>
			</div>

			{/* Main content */}
			<div className='flex-1 overflow-y-auto pl-6'>
				{selectedVerb ? (
					<motion.div
						key={selectedVerb.infinitive}
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3 }}
						className='max-w-3xl mx-auto'
					>
						<div className='mb-6'>
							<h2 className='text-3xl font-bold text-violet-600 dark:text-violet-400'>
								{selectedVerb.infinitive}
							</h2>
							<p className='text-lg text-zinc-600 dark:text-zinc-300'>
								{selectedVerb.translation} | {selectedVerb.type}
							</p>
						</div>

						{/* Tense selection */}
						<div className='flex space-x-2 mb-6 overflow-x-auto pb-2'>
							{['present', 'preterite', 'imperfect', 'future', 'conditional'].map((tense) => (
								<button
									key={tense}
									onClick={() => handleTenseChange(tense)}
									className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
										activeTense === tense
											? 'bg-violet-100 dark:bg-violet-900 text-violet-800 dark:text-violet-100'
											: 'bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700'
									}`}
								>
									{capitalize(tense)} Tense
								</button>
							))}
						</div>

						{/* Conjugation table */}
						<div className='bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800 overflow-hidden'>
							<div className='px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950'>
								<h3 className='text-lg font-semibold'>{capitalize(activeTense)} Tense Conjugation</h3>
							</div>
							<div className='p-6'>
								<div className='grid grid-cols-2 gap-6'>
									<div className='space-y-4'>
										<div>
											<div className='text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-1'>
												eu
											</div>
											<div className='text-xl font-medium'>
												{
													selectedVerb.tenses[activeTense as keyof typeof selectedVerb.tenses]
														.eu
												}
											</div>
										</div>
										<div>
											<div className='text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-1'>
												você/ele/ela
											</div>
											<div className='text-xl font-medium'>
												{
													selectedVerb.tenses[activeTense as keyof typeof selectedVerb.tenses]
														.você
												}
											</div>
										</div>
									</div>
									<div className='space-y-4'>
										<div>
											<div className='text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-1'>
												nós
											</div>
											<div className='text-xl font-medium'>
												{
													selectedVerb.tenses[activeTense as keyof typeof selectedVerb.tenses]
														.nós
												}
											</div>
										</div>
										<div>
											<div className='text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-1'>
												vocês/eles/elas
											</div>
											<div className='text-xl font-medium'>
												{
													selectedVerb.tenses[activeTense as keyof typeof selectedVerb.tenses]
														.vocês
												}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Example sentences */}
						<div className='mt-8 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800 overflow-hidden'>
							<div className='px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950'>
								<h3 className='text-lg font-semibold'>Example Sentences</h3>
							</div>
							<div className='p-6'>
								<div className='space-y-4'>
									<div>
										<div className='text-zinc-800 dark:text-zinc-200'>
											Eu {selectedVerb.tenses[activeTense as keyof typeof selectedVerb.tenses].eu}{' '}
											todos os dias.
										</div>
										<div className='text-sm text-zinc-500 dark:text-zinc-400 mt-1'>
											I {selectedVerb.infinitive.replace(/ar$|er$|ir$/, '')} every day.
										</div>
									</div>
									<div>
										<div className='text-zinc-800 dark:text-zinc-200'>
											Você{' '}
											{selectedVerb.tenses[activeTense as keyof typeof selectedVerb.tenses].você}{' '}
											muito bem.
										</div>
										<div className='text-sm text-zinc-500 dark:text-zinc-400 mt-1'>
											You {selectedVerb.infinitive.replace(/ar$|er$|ir$/, '')} very well.
										</div>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				) : (
					<div className='flex items-center justify-center h-full'>
						<p className='text-zinc-500 dark:text-zinc-400'>Select a verb to see its conjugation</p>
					</div>
				)}
			</div>
		</div>
	)
}
