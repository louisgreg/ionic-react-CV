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

const ExperiencePage = () => (
  <>
    <IonHeader>
      <IonToolbar color="primary">
        <IonTitle>Louis POLLIN - Experience</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>


      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Company 1</IonCardTitle>
          <IonCardSubtitle>2011 - 2014</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          <p>Lorem ipsum nulla ut esse nisi eu dolor culpa sint pariatur incididunt dolor velit ut in.</p>
        </IonCardContent>
      </IonCard>

      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Company 2</IonCardTitle>
          <IonCardSubtitle>2014 - 2018</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          <p>Lorem ipsum irure non ex ad veniam in excepteur nulla sed laboris proident fugiat ullamco duis anim in aute aliqua.</p>
        </IonCardContent>
      </IonCard>

      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Company 3</IonCardTitle>
          <IonCardSubtitle>2018 - 2019</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          <p>Velit enim in sed irure in voluptate eiusmod occaecat mollit sunt incididunt. Lorem ipsum tempor deserunt cillum dolor eiusmod sunt eiusmod amet dolor est minim consequat sit velit proident non laborum proident ad.</p>
        </IonCardContent>
      </IonCard>

      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Company 4</IonCardTitle>
          <IonCardSubtitle>2019 - Now</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          <p>Velit enim in sed irure in voluptate eiusmod occaecat mollit sunt incididunt. Lorem ipsum tempor deserunt cillum dolor eiusmod sunt eiusmod amet dolor est minim consequat sit velit proident non laborum proident ad.</p>
        </IonCardContent>
      </IonCard>

    </IonContent>
  </>
)

export default ExperiencePage;
