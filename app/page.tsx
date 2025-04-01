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
	{
		infinitive: 'querer',
		translation: 'to want',
		type: 'irregular',
		tenses: {
			present: {
				eu: 'quero',
				você: 'quer',
				nós: 'queremos',
				vocês: 'querem',
			},
			preterite: {
				eu: 'quis',
				você: 'quis',
				nós: 'quisemos',
				vocês: 'quiseram',
			},
			imperfect: {
				eu: 'queria',
				você: 'queria',
				nós: 'queríamos',
				vocês: 'queriam',
			},
			future: {
				eu: 'quererei',
				você: 'quererá',
				nós: 'quereremos',
				vocês: 'quererão',
			},
			conditional: {
				eu: 'quereria',
				você: 'quereria',
				nós: 'quereríamos',
				vocês: 'quereriam',
			},
		},
	},
	{
		infinitive: 'ouvir',
		translation: 'to hear',
		type: 'irregular',
		tenses: {
			present: {
				eu: 'ouço',
				você: 'ouve',
				nós: 'ouvimos',
				vocês: 'ouvem',
			},
			preterite: {
				eu: 'ouvi',
				você: 'ouviu',
				nós: 'ouvimos',
				vocês: 'ouviram',
			},
			imperfect: {
				eu: 'ouvia',
				você: 'ouvia',
				nós: 'ouvíamos',
				vocês: 'ouviam',
			},
			future: {
				eu: 'ouvirei',
				você: 'ouvirá',
				nós: 'ouviremos',
				vocês: 'ouvirão',
			},
			conditional: {
				eu: 'ouviria',
				você: 'ouviria',
				nós: 'ouviríamos',
				vocês: 'ouviriam',
			},
		},
	},
	{
		infinitive: 'dar',
		translation: 'to give',
		type: 'irregular',
		tenses: {
			present: {
				eu: 'dou',
				você: 'dá',
				nós: 'damos',
				vocês: 'dão',
			},
			preterite: {
				eu: 'dei',
				você: 'deu',
				nós: 'demos',
				vocês: 'deram',
			},
			imperfect: {
				eu: 'dava',
				você: 'dava',
				nós: 'dávamos',
				vocês: 'davam',
			},
			future: {
				eu: 'darei',
				você: 'dará',
				nós: 'daremos',
				vocês: 'darão',
			},
			conditional: {
				eu: 'daria',
				você: 'daria',
				nós: 'daríamos',
				vocês: 'dariam',
			},
		},
	},
	{
		infinitive: 'trazer',
		translation: 'to bring',
		type: 'irregular',
		tenses: {
			present: {
				eu: 'trago',
				você: 'traz',
				nós: 'trazemos',
				vocês: 'trazem',
			},
			preterite: {
				eu: 'trouxe',
				você: 'trouxe',
				nós: 'trouxemos',
				vocês: 'trouxeram',
			},
			imperfect: {
				eu: 'trazia',
				você: 'trazia',
				nós: 'trazíamos',
				vocês: 'traziam',
			},
			future: {
				eu: 'trarei',
				você: 'trará',
				nós: 'traremos',
				vocês: 'trarão',
			},
			conditional: {
				eu: 'traria',
				você: 'traria',
				nós: 'traríamos',
				vocês: 'trariam',
			},
		},
	},
	{
		infinitive: 'ler',
		translation: 'to read',
		type: 'irregular',
		tenses: {
			present: {
				eu: 'leio',
				você: 'lê',
				nós: 'lemos',
				vocês: 'leem',
			},
			preterite: {
				eu: 'li',
				você: 'leu',
				nós: 'lemos',
				vocês: 'leram',
			},
			imperfect: {
				eu: 'lia',
				você: 'lia',
				nós: 'líamos',
				vocês: 'liam',
			},
			future: {
				eu: 'lerei',
				você: 'lerá',
				nós: 'leremos',
				vocês: 'lerão',
			},
			conditional: {
				eu: 'leria',
				você: 'leria',
				nós: 'leríamos',
				vocês: 'leriam',
			},
		},
	},
	{
		infinitive: 'escrever',
		translation: 'to write',
		type: 'regular -er',
		tenses: {
			present: {
				eu: 'escrevo',
				você: 'escreve',
				nós: 'escrevemos',
				vocês: 'escrevem',
			},
			preterite: {
				eu: 'escrevi',
				você: 'escreveu',
				nós: 'escrevemos',
				vocês: 'escreveram',
			},
			imperfect: {
				eu: 'escrevia',
				você: 'escrevia',
				nós: 'escrevíamos',
				vocês: 'escreviam',
			},
			future: {
				eu: 'escreverei',
				você: 'escreverá',
				nós: 'escreveremos',
				vocês: 'escreverão',
			},
			conditional: {
				eu: 'escreveria',
				você: 'escreveria',
				nós: 'escreveríamos',
				vocês: 'escreveriam',
			},
		},
	},
]

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
		<div className='flex h-full bg-fca5a5'>
			{/* Sidebar */}
			<div className='w-72 border-r border-red-300 pr-4 overflow-y-auto bg-fca5a5'>
				<div className='mb-4'>
					<input
						type='text'
						placeholder='Search verbs...'
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className='w-full px-3 py-2 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-red-50 text-7f1d1d placeholder-red-400'
					/>
				</div>
				<div className='space-y-1'>
					{filteredVerbs.map((verb) => (
						<button
							key={verb.infinitive}
							onClick={() => handleVerbSelect(verb)}
							className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
								selectedVerb?.infinitive === verb.infinitive
									? 'bg-red-200 text-7f1d1d font-semibold'
									: 'hover:bg-red-200 text-7f1d1d'
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
						<div className='mb-6'>
							<h2 className='text-3xl font-bold text-7f1d1d'>{capitalize(selectedVerb.infinitive)}</h2>
							<p className='text-lg text-red-900'>
								{selectedVerb.translation} | {selectedVerb.type}
							</p>
						</div>

						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
							{/* Present Tense */}
							<div className='bg-white rounded-xl shadow-sm border border-red-200 overflow-hidden'>
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
							<div className='bg-white rounded-xl shadow-sm border border-red-200 overflow-hidden'>
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
							<div className='bg-white rounded-xl shadow-sm border border-red-200 overflow-hidden'>
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
							<div className='bg-white rounded-xl shadow-sm border border-red-200 overflow-hidden'>
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
							<div className='bg-white rounded-xl shadow-sm border border-red-200 overflow-hidden'>
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
						<p className='text-7f1d1d font-medium'>Select a verb to see its conjugation</p>
					</div>
				)}
			</div>
		</div>
	)
}
