import React from 'react';
import { Route, Redirect } from 'react-router';
import { IonTabs, IonTabButton, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonPage, IonTab } from '@ionic/react';

import ProfilePage from './ProfilePage';
import TrainingPage from './TrainingPage';
import ExperiencePage from './ExperiencePage';

const AppStack: React.FC = () => (
  <IonPage id="main">
    <Route exact path="/" render={() => <Redirect to="/profile"/>}/>


    <IonRouterOutlet>
      <Route path="/:tab(profile)" component={ProfilePage} exact={true}/>
      <Route path="/:tab(training)" component={TrainingPage} exact={true}/>
      <Route path="/:tab(experience)" component={ExperiencePage} exact={true}/>
    </IonRouterOutlet>
    <IonTabs>
      <IonTab tab="profile"> Profile Page </IonTab>
      <IonTabBar slot="bottom">
        <IonTabButton tab="profile" href="/profile">
          <IonIcon name="person" />
          <IonLabel>Profile</IonLabel>
        </IonTabButton>

        <IonTabButton tab="TrainingPage" href="/training">
          <IonIcon name="school" />
          <IonLabel>Training</IonLabel>
        </IonTabButton>

        <IonTabButton tab="Experience" href="/experience">
          <IonIcon name="briefcase" />
          <IonLabel>Experience</IonLabel>
        </IonTabButton>

        <IonTabButton tab="Skills">
          <IonIcon name="key" />
          <IonLabel>Skills</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  </IonPage>

);

export default AppStack;