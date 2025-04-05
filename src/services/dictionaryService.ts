
// Define types for our dictionary entries
export interface DictionaryEntry {
  id: string;
  abbreviation: string;
  fullTermEnglish: string;
  translationRussian: string;
  usageExample?: string;
  source?: string;
}

// Initial dictionary data
const initialDictionary: DictionaryEntry[] = [
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
  }
];

// Storage key for localStorage
const STORAGE_KEY = 'media-abbreviations-dictionary';

// Load dictionary from localStorage or use initial data
const loadDictionary = (): DictionaryEntry[] => {
  try {
    const storedData = localStorage.getItem(STORAGE_KEY);
    if (storedData) {
      return JSON.parse(storedData);
    }
    // If no stored data, save and return initial data
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialDictionary));
    return initialDictionary;
  } catch (error) {
    console.error('Error loading dictionary:', error);
    return initialDictionary;
  }
};

// Save dictionary to localStorage
const saveDictionary = (dictionary: DictionaryEntry[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dictionary));
  } catch (error) {
    console.error('Error saving dictionary:', error);
  }
};

// Search for entries by abbreviation
const searchEntries = (query: string, dictionary: DictionaryEntry[]): DictionaryEntry[] => {
  if (!query) return [];
  
  const normalizedQuery = query.trim().toLowerCase();
  return dictionary.filter(entry => 
    entry.abbreviation.toLowerCase().includes(normalizedQuery)
  );
};

// Get all entries sorted alphabetically
const getAllEntriesSorted = (dictionary: DictionaryEntry[]): DictionaryEntry[] => {
  return [...dictionary].sort((a, b) => 
    a.abbreviation.localeCompare(b.abbreviation)
  );
};

// Add a new entry to the dictionary
const addEntry = (entry: Omit<DictionaryEntry, 'id'>, dictionary: DictionaryEntry[]): DictionaryEntry[] => {
  const newEntry: DictionaryEntry = {
    id: Date.now().toString(),
    ...entry
  };
  
  const updatedDictionary = [...dictionary, newEntry];
  saveDictionary(updatedDictionary);
  return updatedDictionary;
};

export const dictionaryService = {
  loadDictionary,
  searchEntries,
  addEntry,
  getAllEntriesSorted
};
