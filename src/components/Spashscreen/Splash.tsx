import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonItem, IonLabel, IonSpinner } from '@ionic/react';
import ExploreContainer from '../ExploreContainer';
import './Splash.css';
import beach from './beach.png';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="C">
            <div className="Viaggio">Viaggio
            <h1 className="YourNextAdventureAwaits">Your next adventure awaits</h1>
            <IonSpinner name='dots'></IonSpinner>   
            </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
