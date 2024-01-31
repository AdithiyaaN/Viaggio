// SearchBar.tsx
import React, { useState } from 'react';
import { IonSearchbar } from '@ionic/react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <IonSearchbar
      value={searchQuery}
      onIonChange={(e) => setSearchQuery(e.detail.value!)}
      onIonClear={() => setSearchQuery('')}
      onIonInput={(e) => setSearchQuery(e.detail.value!)}
      onIonBlur={handleSearch}
      placeholder="Search for destinations"
    />
  );
};

export default SearchBar;
