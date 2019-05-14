import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';

import { IonApp, IonPage, IonRouterOutlet,
IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge, IonHeader, IonTitle, IonToolbar} from '@ionic/react';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <IonApp>
          <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Louis POLLIN</IonTitle>
          </IonToolbar>
        </IonHeader>
            <IonPage id="main">
              <IonRouterOutlet>
              {/*Add route Here*/}
              </IonRouterOutlet>
            </IonPage>
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
          </IonApp>
        </div>
      </Router>
    );
  }

}

export default App;
