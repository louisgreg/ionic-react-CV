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
import './TrainingPage.css'

const TrainingPage = () => (
  <>
    <IonHeader>
      <IonToolbar color="primary">
        <IonTitle>Louis POLLIN - Training</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>

      <div className="timeline">
        <div className="container left">
          <div className="content">
            <h2>2011 - 2014</h2>
            <h4>Scientific Baccalaureate</h4>
            <p>Lycee Portes de l'Oisans - Vizille, France</p>
            <p><em>obtained with honors</em></p>
          </div>
        </div>
        <div className="container right">
          <div className="content">
            <h2>2014 - 2018</h2>
            <h4>BACHELOR, MASTER IN COMPUTER ENGINEERING</h4>
            <p>Lycee Portes de l'Oisans - Vizille, France</p>
            <p><em>obtained with honors</em></p>
          </div>
        </div>
        <div className="container left">
          <div className="content">
            <h2>2011 - 2014</h2>
            <h4>SCIENTIFIC BACCALAUREATE</h4>
            <p>Lycee Portes de l'Oisans - Vizille, France</p>
            <p><em>obtained with honors</em></p>
          </div>
        </div>
      </div>

    </IonContent>
  </>
)

export default TrainingPage;
