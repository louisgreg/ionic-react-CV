import React, { Component } from 'react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import {
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent, 
  IonAvatar,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
} from '@ionic/react';

const TrainingPage = () => (
  <>
    <IonHeader>
      <IonToolbar color="primary">
        <IonTitle>Louis POLLIN - Training</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Training</IonCardTitle>
          <IonCardSubtitle>Software Engineer</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          <IonItem>
            <p>2011 - 2014</p>
            <h3>Scientific Baccalaureate</h3>
            <h4>Lycee Portes de l'Oisans - Vizille, France</h4>
            <p><em>obtained with honors</em></p>
          </IonItem>
          <IonItem>
            <p>2014 - 2018</p>
            <h3>BACHELOR, MASTER IN COMPUTER ENGINEERING</h3>
            <h4>Lycee Portes de l'Oisans - Vizille, France</h4>
            <p><em>obtained with honors</em></p>
          </IonItem>
          <IonItem>
            <p>2011 - 2014</p>
            <h3>SCIENTIFIC BACCALAUREATE</h3>
            <h4>Lycee Portes de l'Oisans - Vizille, France</h4>
            <p><em>obtained with honors</em></p>
          </IonItem>
        </IonCardContent>
      </IonCard>
    </IonContent>
  </>
)

export default TrainingPage;
