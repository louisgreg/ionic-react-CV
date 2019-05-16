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
  IonList,
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
          <div className="timeline-item active">
              <div className="year">2018 - Now <span className="marker"><span className="dot"></span></span>
              </div>
              <div className="info">
                <IonCard class="info-card">
                  That song the artist formerly known as prince sang no longer applies.
                </IonCard>
              </div>
          </div>
          <div className="timeline-item">
              <div className="year">2014 - 2018 <span className="marker"><span className="dot"></span></span>
              </div>
              <div className="info">
                <IonCard class="info-card">
                  The in-house Gawker chat room is filled with photos of Rob Ford, and for one reason: Rob Ford takes a good goddamn photo.
                </IonCard>
              </div>
          </div>
          <div className="timeline-item">
              <div className="year">2011 - 2014 <span className="marker"><span className="dot"></span></span>
              </div>
              <div className="info">
                <IonCard class="info-card">
                  That song the artist formerly known as prince sang no longer applies.
                </IonCard>
               </div>
          </div>
      </div>

    </IonContent>
  </>
)

export default TrainingPage;
