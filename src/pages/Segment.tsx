import React, { useState } from 'react';
import { IonLabel, IonSegment, IonSegmentButton, IonList, IonItem } from '@ionic/react';
import beach from './beach.png'
const Example: React.FC = () => {
  const [selectedSegment, setSelectedSegment] = useState<string | undefined |number>('default');

  const handleSegmentChange = (value: string | undefined |number) => {
    setSelectedSegment(value);
  };

  return (
    <>
      <IonSegment value={selectedSegment} onIonChange={(e) => handleSegmentChange(e.detail.value)}>
        <IonSegmentButton value="default">
          <IonLabel>7 Days</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="segment">
          <IonLabel>Weekend</IonLabel>
        </IonSegmentButton>
      </IonSegment>

      {selectedSegment === 'default' && (
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

      {selectedSegment === 'segment' && (
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
        </IonList>
      )}
    </>
  );
};

export default Example;