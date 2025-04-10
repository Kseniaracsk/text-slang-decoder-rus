
import { DictionaryEntry } from '@/types/dictionary.types';

// Search for entries by abbreviation
export const searchEntries = (query: string, dictionary: DictionaryEntry[]): DictionaryEntry[] => {
  if (!query || !Array.isArray(dictionary)) return [];
  
  // Filter out invalid entries first
  const validDictionary = dictionary.filter(entry => entry && typeof entry === 'object');
  
  const normalizedQuery = query.trim().toLowerCase();
  return validDictionary.filter(entry => 
    entry.abbreviation && entry.abbreviation.toLowerCase().includes(normalizedQuery)
  );
};

// Get all entries sorted alphabetically
export const getAllEntriesSorted = (dictionary: DictionaryEntry[]): DictionaryEntry[] => {
  // Safety check for array
  if (!Array.isArray(dictionary)) return [];
  
  // Filter out any null, undefined, or invalid entries first
  const validEntries = dictionary.filter(entry => 
    entry && 
    typeof entry === 'object' && 
    entry.abbreviation &&
    typeof entry.abbreviation === 'string'
  );
  
  // Sort the valid entries
  return validEntries.sort((a, b) => {
    // Additional safety check in case some entries don't have abbreviation
    const abbrevA = a?.abbreviation || '';
    const abbrevB = b?.abbreviation || '';
    return abbrevA.localeCompare(abbrevB);
  });
};

// Add a new entry to the dictionary
export const createEntry = (entry: Omit<DictionaryEntry, 'id'>): DictionaryEntry => {
  return {
    id: Date.now().toString(),
    ...entry
  };
};
