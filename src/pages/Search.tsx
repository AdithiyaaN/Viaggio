// SearchPage.tsx
import React, { useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton } from '@ionic/react';
import SearchBar from './Searchingbar';
import ResultsList from './ResultsList';
import Filter from './Filter';
import beach from './beach.png'
import mountain from './mountain.png'


interface SearchResult {
  id: number;
  name: string;
  image: string;
  description: string;
  bookingInfo: string;
  contactDetails: string;
}

const SearchPage: React.FC = () => {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const handleSearch = (query: string) => {
    // Perform search logic and update searchResults state
    // You can replace this with your actual search implementation
    const newResults: SearchResult[] = [
      { id: 1, name: 'Beach Paradise', image: beach, description: 'Explore beautiful beaches.', bookingInfo:'',contactDetails:'' },
      { id: 2, name: 'Mountain Retreat', image: mountain, description: 'Discover serene mountain landscapes.',bookingInfo:'',contactDetails:'' },
      // Add more search results as needed
    ];
    setSearchResults(newResults);
  };

  const handleFilterChange = (filter: string) => {
    // Update activeFilter state and reapply filters
    setActiveFilter(filter);
    // You can perform additional logic based on the selected filter
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Travel Search</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <SearchBar onSearch={handleSearch} />
        <Filter onFilterChange={handleFilterChange} />
        <ResultsList results={searchResults} />
      </IonContent>
    </IonPage>
  );
};

export default SearchPage;
