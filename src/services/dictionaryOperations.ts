
import { DictionaryEntry } from '@/types/dictionary.types';

// Search for entries by abbreviation
export const searchEntries = (query: string, dictionary: DictionaryEntry[]): DictionaryEntry[] => {
  if (!query) return [];
  
  const normalizedQuery = query.trim().toLowerCase();
  return dictionary.filter(entry => 
    entry.abbreviation.toLowerCase().includes(normalizedQuery)
  );
};

// Get all entries sorted alphabetically
export const getAllEntriesSorted = (dictionary: DictionaryEntry[]): DictionaryEntry[] => {
  return [...dictionary].sort((a, b) => 
    a.abbreviation.localeCompare(b.abbreviation)
  );
};

// Add a new entry to the dictionary
export const createEntry = (entry: Omit<DictionaryEntry, 'id'>): DictionaryEntry => {
  return {
    id: Date.now().toString(),
    ...entry
  };
};
