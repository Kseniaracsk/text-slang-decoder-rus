
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
          <h2 className="text-xl font-semibold mb-1">All Abbreviations (Alphabetical)</h2>
          <p className="text-sm text-muted-foreground">Все аббревиатуры (по алфавиту)</p>
        </div>
        <Button variant="outline" size="sm" onClick={onClose} className="flex items-center gap-1">
          <X className="h-4 w-4" />
          Close
        </Button>
      </div>
      <div className="space-y-4">
        {entries.map(entry => (
          <EntryDetail key={entry.id} entry={entry} />
        ))}
      </div>
    </div>
  );
};

export default AllEntriesList;
