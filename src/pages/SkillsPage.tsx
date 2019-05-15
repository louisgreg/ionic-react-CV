import React from 'react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import {
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent, 
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
} from '@ionic/react';

const SkillsPage = () => (
  <>
    <IonHeader>
      <IonToolbar color="primary">
        <IonTitle>Louis POLLIN - Skills</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent>

      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Hard Skills</IonCardTitle>
          <IonCardSubtitle>Technical</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          <IonItem>
            <h3>Skill 1</h3>
          </IonItem>
          <IonItem>
            <h3>Skills 2</h3>
          </IonItem>
          <IonItem>
            <h3>Skills 3</h3>
          </IonItem>
        </IonCardContent>
      </IonCard>

      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Soft skills</IonCardTitle>
          <IonCardSubtitle>Language</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          <IonItem>
            <h3>French</h3>
          </IonItem>
          <IonItem>
            <h3>English</h3>
          </IonItem>
          <IonItem>
            <h3>German</h3>
          </IonItem>
          <IonItem>
            <h3>Chinese and Japanese</h3>
          </IonItem>
        </IonCardContent>
      </IonCard>

    </IonContent>
  </>
)

export default SkillsPage;
