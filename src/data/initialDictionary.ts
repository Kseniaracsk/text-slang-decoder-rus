
import { DictionaryEntry } from '@/types/dictionary.types';

// Initial dictionary data with all entries
export const initialDictionary: DictionaryEntry[] = [
  // Original entries
  {
    id: '1',
    abbreviation: 'CIA',
    fullTermEnglish: 'Central Intelligence Agency',
    translationRussian: 'Центральное разведывательное управление (ЦРУ)',
    usageExample: 'The CIA has been conducting investigations overseas.',
    source: 'The New York Times'
  },
  {
    id: '2',
    abbreviation: 'FBI',
    fullTermEnglish: 'Federal Bureau of Investigation',
    translationRussian: 'Федеральное бюро расследований (ФБР)',
    usageExample: 'The FBI arrested three suspects in connection with the case.',
    source: 'The Guardian'
  },
  {
    id: '3',
    abbreviation: 'NASA',
    fullTermEnglish: 'National Aeronautics and Space Administration',
    translationRussian: 'Национальное управление по аэронавтике и исследованию космического пространства (НАСА)',
    usageExample: 'NASA announced plans for a new mission to Mars next year.',
    source: 'Forbes'
  },
  {
    id: '4',
    abbreviation: 'NATO',
    fullTermEnglish: 'North Atlantic Treaty Organization',
    translationRussian: 'Организация Североатлантического договора (НАТО)',
    usageExample: 'NATO allies met to discuss the security situation in Eastern Europe.',
    source: 'The Telegraph'
  },
  {
    id: '5',
    abbreviation: 'WHO',
    fullTermEnglish: 'World Health Organization',
    translationRussian: 'Всемирная организация здравоохранения (ВОЗ)',
    usageExample: 'WHO issued new guidelines to combat the spread of the virus.',
    source: 'The Independent'
  },
  {
    id: '6',
    abbreviation: 'IMF',
    fullTermEnglish: 'International Monetary Fund',
    translationRussian: 'Международный валютный фонд (МВФ)',
    usageExample: 'The IMF has approved a $5 billion loan to support the economy.',
    source: 'The New York Times'
  },
  {
    id: '7',
    abbreviation: 'CNN',
    fullTermEnglish: 'Cable News Network',
    translationRussian: 'Кабельная новостная сеть',
    usageExample: 'CNN reported breaking news about the election results.',
    source: 'The Guardian'
  },
  {
    id: '8',
    abbreviation: 'BBC',
    fullTermEnglish: 'British Broadcasting Corporation',
    translationRussian: 'Британская вещательная корпорация',
    usageExample: 'The BBC documentary explored the history of the royal family.',
    source: 'Sunday-Times'
  },
  {
    id: '9',
    abbreviation: 'ASAP',
    fullTermEnglish: 'As Soon As Possible',
    translationRussian: 'Как можно скорее',
    usageExample: 'Please submit your report ASAP, the deadline is tomorrow.',
    source: 'Forbes'
  },
  {
    id: '10',
    abbreviation: 'POTUS',
    fullTermEnglish: 'President of the United States',
    translationRussian: 'Президент Соединенных Штатов',
    usageExample: 'POTUS will address the nation tonight regarding the economic crisis.',
    source: 'The Telegraph'
  },
  // New entries from the provided images
  {
    id: '11',
    abbreviation: 'COVID-19',
    fullTermEnglish: 'Coronavirus Disease 2019',
    translationRussian: 'Ковид-19: Коронавирусная болезнь 2019 года',
    usageExample: 'With the acute phase of the Covid-19 pandemic fading even as the coronavirus persists and evolves, a new normal is taking shape around the world.',
    source: 'The New York Times'
  },
  {
    id: '12',
    abbreviation: 'EU',
    fullTermEnglish: 'European Union',
    translationRussian: 'Евросоюз (ЕС): Европейский Союз',
    usageExample: 'How a Game of Good Cop-Bad Cop Sealed the E.U. Ukraine Fund Deal',
    source: 'The New York Times'
  },
  {
    id: '13',
    abbreviation: 'AI',
    fullTermEnglish: 'Artificial Intelligence',
    translationRussian: 'Искусственный интеллект',
    usageExample: 'A year ago, a rogue A.I. tried to break up my marriage.',
    source: 'The Guardian'
  },
  {
    id: '14',
    abbreviation: 'CEO',
    fullTermEnglish: 'Chief Executive Officer',
    translationRussian: 'Генеральный директор: Главное должностное лицо компании',
    usageExample: "Angela Chao, C.E.O. of Family's Shipping Company, Is Dead at 50",
    source: 'The New York Times'
  },
  {
    id: '15',
    abbreviation: 'CFO',
    fullTermEnglish: 'Chief Financial Officer',
    translationRussian: 'Финансовый директор: Главное должностное лицо, ответственное за финансы компании',
    usageExample: "Your C.F.O., a 'Fraction' of the Time",
    source: 'The Wall Street Journal'
  },
  {
    id: '16',
    abbreviation: 'IRS',
    fullTermEnglish: 'Internal Revenue Service',
    translationRussian: 'Налоговое управление США: Служба внутренних доходов',
    usageExample: 'I.R.S. Commissioner Warns Budget Cuts Would Add to Deficit',
    source: 'The New York Times'
  },
  {
    id: '17',
    abbreviation: 'GOP',
    fullTermEnglish: 'Grand Old Party (Republican Party)',
    translationRussian: 'Республиканская партия (США): Традиционное прозвище Республиканской партии США',
    usageExample: 'In the Land of George Santos, Machine Politics Fuels a G.O.P. Revival',
    source: 'The New York Times'
  },
  {
    id: '18',
    abbreviation: 'DOJ',
    fullTermEnglish: 'Department of Justice',
    translationRussian: 'Министерство юстиции (США): Федеральный орган исполнительной власти в США',
    usageExample: "U.S. DOJ joins antitrust lawsuit challenging NCAA's transfer rules",
    source: 'Reuters'
  },
  {
    id: '19',
    abbreviation: 'FTC',
    fullTermEnglish: 'Federal Trade Commission',
    translationRussian: 'Федеральная торговая комиссия (США): Занимается защитой прав потребителей',
    usageExample: 'TurboTax Can No Longer Advertise Products as Free, F.T.C. Says',
    source: 'The New York Times'
  },
  {
    id: '20',
    abbreviation: 'SEC',
    fullTermEnglish: 'Securities and Exchange Commission',
    translationRussian: 'Комиссия по ценным бумагам и биржам (США): Регулирует рынок ценных бумаг в США',
    usageExample: "A Hack of the S.E.C.'s Social Media Account Caused a Bitcoin Frenzy, Briefly",
    source: 'The Wall Street Journal'
  },
  {
    id: '21',
    abbreviation: 'NYC',
    fullTermEnglish: 'New York City',
    translationRussian: 'Нью-Йорк: Город Нью-Йорк',
    usageExample: 'N.Y.C. Revived Remote Schooling for a Day. It Was a Mess.',
    source: 'The New York Times'
  },
  {
    id: '22',
    abbreviation: 'STEM',
    fullTermEnglish: 'Science, Technology, Engineering, and Mathematics',
    translationRussian: 'СТЕМ (наука, технология, инженерия и математика): Используется для обозначения дисциплин',
    usageExample: 'Our 4th Annual STEM Writing Contest',
    source: 'The New York Times'
  },
  {
    id: '23',
    abbreviation: 'ETA',
    fullTermEnglish: 'Estimated Time of Arrival',
    translationRussian: 'Предполагаемое время прибытия',
    usageExample: 'The flight has an ETA of 3:45 PM',
    source: 'The Guardian'
  },
  {
    id: '24',
    abbreviation: 'RSVP',
    fullTermEnglish: 'Répondez S\'il Vous Plaît',
    translationRussian: 'Просьба ответить (фр.): Французское выражение, обозначающее просьбу подтвердить участие',
    usageExample: "Party Down' Is Back. Did You R.S.V.P.?",
    source: 'The New York Times'
  },
  {
    id: '25',
    abbreviation: 'ACV',
    fullTermEnglish: 'Alaska Conservation Voters',
    translationRussian: 'Избиратели за охрану природы Аляски: Организация, занимающаяся защитой окружающей среды',
    usageExample: "Belgium's police trade union, ACV Politie, expressed anger over the killing...",
    source: 'The Guardian'
  },
  {
    id: '26',
    abbreviation: 'DOD',
    fullTermEnglish: 'U.S. Department of Defense',
    translationRussian: 'Министерство обороны США',
    usageExample: 'Mr. Austin instructed the assistant secretary for legislative affairs "to inform the appropriate congressional leadership that D.O.D. support to congressional delegation visits will be unavailable to Israel during this period"',
    source: 'The New York Times'
  },
  {
    id: '27',
    abbreviation: 'DOE',
    fullTermEnglish: 'U.S. Department of Energy',
    translationRussian: 'Министерство энергетики США',
    source: 'The Washington Post'
  },
  {
    id: '28',
    abbreviation: 'EA',
    fullTermEnglish: 'Environmental Assessment',
    translationRussian: 'Оценка воздействия на окружающую среду: Процедура оценки потенциального воздействия',
    usageExample: 'Mason Greenwood to be included in EA Sports FC 24',
    source: 'The Guardian'
  },
  {
    id: '29',
    abbreviation: 'EIS',
    fullTermEnglish: 'Environmental Impact Statement',
    translationRussian: 'Заявление о воздействии на окружающую среду: Более подробный документ, чем EA',
    usageExample: 'Using the EIS would allow to finish all the work in about four years',
    source: 'The New York Times'
  },
  {
    id: '30',
    abbreviation: 'EPA',
    fullTermEnglish: 'U.S. Environmental Protection Agency',
    translationRussian: 'Агентство по охране окружающей среды США',
    source: 'The Guardian'
  },
  // Additional entries 
  {
    id: '31',
    abbreviation: 'ESA',
    fullTermEnglish: 'Endangered Species Act',
    translationRussian: 'Закон об исчезающих видах: Закон США, направленный на защиту исчезающих видов',
    usageExample: "ESA's Juice spacecraft launched to Jupiter and its moons",
    source: 'BBC Science Focus'
  },
  {
    id: '32',
    abbreviation: 'FERC',
    fullTermEnglish: 'Federal Energy Regulatory Commission',
    translationRussian: 'Федеральная комиссия по регулированию энергетики: Федеральный орган, регулирующий энергетическую отрасль',
    usageExample: 'FERC voted 2-to-1 in a partisan split on Monday on a new rule that could help speed up wind and solar energy',
    source: 'The New York Times'
  },
  {
    id: '33',
    abbreviation: 'HSS',
    fullTermEnglish: 'Alaska Department of Health and Social Services',
    translationRussian: 'Департамент здравоохранения и социальных услуг Аляски: Государственный орган, отвечающий за здравоохранение',
    usageExample: 'The Alaska Department of Health and Social Services (HSS) offers a variety of programs and resources to support the health and well-being of Alaskans.',
    source: 'Alaska State Website'
  },
  {
    id: '34',
    abbreviation: 'ECB',
    fullTermEnglish: 'European Central Bank',
    translationRussian: 'Европейский центральный банк (ЕЦБ): Центральный банк Еврозоны',
    source: 'The Financial Times'
  },
  {
    id: '35',
    abbreviation: 'QE',
    fullTermEnglish: 'Quantitative Easing',
    translationRussian: 'Количественное смягчение: Мера монетарной политики, используемая центральными банками для стимулирования экономики',
    source: 'The Economist'
  },
  {
    id: '36',
    abbreviation: 'IR35',
    fullTermEnglish: 'Intermediaries Legislation',
    translationRussian: 'Законодательство о посредниках (Великобритания): Налоговое законодательство, касающееся работы подрядчиков',
    source: 'BBC'
  },
  {
    id: '37',
    abbreviation: 'FCA',
    fullTermEnglish: 'Financial Conduct Authority',
    translationRussian: 'Управление по финансовому регулированию и надзору (Великобритания): Регулирующий орган для финансовых компаний',
    source: 'The Guardian'
  },
  {
    id: '38',
    abbreviation: 'GDPR',
    fullTermEnglish: 'General Data Protection Regulation',
    translationRussian: 'Общий регламент по защите данных (ЕС): Закон о защите персональных данных',
    source: 'The Financial Times'
  },
  {
    id: '39',
    abbreviation: 'A-LEVEL',
    fullTermEnglish: 'Advanced Level',
    translationRussian: 'Продвинутый уровень (Великобритания): Экзамены, сдаваемые в конце средней школы',
    source: 'The Guardian'
  },
  {
    id: '40',
    abbreviation: 'R&D',
    fullTermEnglish: 'Research and Development',
    translationRussian: 'Научные исследования и разработки: Деятельность по созданию новых продуктов и технологий',
    usageExample: 'Significant investment in R&D is crucial for innovation.',
    source: 'The Financial Times'
  },
  {
    id: '41',
    abbreviation: 'CRM',
    fullTermEnglish: 'Customer Relationship Management',
    translationRussian: 'Управление отношениями с клиентами: Система для управления взаимодействием с клиентами',
    usageExample: 'CRM system helps businesses manage interactions with current and potential customers',
    source: 'Forbes'
  },
  {
    id: '42',
    abbreviation: 'OKR',
    fullTermEnglish: 'Objectives and Key Results',
    translationRussian: 'Цели и ключевые результаты: Фреймворк для постановки целей и оценки их достижения',
    usageExample: 'We use OKRs to set and track ambitious goals.',
    source: 'Harvard Business Review'
  },
  {
    id: '43',
    abbreviation: 'ESG',
    fullTermEnglish: 'Environmental, Social, and Governance',
    translationRussian: 'Экология, социальная ответственность и управление: Критерии для оценки устойчивости бизнеса',
    usageExample: 'Investors are increasingly focused on companies with strong ESG practices.',
    source: 'The Wall Street Journal'
  },
  {
    id: '44',
    abbreviation: 'FINTECH',
    fullTermEnglish: 'Financial Technology',
    translationRussian: 'Финансовые технологии: Технологии, используемые в финансовой сфере',
    usageExample: 'The FinTech industry is disrupting traditional banking.',
    source: 'The Economist'
  },
  {
    id: '45',
    abbreviation: 'WEB3',
    fullTermEnglish: 'Web 3.0',
    translationRussian: 'Веб 3.0: Децентрализованная версия интернета, основанная на блокчейне',
    source: 'Wired'
  },
  {
    id: '46',
    abbreviation: 'DAO',
    fullTermEnglish: 'Decentralized Autonomous Organization',
    translationRussian: 'Децентрализованная автономная организация: Организация, управляемая кодом на блокчейне',
    usageExample: 'A DAO is governed by rules encoded in a smart contract',
    source: 'CoinDesk'
  },
  {
    id: '47',
    abbreviation: 'NFT',
    fullTermEnglish: 'Non-Fungible Token',
    translationRussian: 'Невзаимозаменяемый токен: Уникальный цифровой актив, представляющий собой право собственности на объект',
    usageExample: 'The artist sold their digital artwork as an NFT',
    source: 'The New York Times'
  },
  {
    id: '48',
    abbreviation: 'DEFI',
    fullTermEnglish: 'Decentralized Finance',
    translationRussian: 'Децентрализованные финансы: Финансовые сервисы, работающие на блокчейне',
    usageExample: 'DeFi aims to recreate traditional financial services on blockchain networks.',
    source: 'Forbes'
  },
  {
    id: '49',
    abbreviation: 'AIAAS',
    fullTermEnglish: 'AI as a Service',
    translationRussian: 'ИИ как услуга: Предоставление доступа к инструментам и платформам ИИ',
    source: 'TechCrunch'
  },
  {
    id: '50',
    abbreviation: 'AR',
    fullTermEnglish: 'Augmented Reality',
    translationRussian: 'Дополненная реальность: Технология, накладывающая цифровые объекты на реальный мир',
    usageExample: 'The app uses AR to overlay digital information onto the real world.',
    source: 'Wired'
  }
];
