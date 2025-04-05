
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface AddEntryFormProps {
  newAbbreviation: string;
  setNewAbbreviation: (value: string) => void;
  newFullTerm: string;
  setNewFullTerm: (value: string) => void;
  newTranslation: string;
  setNewTranslation: (value: string) => void;
  newExample: string;
  setNewExample: (value: string) => void;
  newSource: string;
  setNewSource: (value: string) => void;
  handleAddEntry: () => void;
}

const AddEntryForm: React.FC<AddEntryFormProps> = ({
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
  handleAddEntry
}) => {
  return (
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
  );
};

export default AddEntryForm;
