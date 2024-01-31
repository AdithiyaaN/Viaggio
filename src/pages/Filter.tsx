// Filter.tsx
import React, { useState } from 'react';
import { IonSelect, IonSelectOption } from '@ionic/react';

interface FilterProps {
  onFilterChange: (filter: string) => void;
}

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const handleFilterChange = () => {
    onFilterChange(selectedFilter);
  };

  return (
    <IonSelect
      value={selectedFilter}
      placeholder="Select filter"
      onIonChange={(e) => setSelectedFilter(e.detail.value)}
      onIonBlur={handleFilterChange}
    >
      <IonSelectOption value="all">All</IonSelectOption>
      <IonSelectOption value="beach">Beach</IonSelectOption>
      <IonSelectOption value="mountain">Mountain</IonSelectOption>
      {/* Add more filter options as needed */}
    </IonSelect>
  );
};

export default Filter;
