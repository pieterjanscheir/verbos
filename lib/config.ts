// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type Person = 'eu' | 'você' | 'nós' | 'vocês'

export type Conjugation = {
	eu: string
	você: string // Represents você/ele/ela
	nós: string
	vocês: string // Represents vocês/eles/elas
}

export type TenseKey = 'present' | 'preterite' | 'imperfect' | 'future' | 'conditional'

// Compact English forms used to *generate* the example sentences, so we never
// have to hand-write (or fall back to "do" for) a per-verb translation switch.
export type EnglishForms = {
	present: string // e.g. "speak"
	past: string // simple past, e.g. "spoke"
	gerund: string // -ing form, e.g. "speaking"
	base?: string // form used after will/would; defaults to `present`
}

export type Verb = {
	infinitive: string
	translation: string
	type: string // e.g., 'regular -ar', 'regular -er', 'regular -ir', 'irregular'
	en: EnglishForms
	tenses: Record<TenseKey, Conjugation>
}

export type VerbGroup = 'all' | '-ar' | '-er' | '-ir' | 'irregular'

export const PEOPLE: { key: Person; label: string }[] = [
	{ key: 'eu', label: 'Eu' },
	{ key: 'você', label: 'Você / Ele / Ela' },
	{ key: 'nós', label: 'Nós' },
	{ key: 'vocês', label: 'Vocês / Eles / Elas' },
]

// Single source of truth for tense metadata: label + the example-sentence
// templates for both languages. Adding a tense here is all it takes.
export const TENSES: {
	key: TenseKey
	label: string
	pt: (eu: string) => string
	en: (en: EnglishForms) => string
}[] = [
	{
		key: 'present',
		label: 'Present',
		pt: (eu) => `Eu ${eu} todos os dias.`,
		en: (en) => `I ${en.present} every day.`,
	},
	{
		key: 'preterite',
		label: 'Preterite',
		pt: (eu) => `Eu ${eu} ontem.`,
		en: (en) => `I ${en.past} yesterday.`,
	},
	{
		key: 'imperfect',
		label: 'Imperfect',
		pt: (eu) => `Eu ${eu} quando criança.`,
		en: (en) => `I was ${en.gerund} when I was a child.`,
	},
	{
		key: 'future',
		label: 'Future',
		pt: (eu) => `Eu ${eu} amanhã.`,
		en: (en) => `I will ${en.base ?? en.present} tomorrow.`,
	},
	{
		key: 'conditional',
		label: 'Conditional',
		pt: (eu) => `Eu ${eu} se pudesse.`,
		en: (en) => `I would ${en.base ?? en.present} if I could.`,
	},
]

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Which filter group a verb belongs to. */
export function groupOf(verb: Verb): Exclude<VerbGroup, 'all'> {
	if (verb.type.includes('irregular')) return 'irregular'
	if (verb.type.includes('-ar')) return '-ar'
	if (verb.type.includes('-er')) return '-er'
	return '-ir'
}

export const GROUPS: { key: VerbGroup; label: string }[] = [
	{ key: 'all', label: 'All' },
	{ key: '-ar', label: '-ar' },
	{ key: '-er', label: '-er' },
	{ key: '-ir', label: '-ir' },
	{ key: 'irregular', label: 'Irregular' },
]

/** Capitalize the first character. */
export const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)

// ---------------------------------------------------------------------------
// Verb data
// ---------------------------------------------------------------------------

export const verbs: Verb[] = [
	{
		infinitive: 'falar',
		translation: 'to speak',
		type: 'regular -ar',
		en: { present: 'speak', past: 'spoke', gerund: 'speaking' },
		tenses: {
			present: { eu: 'falo', você: 'fala', nós: 'falamos', vocês: 'falam' },
			preterite: { eu: 'falei', você: 'falou', nós: 'falamos', vocês: 'falaram' },
			imperfect: { eu: 'falava', você: 'falava', nós: 'falávamos', vocês: 'falavam' },
			future: { eu: 'falarei', você: 'falará', nós: 'falaremos', vocês: 'falarão' },
			conditional: { eu: 'falaria', você: 'falaria', nós: 'falaríamos', vocês: 'falariam' },
		},
	},
	{
		infinitive: 'andar',
		translation: 'to walk',
		type: 'regular -ar',
		en: { present: 'walk', past: 'walked', gerund: 'walking' },
		tenses: {
			present: { eu: 'ando', você: 'anda', nós: 'andamos', vocês: 'andam' },
			preterite: { eu: 'andei', você: 'andou', nós: 'andamos', vocês: 'andaram' },
			imperfect: { eu: 'andava', você: 'andava', nós: 'andávamos', vocês: 'andavam' },
			future: { eu: 'andarei', você: 'andará', nós: 'andaremos', vocês: 'andarão' },
			conditional: { eu: 'andaria', você: 'andaria', nós: 'andaríamos', vocês: 'andariam' },
		},
	},
	{
		infinitive: 'trabalhar',
		translation: 'to work',
		type: 'regular -ar',
		en: { present: 'work', past: 'worked', gerund: 'working' },
		tenses: {
			present: { eu: 'trabalho', você: 'trabalha', nós: 'trabalhamos', vocês: 'trabalham' },
			preterite: { eu: 'trabalhei', você: 'trabalhou', nós: 'trabalhamos', vocês: 'trabalharam' },
			imperfect: { eu: 'trabalhava', você: 'trabalhava', nós: 'trabalhávamos', vocês: 'trabalhavam' },
			future: { eu: 'trabalharei', você: 'trabalhará', nós: 'trabalharemos', vocês: 'trabalharão' },
			conditional: { eu: 'trabalharia', você: 'trabalharia', nós: 'trabalharíamos', vocês: 'trabalhariam' },
		},
	},
	{
		infinitive: 'comprar',
		translation: 'to buy',
		type: 'regular -ar',
		en: { present: 'buy', past: 'bought', gerund: 'buying' },
		tenses: {
			present: { eu: 'compro', você: 'compra', nós: 'compramos', vocês: 'compram' },
			preterite: { eu: 'comprei', você: 'comprou', nós: 'compramos', vocês: 'compraram' },
			imperfect: { eu: 'comprava', você: 'comprava', nós: 'comprávamos', vocês: 'compravam' },
			future: { eu: 'comprarei', você: 'comprará', nós: 'compraremos', vocês: 'comprarão' },
			conditional: { eu: 'compraria', você: 'compraria', nós: 'compraríamos', vocês: 'comprariam' },
		},
	},
	{
		infinitive: 'morar',
		translation: 'to live, to reside',
		type: 'regular -ar',
		en: { present: 'live', past: 'lived', gerund: 'living' },
		tenses: {
			present: { eu: 'moro', você: 'mora', nós: 'moramos', vocês: 'moram' },
			preterite: { eu: 'morei', você: 'morou', nós: 'moramos', vocês: 'moraram' },
			imperfect: { eu: 'morava', você: 'morava', nós: 'morávamos', vocês: 'moravam' },
			future: { eu: 'morarei', você: 'morará', nós: 'moraremos', vocês: 'morarão' },
			conditional: { eu: 'moraria', você: 'moraria', nós: 'moraríamos', vocês: 'morariam' },
		},
	},
	{
		infinitive: 'comer',
		translation: 'to eat',
		type: 'regular -er',
		en: { present: 'eat', past: 'ate', gerund: 'eating' },
		tenses: {
			present: { eu: 'como', você: 'come', nós: 'comemos', vocês: 'comem' },
			preterite: { eu: 'comi', você: 'comeu', nós: 'comemos', vocês: 'comeram' },
			imperfect: { eu: 'comia', você: 'comia', nós: 'comíamos', vocês: 'comiam' },
			future: { eu: 'comerei', você: 'comerá', nós: 'comeremos', vocês: 'comerão' },
			conditional: { eu: 'comeria', você: 'comeria', nós: 'comeríamos', vocês: 'comeriam' },
		},
	},
	{
		infinitive: 'beber',
		translation: 'to drink',
		type: 'regular -er',
		en: { present: 'drink', past: 'drank', gerund: 'drinking' },
		tenses: {
			present: { eu: 'bebo', você: 'bebe', nós: 'bebemos', vocês: 'bebem' },
			preterite: { eu: 'bebi', você: 'bebeu', nós: 'bebemos', vocês: 'beberam' },
			imperfect: { eu: 'bebia', você: 'bebia', nós: 'bebíamos', vocês: 'bebiam' },
			future: { eu: 'beberei', você: 'beberá', nós: 'beberemos', vocês: 'beberão' },
			conditional: { eu: 'beberia', você: 'beberia', nós: 'beberíamos', vocês: 'beberiam' },
		},
	},
	{
		infinitive: 'vender',
		translation: 'to sell',
		type: 'regular -er',
		en: { present: 'sell', past: 'sold', gerund: 'selling' },
		tenses: {
			present: { eu: 'vendo', você: 'vende', nós: 'vendemos', vocês: 'vendem' },
			preterite: { eu: 'vendi', você: 'vendeu', nós: 'vendemos', vocês: 'venderam' },
			imperfect: { eu: 'vendia', você: 'vendia', nós: 'vendíamos', vocês: 'vendiam' },
			future: { eu: 'venderei', você: 'venderá', nós: 'venderemos', vocês: 'venderão' },
			conditional: { eu: 'venderia', você: 'venderia', nós: 'venderíamos', vocês: 'venderiam' },
		},
	},
	{
		infinitive: 'aprender',
		translation: 'to learn',
		type: 'regular -er',
		en: { present: 'learn', past: 'learned', gerund: 'learning' },
		tenses: {
			present: { eu: 'aprendo', você: 'aprende', nós: 'aprendemos', vocês: 'aprendem' },
			preterite: { eu: 'aprendi', você: 'aprendeu', nós: 'aprendemos', vocês: 'aprenderam' },
			imperfect: { eu: 'aprendia', você: 'aprendia', nós: 'aprendíamos', vocês: 'aprendiam' },
			future: { eu: 'aprenderei', você: 'aprenderá', nós: 'aprenderemos', vocês: 'aprenderão' },
			conditional: { eu: 'aprenderia', você: 'aprenderia', nós: 'aprenderíamos', vocês: 'aprenderiam' },
		},
	},
	{
		infinitive: 'viver',
		translation: 'to live (life)',
		type: 'regular -er',
		en: { present: 'live', past: 'lived', gerund: 'living' },
		tenses: {
			present: { eu: 'vivo', você: 'vive', nós: 'vivemos', vocês: 'vivem' },
			preterite: { eu: 'vivi', você: 'viveu', nós: 'vivemos', vocês: 'viveram' },
			imperfect: { eu: 'vivia', você: 'vivia', nós: 'vivíamos', vocês: 'viviam' },
			future: { eu: 'viverei', você: 'viverá', nós: 'viveremos', vocês: 'viverão' },
			conditional: { eu: 'viveria', você: 'viveria', nós: 'viveríamos', vocês: 'viveriam' },
		},
	},
	{
		infinitive: 'partir',
		translation: 'to leave, to depart',
		type: 'regular -ir',
		en: { present: 'leave', past: 'left', gerund: 'leaving' },
		tenses: {
			present: { eu: 'parto', você: 'parte', nós: 'partimos', vocês: 'partem' },
			preterite: { eu: 'parti', você: 'partiu', nós: 'partimos', vocês: 'partiram' },
			imperfect: { eu: 'partia', você: 'partia', nós: 'partíamos', vocês: 'partiam' },
			future: { eu: 'partirei', você: 'partirá', nós: 'partiremos', vocês: 'partirão' },
			conditional: { eu: 'partiria', você: 'partiria', nós: 'partiríamos', vocês: 'partiriam' },
		},
	},
	{
		infinitive: 'abrir',
		translation: 'to open',
		type: 'regular -ir',
		en: { present: 'open', past: 'opened', gerund: 'opening' },
		tenses: {
			present: { eu: 'abro', você: 'abre', nós: 'abrimos', vocês: 'abrem' },
			preterite: { eu: 'abri', você: 'abriu', nós: 'abrimos', vocês: 'abriram' },
			imperfect: { eu: 'abria', você: 'abria', nós: 'abríamos', vocês: 'abriam' },
			future: { eu: 'abrirei', você: 'abrirá', nós: 'abriremos', vocês: 'abrirão' },
			conditional: { eu: 'abriria', você: 'abriria', nós: 'abriríamos', vocês: 'abririam' },
		},
	},
	{
		infinitive: 'ser',
		translation: 'to be (permanent)',
		type: 'irregular',
		en: { present: 'am', past: 'was', gerund: 'being', base: 'be' },
		tenses: {
			present: { eu: 'sou', você: 'é', nós: 'somos', vocês: 'são' },
			preterite: { eu: 'fui', você: 'foi', nós: 'fomos', vocês: 'foram' },
			imperfect: { eu: 'era', você: 'era', nós: 'éramos', vocês: 'eram' },
			future: { eu: 'serei', você: 'será', nós: 'seremos', vocês: 'serão' },
			conditional: { eu: 'seria', você: 'seria', nós: 'seríamos', vocês: 'seriam' },
		},
	},
	{
		infinitive: 'estar',
		translation: 'to be (temporary)',
		type: 'irregular',
		en: { present: 'am', past: 'was', gerund: 'being', base: 'be' },
		tenses: {
			present: { eu: 'estou', você: 'está', nós: 'estamos', vocês: 'estão' },
			preterite: { eu: 'estive', você: 'esteve', nós: 'estivemos', vocês: 'estiveram' },
			imperfect: { eu: 'estava', você: 'estava', nós: 'estávamos', vocês: 'estavam' },
			future: { eu: 'estarei', você: 'estará', nós: 'estaremos', vocês: 'estarão' },
			conditional: { eu: 'estaria', você: 'estaria', nós: 'estaríamos', vocês: 'estariam' },
		},
	},
	{
		infinitive: 'ir',
		translation: 'to go',
		type: 'irregular',
		en: { present: 'go', past: 'went', gerund: 'going' },
		tenses: {
			present: { eu: 'vou', você: 'vai', nós: 'vamos', vocês: 'vão' },
			preterite: { eu: 'fui', você: 'foi', nós: 'fomos', vocês: 'foram' },
			imperfect: { eu: 'ia', você: 'ia', nós: 'íamos', vocês: 'iam' },
			future: { eu: 'irei', você: 'irá', nós: 'iremos', vocês: 'irão' },
			conditional: { eu: 'iria', você: 'iria', nós: 'iríamos', vocês: 'iriam' },
		},
	},
	{
		infinitive: 'ter',
		translation: 'to have',
		type: 'irregular',
		en: { present: 'have', past: 'had', gerund: 'having' },
		tenses: {
			present: { eu: 'tenho', você: 'tem', nós: 'temos', vocês: 'têm' },
			preterite: { eu: 'tive', você: 'teve', nós: 'tivemos', vocês: 'tiveram' },
			imperfect: { eu: 'tinha', você: 'tinha', nós: 'tínhamos', vocês: 'tinham' },
			future: { eu: 'terei', você: 'terá', nós: 'teremos', vocês: 'terão' },
			conditional: { eu: 'teria', você: 'teria', nós: 'teríamos', vocês: 'teriam' },
		},
	},
	{
		infinitive: 'fazer',
		translation: 'to do, to make',
		type: 'irregular',
		en: { present: 'do', past: 'did', gerund: 'doing' },
		tenses: {
			present: { eu: 'faço', você: 'faz', nós: 'fazemos', vocês: 'fazem' },
			preterite: { eu: 'fiz', você: 'fez', nós: 'fizemos', vocês: 'fizeram' },
			imperfect: { eu: 'fazia', você: 'fazia', nós: 'fazíamos', vocês: 'faziam' },
			future: { eu: 'farei', você: 'fará', nós: 'faremos', vocês: 'farão' },
			conditional: { eu: 'faria', você: 'faria', nós: 'faríamos', vocês: 'fariam' },
		},
	},
	{
		infinitive: 'dizer',
		translation: 'to say, to tell',
		type: 'irregular',
		en: { present: 'say', past: 'said', gerund: 'saying' },
		tenses: {
			present: { eu: 'digo', você: 'diz', nós: 'dizemos', vocês: 'dizem' },
			preterite: { eu: 'disse', você: 'disse', nós: 'dissemos', vocês: 'disseram' },
			imperfect: { eu: 'dizia', você: 'dizia', nós: 'dizíamos', vocês: 'diziam' },
			future: { eu: 'direi', você: 'dirá', nós: 'diremos', vocês: 'dirão' },
			conditional: { eu: 'diria', você: 'diria', nós: 'diríamos', vocês: 'diriam' },
		},
	},
	{
		infinitive: 'ver',
		translation: 'to see',
		type: 'irregular',
		en: { present: 'see', past: 'saw', gerund: 'seeing' },
		tenses: {
			present: { eu: 'vejo', você: 'vê', nós: 'vemos', vocês: 'veem' },
			preterite: { eu: 'vi', você: 'viu', nós: 'vimos', vocês: 'viram' },
			imperfect: { eu: 'via', você: 'via', nós: 'víamos', vocês: 'viam' },
			future: { eu: 'verei', você: 'verá', nós: 'veremos', vocês: 'verão' },
			conditional: { eu: 'veria', você: 'veria', nós: 'veríamos', vocês: 'veriam' },
		},
	},
	{
		infinitive: 'pôr',
		translation: 'to put',
		type: 'irregular',
		en: { present: 'put', past: 'put', gerund: 'putting' },
		tenses: {
			present: { eu: 'ponho', você: 'põe', nós: 'pomos', vocês: 'põem' },
			preterite: { eu: 'pus', você: 'pôs', nós: 'pusemos', vocês: 'puseram' },
			imperfect: { eu: 'punha', você: 'punha', nós: 'púnhamos', vocês: 'punham' },
			future: { eu: 'porei', você: 'porá', nós: 'poremos', vocês: 'porão' },
			conditional: { eu: 'poria', você: 'poria', nós: 'poríamos', vocês: 'poriam' },
		},
	},
	{
		infinitive: 'poder',
		translation: 'to be able to, can',
		type: 'irregular',
		en: { present: 'can', past: 'could', gerund: 'able to', base: 'be able to' },
		tenses: {
			present: { eu: 'posso', você: 'pode', nós: 'podemos', vocês: 'podem' },
			preterite: { eu: 'pude', você: 'pôde', nós: 'pudemos', vocês: 'puderam' },
			imperfect: { eu: 'podia', você: 'podia', nós: 'podíamos', vocês: 'podiam' },
			future: { eu: 'poderei', você: 'poderá', nós: 'poderemos', vocês: 'poderão' },
			conditional: { eu: 'poderia', você: 'poderia', nós: 'poderíamos', vocês: 'poderiam' },
		},
	},
	{
		infinitive: 'saber',
		translation: 'to know',
		type: 'irregular',
		en: { present: 'know', past: 'knew', gerund: 'knowing' },
		tenses: {
			present: { eu: 'sei', você: 'sabe', nós: 'sabemos', vocês: 'sabem' },
			preterite: { eu: 'soube', você: 'soube', nós: 'soubemos', vocês: 'souberam' },
			imperfect: { eu: 'sabia', você: 'sabia', nós: 'sabíamos', vocês: 'sabiam' },
			future: { eu: 'saberei', você: 'saberá', nós: 'saberemos', vocês: 'saberão' },
			conditional: { eu: 'saberia', você: 'saberia', nós: 'saberíamos', vocês: 'saberiam' },
		},
	},
	{
		infinitive: 'querer',
		translation: 'to want',
		type: 'irregular',
		en: { present: 'want', past: 'wanted', gerund: 'wanting' },
		tenses: {
			present: { eu: 'quero', você: 'quer', nós: 'queremos', vocês: 'querem' },
			preterite: { eu: 'quis', você: 'quis', nós: 'quisemos', vocês: 'quiseram' },
			imperfect: { eu: 'queria', você: 'queria', nós: 'queríamos', vocês: 'queriam' },
			future: { eu: 'quererei', você: 'quererá', nós: 'quereremos', vocês: 'quererão' },
			conditional: { eu: 'quereria', você: 'quereria', nós: 'quereríamos', vocês: 'quereriam' },
		},
	},
	{
		infinitive: 'ouvir',
		translation: 'to hear',
		type: 'irregular', // Stem change: present 'eu' → ouço
		en: { present: 'hear', past: 'heard', gerund: 'hearing' },
		tenses: {
			present: { eu: 'ouço', você: 'ouve', nós: 'ouvimos', vocês: 'ouvem' },
			preterite: { eu: 'ouvi', você: 'ouviu', nós: 'ouvimos', vocês: 'ouviram' },
			imperfect: { eu: 'ouvia', você: 'ouvia', nós: 'ouvíamos', vocês: 'ouviam' },
			future: { eu: 'ouvirei', você: 'ouvirá', nós: 'ouviremos', vocês: 'ouvirão' },
			conditional: { eu: 'ouviria', você: 'ouviria', nós: 'ouviríamos', vocês: 'ouviriam' },
		},
	},
	{
		infinitive: 'dar',
		translation: 'to give',
		type: 'irregular',
		en: { present: 'give', past: 'gave', gerund: 'giving' },
		tenses: {
			present: { eu: 'dou', você: 'dá', nós: 'damos', vocês: 'dão' },
			preterite: { eu: 'dei', você: 'deu', nós: 'demos', vocês: 'deram' },
			imperfect: { eu: 'dava', você: 'dava', nós: 'dávamos', vocês: 'davam' },
			future: { eu: 'darei', você: 'dará', nós: 'daremos', vocês: 'darão' },
			conditional: { eu: 'daria', você: 'daria', nós: 'daríamos', vocês: 'dariam' },
		},
	},
	{
		infinitive: 'trazer',
		translation: 'to bring',
		type: 'irregular',
		en: { present: 'bring', past: 'brought', gerund: 'bringing' },
		tenses: {
			present: { eu: 'trago', você: 'traz', nós: 'trazemos', vocês: 'trazem' },
			preterite: { eu: 'trouxe', você: 'trouxe', nós: 'trouxemos', vocês: 'trouxeram' },
			imperfect: { eu: 'trazia', você: 'trazia', nós: 'trazíamos', vocês: 'traziam' },
			future: { eu: 'trarei', você: 'trará', nós: 'traremos', vocês: 'trarão' },
			conditional: { eu: 'traria', você: 'traria', nós: 'traríamos', vocês: 'trariam' },
		},
	},
	{
		infinitive: 'ler',
		translation: 'to read',
		type: 'irregular', // 'você' lê (no accent in new orthography), 'vocês' leem
		en: { present: 'read', past: 'read', gerund: 'reading' },
		tenses: {
			present: { eu: 'leio', você: 'lê', nós: 'lemos', vocês: 'leem' },
			preterite: { eu: 'li', você: 'leu', nós: 'lemos', vocês: 'leram' },
			imperfect: { eu: 'lia', você: 'lia', nós: 'líamos', vocês: 'liam' },
			future: { eu: 'lerei', você: 'lerá', nós: 'leremos', vocês: 'lerão' },
			conditional: { eu: 'leria', você: 'leria', nós: 'leríamos', vocês: 'leriam' },
		},
	},
	{
		infinitive: 'escrever',
		translation: 'to write',
		type: 'regular -er', // Irregular participle (escrito), but conjugations are regular
		en: { present: 'write', past: 'wrote', gerund: 'writing' },
		tenses: {
			present: { eu: 'escrevo', você: 'escreve', nós: 'escrevemos', vocês: 'escrevem' },
			preterite: { eu: 'escrevi', você: 'escreveu', nós: 'escrevemos', vocês: 'escreveram' },
			imperfect: { eu: 'escrevia', você: 'escrevia', nós: 'escrevíamos', vocês: 'escreviam' },
			future: { eu: 'escreverei', você: 'escreverá', nós: 'escreveremos', vocês: 'escreverão' },
			conditional: { eu: 'escreveria', você: 'escreveria', nós: 'escreveríamos', vocês: 'escreveriam' },
		},
	},
	{
		infinitive: 'amar',
		translation: 'to love',
		type: 'regular -ar',
		en: { present: 'love', past: 'loved', gerund: 'loving' },
		tenses: {
			present: { eu: 'amo', você: 'ama', nós: 'amamos', vocês: 'amam' },
			preterite: { eu: 'amei', você: 'amou', nós: 'amamos', vocês: 'amaram' },
			imperfect: { eu: 'amava', você: 'amava', nós: 'amávamos', vocês: 'amavam' },
			future: { eu: 'amarei', você: 'amará', nós: 'amaremos', vocês: 'amarão' },
			conditional: { eu: 'amaria', você: 'amaria', nós: 'amaríamos', vocês: 'amariam' },
		},
	},
	{
		infinitive: 'ajudar',
		translation: 'to help',
		type: 'regular -ar',
		en: { present: 'help', past: 'helped', gerund: 'helping' },
		tenses: {
			present: { eu: 'ajudo', você: 'ajuda', nós: 'ajudamos', vocês: 'ajudam' },
			preterite: { eu: 'ajudei', você: 'ajudou', nós: 'ajudamos', vocês: 'ajudaram' },
			imperfect: { eu: 'ajudava', você: 'ajudava', nós: 'ajudávamos', vocês: 'ajudavam' },
			future: { eu: 'ajudarei', você: 'ajudará', nós: 'ajudaremos', vocês: 'ajudarão' },
			conditional: { eu: 'ajudaria', você: 'ajudaria', nós: 'ajudaríamos', vocês: 'ajudariam' },
		},
	},
	{
		infinitive: 'correr',
		translation: 'to run',
		type: 'regular -er',
		en: { present: 'run', past: 'ran', gerund: 'running' },
		tenses: {
			present: { eu: 'corro', você: 'corre', nós: 'corremos', vocês: 'correm' },
			preterite: { eu: 'corri', você: 'correu', nós: 'corremos', vocês: 'correram' },
			imperfect: { eu: 'corria', você: 'corria', nós: 'corríamos', vocês: 'corriam' },
			future: { eu: 'correrei', você: 'correrá', nós: 'correremos', vocês: 'correrão' },
			conditional: { eu: 'correria', você: 'correria', nós: 'correríamos', vocês: 'correriam' },
		},
	},
	{
		infinitive: 'receber',
		translation: 'to receive',
		type: 'regular -er',
		en: { present: 'receive', past: 'received', gerund: 'receiving' },
		tenses: {
			present: { eu: 'recebo', você: 'recebe', nós: 'recebemos', vocês: 'recebem' },
			preterite: { eu: 'recebi', você: 'recebeu', nós: 'recebemos', vocês: 'receberam' },
			imperfect: { eu: 'recebia', você: 'recebia', nós: 'recebíamos', vocês: 'recebiam' },
			future: { eu: 'receberei', você: 'receberá', nós: 'receberemos', vocês: 'receberão' },
			conditional: { eu: 'receberia', você: 'receberia', nós: 'receberíamos', vocês: 'receberiam' },
		},
	},
	{
		infinitive: 'decidir',
		translation: 'to decide',
		type: 'regular -ir',
		en: { present: 'decide', past: 'decided', gerund: 'deciding' },
		tenses: {
			present: { eu: 'decido', você: 'decide', nós: 'decidimos', vocês: 'decidem' },
			preterite: { eu: 'decidi', você: 'decidiu', nós: 'decidimos', vocês: 'decidiram' },
			imperfect: { eu: 'decidia', você: 'decidia', nós: 'decidíamos', vocês: 'decidiam' },
			future: { eu: 'decidirei', você: 'decidirá', nós: 'decidiremos', vocês: 'decidirão' },
			conditional: { eu: 'decidiria', você: 'decidiria', nós: 'decidiríamos', vocês: 'decidiriam' },
		},
	},
	{
		infinitive: 'assistir',
		translation: 'to watch, to attend',
		type: 'regular -ir',
		en: { present: 'watch', past: 'watched', gerund: 'watching' },
		tenses: {
			present: { eu: 'assisto', você: 'assiste', nós: 'assistimos', vocês: 'assistem' },
			preterite: { eu: 'assisti', você: 'assistiu', nós: 'assistimos', vocês: 'assistiram' },
			imperfect: { eu: 'assistia', você: 'assistia', nós: 'assistíamos', vocês: 'assistiam' },
			future: { eu: 'assistirei', você: 'assistirá', nós: 'assistiremos', vocês: 'assistirão' },
			conditional: { eu: 'assistiria', você: 'assistiria', nós: 'assistiríamos', vocês: 'assistiriam' },
		},
	},
	{
		infinitive: 'vir',
		translation: 'to come',
		type: 'irregular',
		en: { present: 'come', past: 'came', gerund: 'coming' },
		tenses: {
			present: { eu: 'venho', você: 'vem', nós: 'vimos', vocês: 'vêm' },
			preterite: { eu: 'vim', você: 'veio', nós: 'viemos', vocês: 'vieram' },
			imperfect: { eu: 'vinha', você: 'vinha', nós: 'vínhamos', vocês: 'vinham' },
			future: { eu: 'virei', você: 'virá', nós: 'viremos', vocês: 'virão' },
			conditional: { eu: 'viria', você: 'viria', nós: 'viríamos', vocês: 'viriam' },
		},
	},
	{
		infinitive: 'pedir',
		translation: 'to ask for, to order',
		type: 'irregular', // Stem change: present 'eu' → peço
		en: { present: 'ask for', past: 'asked for', gerund: 'asking for' },
		tenses: {
			present: { eu: 'peço', você: 'pede', nós: 'pedimos', vocês: 'pedem' },
			preterite: { eu: 'pedi', você: 'pediu', nós: 'pedimos', vocês: 'pediram' },
			imperfect: { eu: 'pedia', você: 'pedia', nós: 'pedíamos', vocês: 'pediam' },
			future: { eu: 'pedirei', você: 'pedirá', nós: 'pediremos', vocês: 'pedirão' },
			conditional: { eu: 'pediria', você: 'pediria', nós: 'pediríamos', vocês: 'pediriam' },
		},
	},
	{
		infinitive: 'dormir',
		translation: 'to sleep',
		type: 'irregular', // Stem change: present 'eu' → durmo
		en: { present: 'sleep', past: 'slept', gerund: 'sleeping' },
		tenses: {
			present: { eu: 'durmo', você: 'dorme', nós: 'dormimos', vocês: 'dormem' },
			preterite: { eu: 'dormi', você: 'dormiu', nós: 'dormimos', vocês: 'dormiram' },
			imperfect: { eu: 'dormia', você: 'dormia', nós: 'dormíamos', vocês: 'dormiam' },
			future: { eu: 'dormirei', você: 'dormirá', nós: 'dormiremos', vocês: 'dormirão' },
			conditional: { eu: 'dormiria', você: 'dormiria', nós: 'dormiríamos', vocês: 'dormiriam' },
		},
	},
	{
		infinitive: 'sentir',
		translation: 'to feel, to regret',
		type: 'irregular', // Stem change: present 'eu' → sinto
		en: { present: 'feel', past: 'felt', gerund: 'feeling' },
		tenses: {
			present: { eu: 'sinto', você: 'sente', nós: 'sentimos', vocês: 'sentem' },
			preterite: { eu: 'senti', você: 'sentiu', nós: 'sentimos', vocês: 'sentiram' },
			imperfect: { eu: 'sentia', você: 'sentia', nós: 'sentíamos', vocês: 'sentiam' },
			future: { eu: 'sentirei', você: 'sentirá', nós: 'sentiremos', vocês: 'sentirão' },
			conditional: { eu: 'sentiria', você: 'sentiria', nós: 'sentiríamos', vocês: 'sentiriam' },
		},
	},
	{
		infinitive: 'perder',
		translation: 'to lose',
		type: 'irregular', // Stem change: present 'eu' → perco
		en: { present: 'lose', past: 'lost', gerund: 'losing' },
		tenses: {
			present: { eu: 'perco', você: 'perde', nós: 'perdemos', vocês: 'perdem' },
			preterite: { eu: 'perdi', você: 'perdeu', nós: 'perdemos', vocês: 'perderam' },
			imperfect: { eu: 'perdia', você: 'perdia', nós: 'perdíamos', vocês: 'perdiam' },
			future: { eu: 'perderei', você: 'perderá', nós: 'perderemos', vocês: 'perderão' },
			conditional: { eu: 'perderia', você: 'perderia', nós: 'perderíamos', vocês: 'perderiam' },
		},
	},
]
