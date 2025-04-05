
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { dictionaryService, DictionaryEntry } from '@/services/dictionaryService';
import { Search, ArrowRight } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';

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
      <div className="mb-8">
        <div className="flex items-end mb-4 gap-2">
          <div className="flex-1">
            <Label htmlFor="search-input" className="text-lg mb-2 block">Enter abbreviation:</Label>
            <p className="text-sm text-muted-foreground mb-2">Введите аббревиатуру:</p>
            <Input
              id="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="E.g.: CIA, FBI, NATO..."
              className="h-10"
            />
          </div>
          <Button 
            onClick={handleSearch} 
            className="bg-primary hover:bg-primary/90"
          >
            <Search className="mr-2 h-4 w-4" />
            Search
          </Button>
        </div>
        
        {!showAllEntries && selectedEntry && (
          <div className="mt-6">
            <Label className="text-lg mb-2 block">Definition:</Label>
            <p className="text-sm text-muted-foreground mb-2">Определение:</p>
            <Card>
              <CardContent className="p-4 space-y-3">
                <h3 className="text-xl font-semibold">{selectedEntry.abbreviation}</h3>
                <p className="font-medium">{selectedEntry.fullTermEnglish}</p>
                <p className="text-sm text-muted-foreground">{selectedEntry.translationRussian}</p>
                
                {selectedEntry.usageExample && (
                  <div className="mt-2">
                    <p className="text-sm">Example:</p>
                    <p className="text-xs text-muted-foreground">Пример использования:</p>
                    <p className="italic">"{selectedEntry.usageExample}"</p>
                    {selectedEntry.source && (
                      <p className="text-sm text-muted-foreground mt-1">Source / Источник: {selectedEntry.source}</p>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}
        
        <div className="mt-4 flex justify-center">
          <Button 
            onClick={handleShowAllEntries} 
            variant="outline"
            className="mt-4"
          >
            View Full Dictionary
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <p className="text-xs text-muted-foreground mt-1 absolute -bottom-5">Посмотреть весь словарь</p>
        </div>
      </div>
      
      {/* Display All Entries Section */}
      {showAllEntries && (
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-2">All Abbreviations (Alphabetical)</h2>
          <p className="text-sm text-muted-foreground mb-4">Все аббревиатуры (по алфавиту)</p>
          <div className="space-y-4">
            {sortedEntries.map(entry => (
              <Card key={entry.id} className="overflow-hidden">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold">{entry.abbreviation}</h3>
                  <p className="font-medium">{entry.fullTermEnglish}</p>
                  <p className="text-sm text-muted-foreground">{entry.translationRussian}</p>
                  
                  {entry.usageExample && (
                    <div className="mt-2">
                      <p className="text-sm">Example:</p>
                      <p className="text-xs text-muted-foreground">Пример использования:</p>
                      <p className="italic">"{entry.usageExample}"</p>
                      {entry.source && (
                        <p className="text-sm text-muted-foreground mt-1">Source / Источник: {entry.source}</p>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
      
      {/* Add New Entry Section */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-2">Add New Abbreviation</h2>
        <p className="text-sm text-muted-foreground mb-4">Добавить новую аббревиатуру</p>
        
        <div className="space-y-4">
          <div>
            <Label htmlFor="new-abbreviation" className="mb-1 block">New Abbreviation: <span className="text-destructive">*</span></Label>
            <p className="text-sm text-muted-foreground mb-1">Новая аббревиатура:</p>
            <Input
              id="new-abbreviation"
              value={newAbbreviation}
              onChange={(e) => setNewAbbreviation(e.target.value)}
              placeholder="E.g.: POTUS"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="new-full-term" className="mb-1 block">Full Term (English): <span className="text-destructive">*</span></Label>
            <p className="text-sm text-muted-foreground mb-1">Полный термин (англ.):</p>
            <Input
              id="new-full-term"
              value={newFullTerm}
              onChange={(e) => setNewFullTerm(e.target.value)}
              placeholder="E.g.: President of the United States"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="new-translation" className="mb-1 block">Russian Translation: <span className="text-destructive">*</span></Label>
            <p className="text-sm text-muted-foreground mb-1">Перевод на русский:</p>
            <Input
              id="new-translation"
              value={newTranslation}
              onChange={(e) => setNewTranslation(e.target.value)}
              placeholder="E.g.: Президент Соединенных Штатов"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="new-example" className="mb-1 block">Example Usage:</Label>
            <p className="text-sm text-muted-foreground mb-1">Пример использования:</p>
            <Textarea
              id="new-example"
              value={newExample}
              onChange={(e) => setNewExample(e.target.value)}
              placeholder="E.g.: POTUS will address the nation tonight regarding the economic crisis."
              className="resize-none"
            />
          </div>
          
          <div className="flex items-end gap-2">
            <div className="flex-1">
              <Label htmlFor="new-source" className="mb-1 block">Source:</Label>
              <p className="text-sm text-muted-foreground mb-1">Источник:</p>
              <Input
                id="new-source"
                value={newSource}
                onChange={(e) => setNewSource(e.target.value)}
                placeholder="E.g.: The New York Times, The Guardian..."
              />
            </div>
            <Button 
              onClick={handleAddEntry}
              className="bg-primary hover:bg-primary/90"
            >
              Add to Dictionary
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            <span className="text-destructive">*</span> - required fields / обязательные поля
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dictionary;
