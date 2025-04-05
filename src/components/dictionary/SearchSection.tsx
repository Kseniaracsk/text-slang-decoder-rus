
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Search } from 'lucide-react';
import { DictionaryEntry } from '@/types/dictionary.types';

interface SearchSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  handleSearch: () => void;
  handleShowAllEntries: () => void;
}

const SearchSection: React.FC<SearchSectionProps> = ({
  searchQuery,
  setSearchQuery,
  handleSearch,
  handleShowAllEntries
}) => {
  return (
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
      
      <div className="mt-4 flex justify-center">
        <Button 
          onClick={handleShowAllEntries} 
          variant="outline"
          className="mt-4"
        >
          View Full Dictionary
          <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </Button>
        <p className="text-xs text-muted-foreground mt-1 absolute -bottom-5">Посмотреть весь словарь</p>
      </div>
    </div>
  );
};

export default SearchSection;
