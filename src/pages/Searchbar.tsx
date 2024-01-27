import React from 'react';
import { IonHeader, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';

function Searchbar() {
  return (
    <IonHeader>
      <IonToolbar>
        <IonSearchbar></IonSearchbar>
      </IonToolbar>
    </IonHeader>
  );
}
export default Searchbar;