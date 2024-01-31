import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardSubtitle, IonCardHeader } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import {IonButton, IonIcon, IonPopover, IonRouterLink } from '@ionic/react';
import { informationCircleOutline } from 'ionicons/icons';
import './Home.css';
import Slideshow from './Slideshow'
import Searchbar from './Searchbar';
import Package from './Package';
import Example from './Segment';
import { useHistory } from 'react-router-dom';

interface Location {
latitude: number;
longitude: number;
}


function Home() {

  const history = useHistory();
  const handleCardClick = () => {
    // Navigate to the Search page
    history.push('/search');
  };

  const handlePage1Click = () => {
    // Navigate to Page 1
    history.push('/featured');
  };

  const handlePage2Click = () => {
    // Navigate to Page 2
    history.push('/personalaccount');
  };

  const [location, setLocation] = useState<Location | null>(null);
  const [locationName, setLocationName] = useState<string | null>(null);
  const [showPopover, setShowPopover] = useState<boolean>(false);

  useEffect(() => {
    // Use Geolocation API to get user's location
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setLocation({ latitude, longitude });

fetch(
  'https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}'
)
  .then((response) => response.json())
  .then((data) => {
    const locationName = data.display_name || 'Unknown Location';
    setLocationName(locationName);
  })
  .catch((error) => {
    console.error('Error getting location name:', error);
  });
},
(error) => {
console.error('Error getting location:', error);
}
);
}
}, []); // Empty dependency array to run the effect only once

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
            <IonCardContent onClick={handleCardClick}>Search</IonCardContent>
          </IonCard>

          <IonCard>
            <IonCardContent onClick={handlePage1Click}>Featured</IonCardContent>
          </IonCard>
          
          <IonCard>
            <IonCardContent onClick={handlePage2Click}>Personal Account</IonCardContent>
          </IonCard>

          <IonCard>
            <IonCardContent>Settings</IonCardContent>
          </IonCard>

        </IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>


            <IonTitle className='Home-title'>Viaggio</IonTitle>
          {location && (
            <IonButton slot="end" className="location-button" onClick={() => setShowPopover(true)}>
              <IonIcon icon={informationCircleOutline} />
            </IonButton>
          )}
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <Slideshow/>
      <Searchbar />

      <Package />

      <Example/>
        <IonPopover
          isOpen={showPopover}
          onDidDismiss={() => setShowPopover(false)}
        >
          <IonTitle>Location Information</IonTitle>
          <IonContent>
            <p>Latitude: {location?.latitude}</p>
            <p>Longitude: {location?.longitude}</p>
            <p>Location Name: {locationName || 'Loading...'}</p>
          </IonContent>
        </IonPopover> 
        </IonContent>
      </IonPage>
    </>

  );
}
export default Home;