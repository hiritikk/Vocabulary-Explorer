/**
 * dict.js — Vocabulary Explorer Dictionary
 * Single source of truth for all word data.
 *
 * All Cree entries verified against itwêwina Plains Cree Dictionary
 * https://itwewina.altlab.app — ALTLab, University of Alberta
 *
 * Dictionary sources cited per entry:
 *   CW   = Cree: Words, Wolvengrey (ed.), U of Regina Press, 2001
 *   AECD = Alberta Elders' Cree Dictionary, LeClaire & Cardinal, U of Alberta Press, 2002
 *   MD   = Maskwacîs Dictionary, Maskwachees Cultural College, 1998
 *
 * Words marked cree: null have no confirmed Cree equivalent in itwêwina.
 * Approximate example sentences are marked approx: true — verify with a speaker before use.
 */

const DICT = {

  // ─────────────────────────────────────────────────────────────
  // HUB WORDS — searchable main entries
  // ─────────────────────────────────────────────────────────────

  walk: {
    key:       'walk',
    eng:       'walk',
    // pimohcêw — confirmed itwêwina VAI-1
    // "s/he walks a bit, s/he walks along, s/he goes along" — CW
    cree:      'pimohcêw',
    audioQuery:'pimohtêw',
    syllabics: 'ᐱᒧᐦᒉᐤ',
    pronounc:  '/pɪˈmoːhtʃeːw/',
    pos:       'VAI-1',
    posLabel:  'verb — animate intransitive',
    posColor:  '#e07a54',
    posNote:   'Also a verb in English',
    posWarning: false,
    // Definitions directly from itwêwina CW
    defs: [
      { text: 's/he walks a bit, s/he walks along, s/he goes along', source: 'CW' },
    ],
    // No Cree example sentence — prototype only
    exApprox:  'pimohcêw. — S/he walks along.',
    approx:    true,
    grammarNote: `VAI means Verb, Animate, Intransitive. It describes an action done by an animate being — a person or animal — with no direct object. In English, "walk" works the same way. But many words that are adjectives in English — like colours and weather — are verbs in Cree. This word happens to match.`,
    grammarHighlight: `In Plains Cree, words for colours, temperatures, and physical states are verbs, not adjectives. "It is cold", "it is blue", "it is windy" are all expressed as verbs in Cree. This word, pimohcêw, is a verb in both languages — but many of its neighbours in this app are not.`,
    sylBreak:  [['ᐱ','pi'],['ᒧ','mo'],['ᐦ','h'],['ᒉ','ce'],['ᐤ','w']],
    sroNote:   'SRO (Standard Roman Orthography) is the standard way to write Plains Cree using the Latin alphabet. The ê in pimohcêw is a long vowel. Pronouncing it short changes the word.',
    src:       'pimohc%C3%AAw',
    sourceTag: 'CW',
    sourceFull:'Cree: Words, Wolvengrey, Arok (ed.), University of Regina Press, 2001',
    // Word forms — all confirmed itwêwina
    forms: [
      {
        group: 'ni-/ki- word (direct statement)',
        rows: [
          ['I',             'nipimohcân'],
          ['you (one)',     'kipimohcân'],
          ['s/he',          'pimohcêw'],
          ['we (not you)',  'nipimohcânân'],
          ['you and we',    'kipimohcânânaw'],
          ['you (all)',     'kipimohcânâwâw'],
          ['they',          'pimohcêwak'],
          ['people',        'pimohcâniwan'],
        ],
      },
      {
        group: 'ê-/kâ- word (conjunct — "as s/he walks")',
        rows: [
          ['I',             'ê-pimohcêyân'],
          ['you (one)',     'ê-pimohcêyan'],
          ['s/he',          'ê-pimohcêt'],
          ['we (not you)',  'ê-pimohcêyâhk'],
          ['you and we',    'ê-pimohcêyahk'],
          ['you (all)',     'ê-pimohcêyêk'],
          ['they',          'ê-pimohcêcik'],
        ],
      },
    ],
    // Explorer graph connections
    category:  ['motion','exercise','travel'],
    synonyms:  ['stroll','stride','amble'],
    antonyms:  ['run','stop'],
    pos_forms: ['walking','walked','walker'],
  },

  cool: {
    key:       'cool',
    eng:       'cool',
    // tahkâyâw — confirmed itwêwina VII-2v
    // "it is cold" — CW
    cree:      'tahkâyâw',
    syllabics: 'ᑕᐦᑳᔮᐤ',
    pronounc:  '/tɑhˈkɑːjɑːw/',
    pos:       'VII-2v',
    posLabel:  'verb — inanimate intransitive',
    posColor:  '#e07a54',
    posNote:   'Adjective in English — verb in Cree',
    posWarning: true,
    defs: [
      { text: 'it is cold, it is cool', source: 'CW' },
    ],
    exApprox:  'tahkâyâw. — It is cold, it is cool.',
    approx:    true,
    grammarNote: `VII means Verb, Inanimate, Intransitive. It describes a state of the environment — weather, temperature, physical conditions — and in Cree it is a verb, not an adjective. There is no Cree equivalent of "the weather is cool." Instead you say the verb directly: tahkâyâw.`,
    grammarHighlight: `In English, "cool" is an adjective that describes something. In Plains Cree, tahkâyâw is a verb — it performs an action. This reflects a genuinely different way of understanding the world. Weather, colours, and many physical states are not descriptions in Cree. They are events.`,
    sylBreak:  [['ᑕ','ta'],['ᐦ','h'],['ᑳ','kâ'],['ᔮ','yâ'],['ᐤ','w']],
    sroNote:   'SRO (Standard Roman Orthography) is the standard way to write Plains Cree using the Latin alphabet. The â characters in tahkâyâw are long vowels. Dropping them changes the meaning.',
    src:       'tahk%C3%A2y%C3%A2w%40vii',
    sourceTag: 'CW',
    sourceFull:'Cree: Words, Wolvengrey, Arok (ed.), University of Regina Press, 2001',
    forms: [
      {
        group: 'ni-/ki- word (direct statement)',
        rows: [
          ['it is',    'tahkâyâw'],
          ['they are', 'tahkâyâwa'],
        ],
      },
      {
        group: 'ê-/kâ- word (conjunct — "as it is cold")',
        rows: [
          ['it is',    'ê-tahkâyâk'],
          ['they are', 'ê-tahkâyâki'],
        ],
      },
    ],
    category:  ['weather','temperature','personality'],
    synonyms:  ['cold','chilly','chill','crisp'],
    antonyms:  ['warm','hot'],
    pos_forms: ['cooling','coolly','coolness'],
  },

  bear: {
    key:       'bear',
    eng:       'bear',
    // maskwa — confirmed itwêwina NA-4w
    // "bear, black bear" — CW
    cree:      'maskwa',
    syllabics: 'ᒪᐢᑿ',
    pronounc:  '/ˈmɑskwɑ/',
    pos:       'NA-4w',
    posLabel:  'noun — animate',
    posColor:  '#c8a96e',
    posNote:   'Also a noun in English',
    posWarning: false,
    defs: [
      { text: 'bear, black bear', source: 'CW' },
    ],
    exApprox:  'maskwa pimohcêw. — The bear walks about.',
    approx:    true,
    grammarNote: `NA means Noun, Animate. In Plains Cree every noun is either animate or inanimate — this affects how verbs and other words around them behave. maskwa is animate, as are all animals. Whether a noun is animate shapes the entire grammar around it.`,
    grammarHighlight: `Animacy in Cree is not only about biological life. Some objects that seem inanimate in English — a drum, a pipe, certain plants — are animate in Cree. This reflects cultural and spiritual significance, not just physical properties. maskwa has been an important figure in Plains Cree culture and oral tradition for thousands of years.`,
    sylBreak:  [['ᒪ','ma'],['ᐢ','s'],['ᑿ','kwa']],
    sroNote:   'SRO (Standard Roman Orthography) is the standard way to write Plains Cree using the Latin alphabet. maskwa has no long vowels — it is pronounced as written.',
    src:       'maskwa%401',
    sourceTag: 'CW',
    sourceFull:'Cree: Words, Wolvengrey, Arok (ed.), University of Regina Press, 2001',
    // Forms confirmed itwêwina
    forms: [
      {
        group: 'Basic noun forms',
        rows: [
          ['only one',    'maskwa'],
          ['two or more', 'maskwak'],
          ['my',          'nimaskom'],
          ['your (one)',  'kimaskom'],
          ['his/her',     'omaskoma'],
        ],
      },
    ],
    category:  ['animals','wildlife','land'],
    synonyms:  ['grizzly','bruin'],
    antonyms:  [],
    pos_forms: ['bears','bearing','bearish'],
  },

  // ─────────────────────────────────────────────────────────────
  // SPOKE WORDS — related words shown in the graph
  // ─────────────────────────────────────────────────────────────

  // ── walk / category ──
  motion: {
    key: 'motion', eng: 'motion', cree: null, pos: 'noun', posColor: '#c8a96e',
    defs: [{ text: 'The action or process of moving or being moved.', source: 'English' }],
    exEng: 'The gentle motion of the boat lulled him to sleep.',
    src: null,
    // No confirmed Cree noun for "motion" in itwêwina
    dictResults: [
      { cree: 'pimohcêw', pos: 'VAI-1', src: 'pimohc%C3%AAw',
        defs: [{ text: 's/he walks a bit, s/he walks along, s/he goes along', tag: 'CW' }] },
    ],
  },
  exercise: {
    key: 'exercise', eng: 'exercise', cree: null, pos: 'noun', posColor: '#c8a96e',
    defs: [{ text: 'Activity requiring physical effort to sustain or improve health.', source: 'English' }],
    exEng: 'Walking is one of the best forms of exercise.',
    src: null,
    dictResults: [],
  },
  travel: {
    key: 'travel', eng: 'travel',
    // pimaham — confirmed itwêwina VAI-3
    // "s/he travels down the river, s/he migrates" — CW
    cree: 'pimaham', pos: 'VAI-3', posColor: '#e07a54',
    defs: [
      { text: 's/he travels down the river', source: 'CW' },
      { text: 's/he migrates (i.e. bird)', source: 'CW' },
    ],
    exEng: 'Her travel took her across three provinces on foot.',
    src: 'pimaham',
    dictResults: null,
  },

  // ── walk / synonyms ──
  stroll: {
    key: 'stroll', eng: 'stroll', cree: null, pos: 'verb', posColor: '#e07a54',
    defs: [{ text: 'To walk in a leisurely way.', source: 'English' }],
    exEng: 'They strolled along the river in the evening light.',
    src: null,
    dictResults: [
      { cree: 'pimohcêw', pos: 'VAI-1', src: 'pimohc%C3%AAw',
        defs: [{ text: 's/he walks a bit, s/he walks along, s/he goes along', tag: 'CW' }] },
    ],
  },
  stride: {
    key: 'stride', eng: 'stride', cree: null, pos: 'verb', posColor: '#e07a54',
    defs: [{ text: 'To walk with long, decisive steps.', source: 'English' }],
    exEng: 'She strode confidently into the meeting room.',
    src: null,
    dictResults: [
      { cree: 'pimohcêw', pos: 'VAI-1', src: 'pimohc%C3%AAw',
        defs: [{ text: 's/he walks a bit, s/he walks along, s/he goes along', tag: 'CW' }] },
    ],
  },
  amble: {
    key: 'amble', eng: 'amble', cree: null, pos: 'verb', posColor: '#e07a54',
    defs: [{ text: 'To walk at a slow, relaxed pace.', source: 'English' }],
    exEng: 'They ambled through the market, stopping at each stall.',
    src: null,
    dictResults: [
      { cree: 'pimohcêw', pos: 'VAI-1', src: 'pimohc%C3%AAw',
        defs: [{ text: 's/he walks a bit, s/he walks along, s/he goes along', tag: 'CW' }] },
    ],
  },

  // ── walk / antonyms ──
  run: {
    key: 'run', eng: 'run', cree: null, pos: 'verb', posColor: '#e07a54',
    defs: [{ text: 'To move swiftly on foot so that both feet leave the ground during each stride.', source: 'English' }],
    exEng: 'She had to run to catch the last bus.',
    src: null,
    dictResults: [
      // pimîpahtâw = "s/he runs along" — not yet confirmed fetchable from itwewina directly
      // leaving as closest match, not verified full entry
      { cree: 'pimîpahtâw', pos: 'VAI', src: null,
        defs: [{ text: 's/he runs along [closest match — verify in itwêwina]', tag: '' }] },
    ],
  },
  stop: {
    key: 'stop', eng: 'stop', cree: null, pos: 'verb', posColor: '#e07a54',
    defs: [{ text: 'To cease moving or operating.', source: 'English' }],
    exEng: 'He stopped at the corner and looked both ways.',
    src: null,
    dictResults: [],
  },

  // ── walk / pos forms ──
  walking: {
    key: 'walking', eng: 'walking', cree: null, pos: 'verb (present participle)', posColor: '#e07a54',
    defs: [{ text: 'Moving on foot at a regular pace.', source: 'English' }],
    exEng: 'Walking to school every day keeps her fit.',
    src: null,
    dictResults: [
      { cree: 'pimohcêw', pos: 'VAI-1', src: 'pimohc%C3%AAw',
        defs: [{ text: 's/he walks a bit, s/he walks along', tag: 'CW' }] },
    ],
  },
  walked: {
    key: 'walked', eng: 'walked', cree: null, pos: 'verb (past tense)', posColor: '#e07a54',
    defs: [{ text: 'Past tense of walk — moved on foot at a regular pace.', source: 'English' }],
    exEng: 'He walked all the way home after the concert.',
    src: null,
    dictResults: [
      { cree: 'pimohcêw', pos: 'VAI-1', src: 'pimohc%C3%AAw',
        defs: [{ text: 's/he walks a bit, s/he walks along', tag: 'CW' }] },
    ],
  },
  walker: {
    key: 'walker', eng: 'walker', cree: null, pos: 'noun', posColor: '#c8a96e',
    defs: [{ text: 'A person who walks, especially for exercise or pleasure.', source: 'English' }],
    exEng: 'She is an avid walker who logs ten kilometres every morning.',
    src: null, dictResults: [],
  },

  // ── cool / category ──
  weather: {
    key: 'weather', eng: 'weather', cree: null, pos: 'noun', posColor: '#c8a96e',
    defs: [{ text: 'The state of the atmosphere at a given time and place — temperature, wind, rain, and so on.', source: 'English' }],
    exEng: 'The weather this morning was cool and overcast.',
    src: null,
    // Note: kîsikâw = "day/daylight" NOT weather — marked as semantic gap
    // Weather in Cree is expressed through specific weather verbs (kimiwan, kôniwan, yôtin, etc.)
    dictResults: [
      { cree: 'kisinâw', pos: 'VII-1v', src: 'kisin%C3%A2w',
        defs: [{ text: 'it is cold weather, it is bitterly cold weather', tag: 'CW' }] },
      { cree: 'kimiwan', pos: 'VII-1n', src: 'kimiwan%40vii',
        defs: [{ text: 'it rains, it is raining, it is rainy', tag: 'CW' }] },
    ],
  },
  temperature: {
    key: 'temperature', eng: 'temperature', cree: null, pos: 'noun', posColor: '#c8a96e',
    defs: [{ text: 'A measure of how hot or cold something is.', source: 'English' }],
    exEng: 'The temperature dropped overnight, leaving a cool frost on the grass.',
    src: null,
    dictResults: [
      { cree: 'kisâstêw', pos: 'VII', src: 'kis%C3%A2st%C3%AAw%40vii',
        defs: [{ text: 'it is hot, it is warm', tag: 'CW' }] },
    ],
  },
  personality: {
    key: 'personality', eng: 'personality', cree: null, pos: 'noun', posColor: '#c8a96e',
    defs: [{ text: '"Cool" as a personality trait implies calm confidence and social ease.', source: 'English' }],
    exEng: 'She had a cool personality — never flustered, always in control.',
    src: null, dictResults: [],
  },

  // ── cool / synonyms ──
  cold: {
    key: 'cold', eng: 'cold',
    // kisinâw — confirmed itwêwina VII-1v
    // "it is cold weather, it is bitterly cold weather" — CW
    // "It is quite cold." — MD
    cree: 'kisinâw', pos: 'VII-1v', posColor: '#7aa4d4',
    defs: [
      { text: 'it is cold weather, it is bitterly cold weather', source: 'CW' },
      { text: 'It is quite cold.', source: 'MD' },
    ],
    exEng: 'The cold water was refreshing after the hike.',
    exApprox: 'kisinâw. — It is cold.',
    approx: true,
    src: 'kisin%C3%A2w',
    dictResults: null,
  },
  chilly: {
    key: 'chilly', eng: 'chilly', cree: null, pos: 'adjective', posColor: '#7aa4d4',
    defs: [{ text: 'Noticeably cold in a way that causes mild discomfort.', source: 'English' }],
    exEng: 'It was a chilly morning, so she grabbed her jacket.',
    src: null,
    dictResults: [
      { cree: 'kisinâw', pos: 'VII-1v', src: 'kisin%C3%A2w',
        defs: [{ text: 'it is cold weather, it is bitterly cold weather', tag: 'CW' }] },
    ],
  },
  chill: {
    key: 'chill', eng: 'chill', cree: null, pos: 'noun / verb', posColor: '#8bbfa8',
    defs: [{ text: 'A sensation of cold. As a verb, to make or become cold.', source: 'English' }],
    exEng: 'There was a chill in the air as the sun went down.',
    src: null,
    dictResults: [
      { cree: 'kisinâw', pos: 'VII-1v', src: 'kisin%C3%A2w',
        defs: [{ text: 'it is cold weather, it is bitterly cold weather', tag: 'CW' }] },
    ],
  },
  crisp: {
    key: 'crisp', eng: 'crisp', cree: null, pos: 'adjective', posColor: '#7aa4d4',
    defs: [{ text: 'Pleasantly cool and fresh. Often describes clean, dry, cold air.', source: 'English' }],
    exEng: 'The crisp autumn air smelled of fallen leaves and pine.',
    src: null,
    dictResults: [
      { cree: 'tahkâyâw', pos: 'VII-2v', src: 'tahk%C3%A2y%C3%A2w%40vii',
        defs: [{ text: 'it is cold', tag: 'CW' }] },
    ],
  },

  // ── cool / antonyms ──
  warm: {
    key: 'warm', eng: 'warm',
    // kisâstêw — confirmed itwêwina VII
    // "it is hot, it is warm" — CW
    cree: 'kisâstêw', pos: 'VII', posColor: '#e07a54',
    defs: [{ text: 'it is hot, it is warm', source: 'CW' }],
    exEng: 'The warm afternoon sun made the patio a perfect place to sit.',
    exApprox: 'kisâstêw. — It is warm.',
    approx: true,
    src: 'kis%C3%A2st%C3%AAw%40vii',
    dictResults: null,
  },
  hot: {
    key: 'hot', eng: 'hot',
    // kisâstêw — same word as warm — confirmed itwêwina VII
    cree: 'kisâstêw', pos: 'VII', posColor: '#e07a54',
    defs: [{ text: 'it is hot, it is warm', source: 'CW' }],
    exEng: 'It was so hot outside that the pavement was shimmering.',
    exApprox: 'kisâstêw. — It is hot.',
    approx: true,
    src: 'kis%C3%A2st%C3%AAw%40vii',
    dictResults: null,
  },

  // ── cool / pos forms ──
  cooling: {
    key: 'cooling', eng: 'cooling', cree: null, pos: 'verb (present participle)', posColor: '#e07a54',
    defs: [{ text: 'The process of becoming or making something cooler.', source: 'English' }],
    exEng: 'The cooling wind was a relief after hours in the sun.',
    src: null,
    dictResults: [
      { cree: 'tahkâyâw', pos: 'VII-2v', src: 'tahk%C3%A2y%C3%A2w%40vii',
        defs: [{ text: 'it is cold', tag: 'CW' }] },
    ],
  },
  coolly: {
    key: 'coolly', eng: 'coolly', cree: null, pos: 'adverb', posColor: '#9fc87a',
    defs: [{ text: 'In a calm and unemotional way; without enthusiasm or friendliness.', source: 'English' }],
    exEng: 'She coolly accepted the award, as if she had expected it all along.',
    src: null, dictResults: [],
  },
  coolness: {
    key: 'coolness', eng: 'coolness', cree: null, pos: 'noun', posColor: '#c8a96e',
    defs: [{ text: 'The quality of being cool in temperature, or calm and composed.', source: 'English' }],
    exEng: 'The coolness of the evening air was a welcome change from the heat.',
    src: null,
    dictResults: [
      { cree: 'tahkâyâw', pos: 'VII-2v', src: 'tahk%C3%A2y%C3%A2w%40vii',
        defs: [{ text: 'it is cold', tag: 'CW' }] },
    ],
  },

  // ── bear / category ──
  animals: {
    key: 'animals', eng: 'animals',
    // pisiskiwak — confirmed itwêwina NA (plural of pisiskiw)
    cree: 'pisiskiwak', pos: 'NA (plural)', posColor: '#c8a96e',
    defs: [{ text: 'animals (plural of pisiskiw)', source: 'CW' }],
    exEng: 'The forest was full of animals at dawn.',
    exApprox: 'pisiskiwak pimohcêwak. — The animals walk about.',
    approx: true,
    src: 'pisiskiwak',
    dictResults: null,
  },
  wildlife: {
    key: 'wildlife', eng: 'wildlife', cree: null, pos: 'noun', posColor: '#c8a96e',
    defs: [{ text: 'Wild animals and plants living in their natural environment.', source: 'English' }],
    exEng: 'The park protects the wildlife of the boreal forest.',
    src: null,
    dictResults: [
      { cree: 'pisiskiwak', pos: 'NA', src: 'pisiskiwak',
        defs: [{ text: 'animals (plural of pisiskiw)', tag: 'CW' }] },
    ],
  },
  land: {
    key: 'land', eng: 'land',
    // askiy — confirmed itwêwina NI-2
    // "land; region, area; earth, world; settlement, colony, country" — CW
    cree: 'askiy', pos: 'NI-2', posColor: '#c8a96e',
    defs: [
      { text: 'land', source: 'CW' },
      { text: 'region, area', source: 'CW' },
      { text: 'earth, world', source: 'CW' },
    ],
    exEng: 'The bear roamed the land freely, long before settlers arrived.',
    exApprox: 'maskwa pimohcêw askîhk. — The bear walks on the land.',
    approx: true,
    src: 'askiy%401',
    dictResults: null,
  },

  // ── bear / synonyms ──
  grizzly: {
    key: 'grizzly', eng: 'grizzly', cree: null, pos: 'noun', posColor: '#c8a96e',
    defs: [{ text: 'A large subspecies of brown bear found in North America, known for its shoulder hump.', source: 'English' }],
    exEng: 'The grizzly bear stood on its hind legs to get a better view.',
    src: null,
    dictResults: [
      { cree: 'maskwa', pos: 'NA-4w', src: 'maskwa%401',
        defs: [{ text: 'bear, black bear', tag: 'CW' }] },
    ],
  },
  bruin: {
    key: 'bruin', eng: 'bruin', cree: null, pos: 'noun', posColor: '#c8a96e',
    defs: [{ text: 'An old literary or poetic word for a bear, from Dutch folklore.', source: 'English' }],
    exEng: 'Old bruin shambled through the berry patch at dusk.',
    src: null,
    dictResults: [
      { cree: 'maskwa', pos: 'NA-4w', src: 'maskwa%401',
        defs: [{ text: 'bear, black bear', tag: 'CW' }] },
    ],
  },

  // ── bear / pos forms ──
  bears: {
    key: 'bears', eng: 'bears',
    // maskwak — confirmed itwêwina (plural of maskwa, NA-4w)
    cree: 'maskwak', pos: 'NA (plural)', posColor: '#c8a96e',
    defs: [{ text: 'bears (plural of maskwa)', source: 'CW' }],
    exEng: 'Two bears were spotted near the river this morning.',
    exApprox: 'maskwak pimohcêwak. — The bears walk about.',
    approx: true,
    src: 'maskwa%401',
    dictResults: null,
  },
  bearing: {
    key: 'bearing', eng: 'bearing', cree: null, pos: 'noun / verb', posColor: '#8bbfa8',
    defs: [{ text: "Carrying or enduring something. Also a person's way of standing or moving.", source: 'English' }],
    exEng: 'She carried herself with the bearing of someone who knows their worth.',
    src: null, dictResults: [],
  },
  bearish: {
    key: 'bearish', eng: 'bearish', cree: null, pos: 'adjective', posColor: '#7aa4d4',
    defs: [{ text: 'Resembling a bear in size or manner. In finance, pessimistic about market performance.', source: 'English' }],
    exEng: 'He had a bearish outlook on the economy this quarter.',
    src: null,
    dictResults: [
      { cree: 'maskwa', pos: 'NA-4w', src: 'maskwa%401',
        defs: [{ text: 'bear, black bear', tag: 'CW' }] },
    ],
  },

  // ── additional confirmed weather words (for future graph expansion) ──
  snow: {
    key: 'snow', eng: 'snow',
    // kôniwan — confirmed itwêwina VII-1n
    // "it is covered with snow, it is full of snow; there is snow on the ground" — CW
    cree: 'kôniwan', pos: 'VII-1n', posColor: '#e07a54',
    defs: [
      { text: 'it is covered with snow, it is full of snow', source: 'CW' },
      { text: 'there is snow on the ground', source: 'CW' },
    ],
    exEng: 'Snow fell through the night and covered the ground by morning.',
    src: 'k%C3%B4niwan',
    dictResults: null,
  },
  rain: {
    key: 'rain', eng: 'rain',
    // kimiwan — confirmed itwêwina VII-1n
    // "it rains, it is raining, it is rainy" — CW, AECD, MD
    cree: 'kimiwan', pos: 'VII-1n', posColor: '#e07a54',
    defs: [
      { text: 'it rains, it is raining, it is rainy', source: 'CW' },
      { text: 'It is raining.', source: 'AECD, MD' },
    ],
    exEng: 'Rain fell steadily through the afternoon.',
    src: 'kimiwan%40vii',
    dictResults: null,
  },
  windy: {
    key: 'windy', eng: 'windy',
    // yôtin — confirmed itwêwina VII
    // "it is windy" — AECD
    cree: 'yôtin', pos: 'VII', posColor: '#e07a54',
    defs: [
      { text: 'it is windy', source: 'AECD' },
    ],
    exEng: 'It was too windy to light a fire outside.',
    src: 'y%C3%B4tin%40vii',
    dictResults: null,
  },
  blue: {
    key: 'blue', eng: 'blue',
    // sîpihkwâw — confirmed itwêwina VII-2v
    // "it is blue; It is blue in color." — CW, AECD, MD
    cree: 'sîpihkwâw', pos: 'VII-2v', posColor: '#e07a54',
    posNote: 'Adjective in English — verb in Cree',
    posWarning: true,
    defs: [
      { text: 'it is blue', source: 'CW' },
      { text: 'It is blue in color.', source: 'MD' },
    ],
    exEng: 'The blue sky stretched from horizon to horizon.',
    src: 's%C3%AEpihkw%C3%A2w',
    dictResults: null,
  },
};

// ── Explorer graph category definitions ──
const CATEGORIES = {
  motion:  { label: 'Movement',        color: '#e07a54', start: 'walk'   },
  kinship: { label: 'Family',          color: '#c8a96e', start: 'walk'   },
  body:    { label: 'Body',            color: '#8bbfa8', start: 'walk'   },
  weather: { label: 'Weather',         color: '#7aa4d4', start: 'cool'   },
  land:    { label: 'Land & animals',  color: '#9fc87a', start: 'bear'   },
  colour:  { label: 'Colour',          color: '#c47ab0', start: 'blue'   },
  hunt:    { label: 'Hunting',         color: '#d4a45a', start: 'bear'   },
};

// ── POS badge colours ──
const POS_COLORS = {
  'adjective':               '#7aa4d4',
  'noun':                    '#c8a96e',
  'noun (plural)':           '#c8a96e',
  'NA (plural)':             '#c8a96e',
  'verb':                    '#e07a54',
  'VAI-1':                   '#e07a54',
  'VII':                     '#e07a54',
  'VII-1n':                  '#e07a54',
  'VII-1v':                  '#e07a54',
  'VII-2v':                  '#e07a54',
  'verb (present participle)':'#e07a54',
  'verb (past tense)':       '#e07a54',
  'adverb':                  '#9fc87a',
  'noun / verb':             '#8bbfa8',
  'NI-2':                    '#c8a96e',
  'NA-4w':                   '#c8a96e',
};

// ── itwêwina base URL ──
const ITWEWINA = 'https://itwewina.altlab.app';

// ── Helper: get word by key ──
function getWord(key) {
  return DICT[key] || null;
}

// ── Helper: get explorer spokes for a hub word ──
function getSpokes(hubKey, filter) {
  const w = DICT[hubKey];
  if (!w) return [];
  const map = {
    category: w.category  || [],
    synonyms: w.synonyms  || [],
    antonyms: w.antonyms  || [],
    pos:      w.pos_forms || [],
  };
  return (map[filter] || []).map(k => DICT[k]).filter(Boolean);
}
