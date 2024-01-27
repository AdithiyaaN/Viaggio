import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { IonInput, IonItem, IonList } from '@ionic/react';
import {IonButton} from '@ionic/react'
import beach from './beach.png'
import './Login.css'

const Login: React.FC = () => {
    return (
        <IonContent className='Loginpage'>
            <div className='flex-center'>
                
                <IonCard>
                    <img src={beach} />
                    <IonCardContent>

                        <IonItem>
                            <IonInput type="email" label="Email" labelPlacement="floating"></IonInput>
                        </IonItem>

                        <IonItem>
                            <IonInput type="password" label="Password" labelPlacement="floating"></IonInput>
                        </IonItem>

                        <IonButton className='flex-center' fill="clear" size='small'>Forgot password</IonButton>
                        <IonButton className='flex-center' color='secondary' size='large'>login</IonButton>
                        <IonButton className='flex-center' color='warning' fill="default" size='large'>Sign up</IonButton>


                    </IonCardContent>
                </IonCard>
            </div>
        </IonContent>
    );
  };
  
  export default Login;