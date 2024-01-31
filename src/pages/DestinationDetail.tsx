// DestinationDetail.tsx
import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonImg } from '@ionic/react';

interface DestinationDetailProps {
  match: {
    params: {
      id: string;
    };
  };
}

const DestinationDetail: React.FC<DestinationDetailProps> = ({ match }) => {
  // Assuming you have a function to fetch destination details based on the ID
  const getDestinationDetails = (id: number) => {
    // Replace this with your actual logic to fetch details
    return {
      id: id,
      name: 'Sample Destination',
      image: 'sample.jpg',
      description: 'This is a sample destination.',
      bookingInfo: 'Booking information goes here.',
      contactDetails: 'Contact details go here.',
    };
  };

  const destinationId = parseInt(match.params.id, 10);
  const destinationDetails = getDestinationDetails(destinationId);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>{destinationDetails.name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonImg src={destinationDetails.image} alt={destinationDetails.name} />
          <IonCardHeader>
            <IonCardSubtitle>Destination</IonCardSubtitle>
            <IonCardTitle>{destinationDetails.name}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>{destinationDetails.description}</p>
            <p>{destinationDetails.bookingInfo}</p>
            <p>{destinationDetails.contactDetails}</p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default DestinationDetail;
