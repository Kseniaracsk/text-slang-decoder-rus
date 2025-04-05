
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { DictionaryEntry } from '@/types/dictionary.types';

interface EntryDetailProps {
  entry: DictionaryEntry;
}

const EntryDetail: React.FC<EntryDetailProps> = ({ entry }) => {
  return (
    <Card>
      <CardContent className="p-4 space-y-3">
        <h3 className="text-xl font-semibold">{entry.abbreviation}</h3>
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
  );
};

export default EntryDetail;
