
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { dictionaryService } from '@/services/dictionaryService';
import { DictionaryEntry } from '@/types/dictionary.types';

export const useDictionary = () => {
  const [dictionary, setDictionary] = useState<DictionaryEntry[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<DictionaryEntry[]>([]);
  const [selectedEntry, setSelectedEntry] = useState<DictionaryEntry | null>(null);
  const [showAllEntries, setShowAllEntries] = useState(false);
  
  const [newAbbreviation, setNewAbbreviation] = useState('');
  const [newFullTerm, setNewFullTerm] = useState('');
  const [newTranslation, setNewTranslation] = useState('');
  const [newExample, setNewExample] = useState('');
  const [newSource, setNewSource] = useState('');
  
  const { toast } = useToast();

  // Load dictionary on hook initialization
  useEffect(() => {
    try {
      let loadedDictionary = dictionaryService.loadDictionary();
      
      // Ensure we have a valid array
      if (!Array.isArray(loadedDictionary)) {
        console.error("Loaded dictionary is not an array:", loadedDictionary);
        loadedDictionary = [];
      }
      
      // Filter out any invalid entries
      const validDictionary = loadedDictionary.filter(entry => 
        entry && typeof entry === 'object' && entry.abbreviation
      );
      
      if (validDictionary.length < loadedDictionary.length) {
        console.warn(`Filtered out ${loadedDictionary.length - validDictionary.length} invalid entries`);
      }
      
      setDictionary(validDictionary);
    } catch (error) {
      console.error("Error loading dictionary:", error);
      setDictionary([]);
      toast({
        title: "Error Loading Dictionary",
        description: "There was a problem loading the dictionary data. Please try again.",
        variant: "destructive",
      });
    }
  }, [toast]);

  // Handle search functionality
  const handleSearch = () => {
    if (!searchQuery.trim()) {
      toast({
        title: "Empty Search Query",
        description: "Please enter an abbreviation to search",
        variant: "destructive",
      });
      return;
    }

    const results = dictionaryService.searchEntries(searchQuery, dictionary);
    setSearchResults(results);
    
    if (results.length > 0) {
      setSelectedEntry(results[0]);
      setShowAllEntries(false);
    } else {
      setSelectedEntry(null);
      toast({
        title: "No Results Found",
        description: `Abbreviation "${searchQuery}" not found in the dictionary`,
        variant: "destructive",
      });
    }
  };

  // Handle adding a new entry
  const handleAddEntry = () => {
    if (!newAbbreviation || !newFullTerm || !newTranslation) {
      toast({
        title: "Incomplete Data",
        description: "Please fill in all required fields to add a new abbreviation",
        variant: "destructive",
      });
      return;
    }

    // Check if abbreviation already exists
    const exists = dictionary.some(
      entry => entry.abbreviation.toLowerCase() === newAbbreviation.toLowerCase()
    );

    if (exists) {
      toast({
        title: "Abbreviation Already Exists",
        description: `"${newAbbreviation}" is already in the dictionary`,
        variant: "destructive",
      });
      return;
    }

    // Add the new entry
    const updatedDictionary = dictionaryService.addEntry(
      {
        abbreviation: newAbbreviation.toUpperCase(),
        fullTermEnglish: newFullTerm,
        translationRussian: newTranslation,
        usageExample: newExample || undefined,
        source: newSource || undefined
      },
      dictionary
    );

    setDictionary(updatedDictionary);
    
    // Reset form fields
    setNewAbbreviation('');
    setNewFullTerm('');
    setNewTranslation('');
    setNewExample('');
    setNewSource('');
    
    toast({
      title: "Successfully Added",
      description: `Abbreviation "${newAbbreviation.toUpperCase()}" has been added to the dictionary`,
    });
  };

  // Toggle to show all entries
  const handleShowAllEntries = () => {
    setShowAllEntries(true);
    setSelectedEntry(null);
  };

  // Close all entries view
  const handleCloseAllEntries = () => {
    setShowAllEntries(false);
  };

  // Get all entries sorted alphabetically, with additional safety checks
  const sortedEntries = (() => {
    if (!dictionary || !Array.isArray(dictionary) || dictionary.length === 0) {
      return [];
    }
    try {
      return dictionaryService.getAllEntriesSorted(dictionary);
    } catch (error) {
      console.error("Error sorting entries:", error);
      return [];
    }
  })();

  return {
    dictionary,
    searchQuery,
    setSearchQuery,
    searchResults,
    selectedEntry,
    showAllEntries,
    setShowAllEntries,
    newAbbreviation,
    setNewAbbreviation,
    newFullTerm,
    setNewFullTerm,
    newTranslation,
    setNewTranslation,
    newExample,
    setNewExample,
    newSource,
    setNewSource,
    handleSearch,
    handleAddEntry,
    handleShowAllEntries,
    handleCloseAllEntries,
    sortedEntries
  };
};
