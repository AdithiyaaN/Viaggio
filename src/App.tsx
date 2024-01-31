import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Login from './pages/Login'
import Signup from './pages/Signup'
import Splash from './components/Spashscreen/Splash';
import PersonalAccount from './pages/PersonalAccount';
import FeaturedPage from './pages/Featured';
import Search from './pages/Search';
import DestinationDetail from './pages/DestinationDetail';
import AddPlaceForm from './pages/AddPlaceForm';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () =>{
    const handleSubmit = (formData: FormData) => {
      // Handle the form submission, for example, send it to your backend API
      console.log(formData);
    };

return (

  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home"> url: 8001/home
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/splash">
          <Splash />
        </Route>
        <Route exact path="/personalaccount">
          <PersonalAccount />
        </Route>
        <Route exact path="/featured">
          <FeaturedPage />
        </Route>
        <Route exact path="/form">
          <AddPlaceForm onSubmit={handleSubmit}/>
        </Route>
        <Route exact path="/search">
          <Search />
        </Route>
        <Route path="/destination/:id" component={DestinationDetail} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);
};

export default App;
