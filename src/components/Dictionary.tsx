
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { dictionaryService, DictionaryEntry } from '@/services/dictionaryService';
import { Search } from 'lucide-react';

const Dictionary: React.FC = () => {
  const [dictionary, setDictionary] = useState<DictionaryEntry[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<DictionaryEntry[]>([]);
  const [selectedEntry, setSelectedEntry] = useState<DictionaryEntry | null>(null);
  
  const [newAbbreviation, setNewAbbreviation] = useState('');
  const [newFullTerm, setNewFullTerm] = useState('');
  const [newTranslation, setNewTranslation] = useState('');
  
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
        title: "Поисковый запрос пуст",
        description: "Пожалуйста, введите аббревиатуру для поиска",
        variant: "destructive",
      });
      return;
    }

    const results = dictionaryService.searchEntries(searchQuery, dictionary);
    setSearchResults(results);
    
    if (results.length > 0) {
      setSelectedEntry(results[0]);
    } else {
      setSelectedEntry(null);
      toast({
        title: "Ничего не найдено",
        description: `Аббревиатура "${searchQuery}" не найдена в словаре`,
        variant: "destructive",
      });
    }
  };

  // Handle adding a new entry
  const handleAddEntry = () => {
    if (!newAbbreviation || !newFullTerm || !newTranslation) {
      toast({
        title: "Неполные данные",
        description: "Пожалуйста, заполните все поля для добавления новой аббревиатуры",
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
        title: "Аббревиатура уже существует",
        description: `"${newAbbreviation}" уже есть в словаре`,
        variant: "destructive",
      });
      return;
    }

    // Add the new entry
    const updatedDictionary = dictionaryService.addEntry(
      {
        abbreviation: newAbbreviation.toUpperCase(),
        fullTermEnglish: newFullTerm,
        translationRussian: newTranslation
      },
      dictionary
    );

    setDictionary(updatedDictionary);
    
    // Reset form fields
    setNewAbbreviation('');
    setNewFullTerm('');
    setNewTranslation('');
    
    toast({
      title: "Добавлено успешно",
      description: `Аббревиатура "${newAbbreviation.toUpperCase()}" добавлена в словарь`,
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Словарь англоязычных аббревиатур СМИ</h1>
      
      {/* Search Section */}
      <div className="mb-8">
        <div className="flex items-end mb-4 gap-2">
          <div className="flex-1">
            <Label htmlFor="search-input" className="text-lg mb-2 block">Введите аббревиатуру:</Label>
            <Input
              id="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="Например: CIA, FBI, NATO..."
              className="h-10"
            />
          </div>
          <Button 
            onClick={handleSearch} 
            className="bg-primary hover:bg-primary/90"
          >
            <Search className="mr-2 h-4 w-4" />
            Поиск
          </Button>
        </div>
        
        <div className="mt-6">
          <Label className="text-lg mb-2 block">Определение:</Label>
          <Card className="min-h-[120px]">
            <CardContent className="p-4">
              {selectedEntry ? (
                <div>
                  <p className="font-medium">{selectedEntry.fullTermEnglish} – {selectedEntry.translationRussian}</p>
                </div>
              ) : (
                <p className="text-muted-foreground italic">Результаты поиска будут отображены здесь</p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Add New Entry Section */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Добавить новую аббревиатуру</h2>
        
        <div className="space-y-4">
          <div>
            <Label htmlFor="new-abbreviation" className="mb-2 block">Новая аббревиатура:</Label>
            <Input
              id="new-abbreviation"
              value={newAbbreviation}
              onChange={(e) => setNewAbbreviation(e.target.value)}
              placeholder="Например: POTUS"
            />
          </div>
          
          <div>
            <Label htmlFor="new-full-term" className="mb-2 block">Полный термин (англ.):</Label>
            <Input
              id="new-full-term"
              value={newFullTerm}
              onChange={(e) => setNewFullTerm(e.target.value)}
              placeholder="Например: President of the United States"
            />
          </div>
          
          <div className="flex items-end gap-2">
            <div className="flex-1">
              <Label htmlFor="new-translation" className="mb-2 block">Перевод на русский:</Label>
              <Input
                id="new-translation"
                value={newTranslation}
                onChange={(e) => setNewTranslation(e.target.value)}
                placeholder="Например: Президент Соединенных Штатов"
              />
            </div>
            <Button 
              onClick={handleAddEntry}
              className="bg-primary hover:bg-primary/90"
            >
              Добавить в словарь
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dictionary;
