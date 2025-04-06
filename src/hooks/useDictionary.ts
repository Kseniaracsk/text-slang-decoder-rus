
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
    const loadedDictionary = dictionaryService.loadDictionary();
    setDictionary(loadedDictionary);
  }, []);

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

  // Get all entries sorted alphabetically
  const sortedEntries = dictionaryService.getAllEntriesSorted(dictionary);

  return {
    dictionary,
    searchQuery,
    setSearchQuery,
    searchResults,
    selectedEntry,
    showAllEntries,
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
    sortedEntries
  };
};
