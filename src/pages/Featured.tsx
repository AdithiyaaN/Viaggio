import React, { useState, useEffect } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonImg, IonButton, IonButtons, IonIcon, IonMenu, IonMenuButton } from '@ionic/react';
import { informationCircleOutline } from 'ionicons/icons';
import Destination from './Destination';

interface FeaturedDestination {
  id: number;
  name: string;
  image: string; // Assuming File is the correct type for your multipart image file
  description: string;
}

const Featured: React.FC = () => {
  const [featuredDestinations, setFeaturedDestinations] = useState<FeaturedDestination[]>([]);

  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/place/getAll'); // Replace with your actual endpoint
      const data = await response.json();
      setFeaturedDestinations(data);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">

        <IonCardContent>Home</IonCardContent>

          <IonCard>
            <IonCardContent>Search</IonCardContent>
          </IonCard>

          <IonCard>
            <IonCardContent>Featured</IonCardContent>
          </IonCard>
          
          <IonCard>
            <IonCardContent>Personal Account</IonCardContent>
          </IonCard>

          <IonCard>
            <IonCardContent>Settings</IonCardContent>
          </IonCard>

        </IonContent>
      </IonMenu>
      <IonPage id="main-conten">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton>          
              </IonMenuButton>
            </IonButtons>
            <IonTitle className='Home-title'>Viaggio</IonTitle>
            </IonToolbar>
            </IonHeader>



      <IonContent>
        {featuredDestinations.map((destination) => (
          <IonCard key={destination.id}>
            <img src= {`data:image/png;base64,${destination.image}`}/>
           
            <IonCardHeader>
            </IonCardHeader>
            <IonCardContent>
            {destination.description}
            </IonCardContent>
          </IonCard>
        ))}
      </IonContent>
      </IonPage>
      </>
  );
};

export default Featured;

