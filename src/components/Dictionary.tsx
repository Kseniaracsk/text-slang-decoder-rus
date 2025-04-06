
import React from 'react';
import { Label } from '@/components/ui/label';
import SearchSection from './dictionary/SearchSection';
import EntryDetail from './dictionary/EntryDetail';
import AllEntriesList from './dictionary/AllEntriesList';
import AddEntryForm from './dictionary/AddEntryForm';
import { useDictionary } from '@/hooks/useDictionary';

const Dictionary: React.FC = () => {
  const {
    searchQuery,
    setSearchQuery,
    selectedEntry,
    showAllEntries,
    setShowAllEntries,
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
    handleCloseAllEntries,
    sortedEntries
  } = useDictionary();

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
      {showAllEntries && <AllEntriesList entries={sortedEntries} onClose={handleCloseAllEntries} />}
      
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
