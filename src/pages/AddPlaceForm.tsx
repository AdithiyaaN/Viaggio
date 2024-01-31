// AddPlaceForm.tsx
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { IonLabel, IonInput, IonTextarea, IonButton, IonToast, IonHeader, IonToolbar, IonTitle } from '@ionic/react';

type AddPlaceFormProps = {
  onSubmitSuccess: () => void;
  onSubmitError: (errorMessage: string) => void;
};

const AddPlaceForm: React.FC<AddPlaceFormProps> = ({ onSubmitSuccess, onSubmitError }) => {
  const [placeName, setPlaceName] = useState<string | undefined>('');
  const [description, setDescription] = useState<string | undefined>('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handlePlaceNameChange = (e: CustomEvent) => {
    const value = (e.target as HTMLInputElement | null)?.value;
    setPlaceName(value || undefined);
  };

  const handleDescriptionChange = (e: CustomEvent) => {
    const value = (e.target as HTMLInputElement | null)?.value;
    setDescription(value || undefined);
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files && files.length > 0) {
      setImageFile(files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('placeName', placeName || '');
    formData.append('description', description || '');

    if (imageFile !== null) {
      formData.append('imageFile', imageFile);
    }

    try {
      const response = await fetch('http://localhost:8080/place/submit', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setShowToast(true);
        setToastMessage('Place information submitted successfully');
        onSubmitSuccess();
      } else {
        throw new Error('Failed to submit place information');
      }
    } catch (error) {
      setShowToast(true);
      setToastMessage('Error submitting place information');
      // onSubmitError(error.message);
    }
  };

  const formStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    height: '100%',
    marginTop: '7vh'
  };

  const itemStyle: React.CSSProperties = {
    marginBottom: '5vh',
  };

  const buttonStyle: React.CSSProperties = {
    marginTop: '20vh',
  };

  return (
    <>
      <IonHeader >
        <IonToolbar >
        <h1 className='flex-center' style={{ fontFamily: 'Arial, sans-serif', fontSize: '3vh', textAlign: 'center' }}>
        List a New Place
        </h1>

        </IonToolbar>
      </IonHeader>

      <form style={formStyle} onSubmit={handleSubmit}>
        <IonLabel style={itemStyle}>
          Place Name
          <IonInput type="text" value={placeName || ''} onIonChange={handlePlaceNameChange}></IonInput>
        </IonLabel>

        <IonLabel style={itemStyle}>
          Description
          <IonTextarea value={description || ''} onIonChange={handleDescriptionChange}></IonTextarea>
        </IonLabel>

        <IonLabel style={itemStyle}>
          Image
          <input style={itemStyle} type="file" accept="image/*" onChange={handleImageChange}></input>
        </IonLabel>

        <IonButton expand="full" type="submit" style={buttonStyle}>
          Submit
        </IonButton>
      </form>

      <IonToast
        isOpen={showToast}
        onDidDismiss={() => setShowToast(false)}
        message={toastMessage}
        duration={2000}
      />
    </>
  );
};

export default AddPlaceForm;
