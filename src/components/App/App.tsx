import React, { Component } from 'react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import Introduction from '../Introduction/Introduction'
import Training from '../Training/Training'
import Experience from '../Experience/Experience'
import {
  IonApp,
  IonToolbar, IonTitle, IonContent,
  IonHeader,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent, 
  IonAvatar,
  IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge,
} from '@ionic/react';

class App extends Component {
  render() {
    return (
      <IonApp>
         <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Louis POLLIN</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <Introduction/>
          <Training/>
          <Experience/>

          <IonTabs>
            <IonTabBar slot="bottom">
              <IonTabButton tab="Profile">
                <IonIcon name="person" />
                <IonLabel>Profile</IonLabel>
              </IonTabButton>

              <IonTabButton tab="Training">
                <IonIcon name="school" />
                <IonLabel>Training</IonLabel>
              </IonTabButton>

              <IonTabButton tab="Experience">
                <IonIcon name="briefcase" />
                <IonLabel>Experience</IonLabel>
              </IonTabButton>

              <IonTabButton tab="Skills">
                <IonIcon name="key" />
                <IonLabel>Skills</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>

        </IonContent>
      </IonApp>
    );
  }
}

export default App;
