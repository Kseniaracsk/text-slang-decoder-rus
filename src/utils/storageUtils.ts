
import { DictionaryEntry } from '@/types/dictionary.types';

// Storage key for localStorage
const STORAGE_KEY = 'media-abbreviations-dictionary';

// Save data to localStorage
export const saveToStorage = <T>(data: T): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving data to localStorage:', error);
  }
};

// Load data from localStorage
export const loadFromStorage = <T>(defaultData: T): T => {
  try {
    const storedData = localStorage.getItem(STORAGE_KEY);
    if (storedData) {
      return JSON.parse(storedData);
    }
    // If no stored data, save and return default data
    saveToStorage(defaultData);
    return defaultData;
  } catch (error) {
    console.error('Error loading data from localStorage:', error);
    return defaultData;
  }
};
