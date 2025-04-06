
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DictionaryEntry } from '@/types/dictionary.types';
import EntryDetail from './EntryDetail';

interface AllEntriesListProps {
  entries: DictionaryEntry[];
  onClose: () => void;
}

const AllEntriesList: React.FC<AllEntriesListProps> = ({ entries, onClose }) => {
  return (
    <div className="mb-10">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-semibold mb-1">Все аббревиатуры (по алфавиту)</h2>
          <p className="text-sm text-muted-foreground">All Abbreviations (Alphabetical)</p>
        </div>
        <Button variant="outline" size="sm" onClick={onClose} className="flex items-center gap-1">
          <X className="h-4 w-4" />
          Закрыть
        </Button>
      </div>
      
      <div className="space-y-4">
        {entries.map(entry => (
          <EntryDetail key={entry.id} entry={entry} />
        ))}
      </div>
      
      <div className="mt-6 flex justify-center">
        <Button onClick={onClose} variant="outline" size="lg" className="flex items-center gap-1 w-full md:w-auto">
          <X className="h-4 w-4" />
          Закрыть полный список словаря
        </Button>
      </div>
    </div>
  );
};

export default AllEntriesList;
