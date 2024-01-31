import React, { useState } from 'react';
import beach from './beach.png'
import { useHistory } from 'react-router-dom';

import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonPopover,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonSegment,
  IonSegmentButton,
  IonAvatar,
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/react';

const AccountPage: React.FC = () => {
  const history = useHistory();
  const [showPopover, setShowPopover] = useState(false);
  const [selectedSegment, setSelectedSegment] = useState<string | undefined | number>('visited');
  
  const [review, setReview] = useState<string>('');
  // Placeholder user data
  const userProfile = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phoneNumber: '123-456-7890',
    profilePicture: 'https://placekitten.com/200/200', // Replace with actual image URL
    accountType: 'Personal Account'
  };

  const handleSegmentChange = (value: string|undefined | number) => {
    setSelectedSegment(value);
  };

  const handleEditProfilePicture = (option: string) => {
    // Implement logic to handle image selection based on the chosen option
    console.log({option});
    setShowPopover(false);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonTitle className='Home-title'>Viaggio</IonTitle>
        </IonToolbar>
        <IonButtons slot="start">
            <IonButton onClick={() => history.push('/home')}>Back</IonButton>
          </IonButtons>
      </IonHeader>

      <IonContent>
        <IonPopover
          isOpen={showPopover}
          onDidDismiss={() => setShowPopover(false)}
        >
          <IonList>
            <IonItem button onClick={() => handleEditProfilePicture('take-picture')}>
              Take Picture
            </IonItem>
            <IonItem button onClick={() => handleEditProfilePicture('select-from-gallery')}>
              Select from Gallery
            </IonItem>
            <IonItem button onClick={() => handleEditProfilePicture('remove')}>
              Remove
            </IonItem>
          </IonList>
        </IonPopover>

        <IonGrid>
          <IonRow>
            <IonCol size="12">
              <IonAvatar className="ion-margin-top" style={{ width: '25vh', margin: 'auto' , height: '25vh'}}>
                <IonImg src={userProfile.profilePicture} alt="Profile" />
              </IonAvatar>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonItem>
          <IonLabel>
            <h2>{userProfile.name}</h2>
            <p>{userProfile.email}</p>
            <p>{userProfile.phoneNumber}</p>
          </IonLabel>
          <IonButton color='dark' slot="end" onClick={() => setShowPopover(true)}>
            Edit
          </IonButton>
        </IonItem>

        <IonItem>
          <IonLabel>Name</IonLabel>
          <IonInput value={userProfile.name} readonly={true} />
          <IonButton slot="end">Edit</IonButton>
        </IonItem>

        <IonItem>
          <IonLabel>Email</IonLabel>
          <IonInput value={userProfile.email} readonly={true} />
          <IonButton slot="end">Edit</IonButton>
        </IonItem>

        <IonItem>
          <IonLabel>Phone Number</IonLabel>
          <IonInput value={userProfile.phoneNumber} readonly={true} />
          <IonButton slot="end">Edit</IonButton>
        </IonItem>

        <IonItem>
          <IonLabel>Account Type</IonLabel>
          <IonInput value={userProfile.accountType} readonly={true} />
        </IonItem>

          <IonItem>
          <IonSegment value={selectedSegment} onIonChange={(e) => handleSegmentChange(e.detail.value)}>
            <IonSegmentButton value="visited">
              <IonLabel>Visited</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="wishlist">
              <IonLabel>Wishlist</IonLabel>
            </IonSegmentButton>
          </IonSegment>
          {selectedSegment === 'visited' && (
        <IonList>
          <IonItem>
          <img src={beach} />
            <IonLabel>Island Explorer</IonLabel>
          </IonItem>
          <IonItem>
          <img src={beach} />

            <IonLabel>Woodland Cabin</IonLabel>
          </IonItem>
          <IonItem>
          <img src={beach} />

            <IonLabel>Island Paradise</IonLabel>
          </IonItem>
        </IonList>
      )}

      {selectedSegment === 'wishlist' && (
        <IonList>
          <IonItem>
            <img src={beach} />
            <IonLabel>Mountain Wellness</IonLabel>
          </IonItem>
          <IonItem>
          <img src={beach} />
            <IonLabel>Glacier Lake Diving</IonLabel>
          </IonItem>
          <IonItem>
          <img src={beach} />
            <IonLabel>Island Paradise Escape</IonLabel>
          </IonItem>
        </IonList>)}
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default AccountPage;