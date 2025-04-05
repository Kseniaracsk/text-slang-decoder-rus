
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { DictionaryEntry } from '@/types/dictionary.types';
import EntryDetail from './EntryDetail';

interface AllEntriesListProps {
  entries: DictionaryEntry[];
}

const AllEntriesList: React.FC<AllEntriesListProps> = ({ entries }) => {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-semibold mb-2">All Abbreviations (Alphabetical)</h2>
      <p className="text-sm text-muted-foreground mb-4">Все аббревиатуры (по алфавиту)</p>
      <div className="space-y-4">
        {entries.map(entry => (
          <EntryDetail key={entry.id} entry={entry} />
        ))}
      </div>
    </div>
  );
};

export default AllEntriesList;
