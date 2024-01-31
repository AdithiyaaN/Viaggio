// ResultsList.tsx
import React from 'react';
import { IonList } from '@ionic/react';
import Destination from './Destination';

interface DestinationProps {
    id: number;
    name: string;
    image: string;
    description: string;
    bookingInfo: string;
    contactDetails: string;
  }

interface ResultsListProps {
  results: DestinationProps[];
}

const ResultsList: React.FC<ResultsListProps> = ({ results }) => {
  return (
    <IonList>
      {results.map((result) => (
        <Destination key={result.id} {...result} />
      ))}
    </IonList>
  );
};

export default ResultsList;
