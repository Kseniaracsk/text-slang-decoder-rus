
import React, { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { dictionaryService } from '@/services/dictionaryService';
import { DictionaryEntry } from '@/types/dictionary.types';
import SearchSection from './dictionary/SearchSection';
import EntryDetail from './dictionary/EntryDetail';
import AllEntriesList from './dictionary/AllEntriesList';
import AddEntryForm from './dictionary/AddEntryForm';
import { Label } from '@/components/ui/label';

const Dictionary: React.FC = () => {
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

  // Load dictionary on component mount
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

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">English Dictionary of Abbreviations</h1>
      <p className="text-sm text-muted-foreground text-center mb-6">Словарь англоязычных аббревиатур СМИ</p>
      
      {/* Search Section */}
      <SearchSection 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
        handleShowAllEntries={handleShowAllEntries}
      />
      
      {!showAllEntries && selectedEntry && (
        <div className="mt-6">
          <Label className="text-lg mb-2 block">Definition:</Label>
          <p className="text-sm text-muted-foreground mb-2">Определение:</p>
          <EntryDetail entry={selectedEntry} />
        </div>
      )}
      
      {/* Display All Entries Section */}
      {showAllEntries && <AllEntriesList entries={sortedEntries} />}
      
      {/* Add New Entry Section */}
      <AddEntryForm 
        newAbbreviation={newAbbreviation}
        setNewAbbreviation={setNewAbbreviation}
        newFullTerm={newFullTerm}
        setNewFullTerm={setNewFullTerm}
        newTranslation={newTranslation}
        setNewTranslation={setNewTranslation}
        newExample={newExample}
        setNewExample={setNewExample}
        newSource={newSource}
        setNewSource={setNewSource}
        handleAddEntry={handleAddEntry}
      />
    </div>
  );
};

export default Dictionary;
