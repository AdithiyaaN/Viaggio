import { IonContent, IonHeader, IonPage, IonRadioGroup, IonTitle, IonToolbar ,IonRadio} from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { IonInput, IonItem, IonList } from '@ionic/react';
import {IonButton} from '@ionic/react'
import './Signup.css'

const Signup : React.FC = () =>{
    return(
        <IonContent className="signup-page">

        
            
        <IonCard className='flex-center'>
            <div color=''>
                    <IonCardContent color='warning'>

                    <IonCardTitle>User Details</IonCardTitle>

                        
                            <IonInput type="email" label="Email or Phone" labelPlacement="floating"></IonInput>
                        <br />
                            <IonInput type="password" label="Password" labelPlacement="floating"></IonInput>
                        <br />
                            <IonInput type="password" label="Confirm Password" labelPlacement="floating"></IonInput>
                        <br />
                        
                        <IonRadioGroup value="end" allowEmptySelection={true}>
                            <IonRadio value="end" labelPlacement="end" >Is this a Business account?</IonRadio>
                        </IonRadioGroup>

                        <IonButton className='flex-center' color='secondary'>Sign up</IonButton>


                    </IonCardContent>
                    </div>
                </IonCard>
                
            

        </IonContent>
    );
}

export default Signup;