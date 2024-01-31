// Destination.tsx
import React from 'react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonThumbnail } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import DestinationDetail from './DestinationDetail';

interface DestinationProps {
    id: number;
    name: string;
    image: string;
    description: string;
}

const Destination: React.FC<DestinationProps> = ({ id, name, image, description}) => {
  const history = useHistory();

  const navigateToDetail = () => {
    history.push(`/destination/${id}`);
  };

  return (
    <IonCard onClick={navigateToDetail}>
      <IonThumbnail>
        <img src={image} alt={name} />
      </IonThumbnail>
      <IonCardHeader>
        <IonCardSubtitle>Destination</IonCardSubtitle>
        <IonCardTitle>{name}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <p>{description}</p>
        {/* Additional details or actions can be added here */}
      </IonCardContent>
    </IonCard>
  );
};

export default Destination;
