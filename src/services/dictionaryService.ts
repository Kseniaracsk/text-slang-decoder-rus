
import { DictionaryEntry } from '@/types/dictionary.types';
import { initialDictionary } from '@/data/initialDictionary';
import { loadFromStorage, saveToStorage } from '@/utils/storageUtils';
import { searchEntries, getAllEntriesSorted, createEntry } from '@/services/dictionaryOperations';

// Load dictionary from localStorage or use initial data
const loadDictionary = (): DictionaryEntry[] => {
  return loadFromStorage<DictionaryEntry[]>(initialDictionary);
};

// Add a new entry to the dictionary
const addEntry = (entry: Omit<DictionaryEntry, 'id'>, dictionary: DictionaryEntry[]): DictionaryEntry[] => {
  const newEntry = createEntry(entry);
  const updatedDictionary = [...dictionary, newEntry];
  saveToStorage(updatedDictionary);
  return updatedDictionary;
};

// Using 'export type' to properly export the type when isolatedModules is enabled
export type { DictionaryEntry };

export const dictionaryService = {
  loadDictionary,
  searchEntries,
  addEntry,
  getAllEntriesSorted
};
