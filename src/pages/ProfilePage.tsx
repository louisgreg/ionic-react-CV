import React from 'react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import {
  IonContent,
  IonAvatar,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
} from '@ionic/react';
import './ProfilePage.css'

const ProfilePage = () => (
  <>
    <IonHeader>
      <IonToolbar color="primary">
        <IonTitle>Louis POLLIN - Profile</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <div className="profilePicture">
        <IonAvatar slot="start" class="avatar">
          <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" alt="profile"/>
        </IonAvatar>
      </div>
      <div className="profileHead">
          <h2>Louis POLLIN</h2>
          <h4>Software Engineer - Product management</h4>
      </div>
      <div className="profileDescription">
        <p>
          Although, it does look fairly cold. Lorem ipsum, hdjshkjfsd,sfgs,sfgssf. 
          Ea officia mollit laborum ea cupidatat magna ullamco eu enim laborum excepteur veniam dolor esse eu enim deserunt dolore.
          Elit non pariatur ut culpa consequat aliquip dolor minim ut nisi est.
          Laborum nostrud labore exercitation consectetur dolore occaecat sit fugiat mollit culpa cupidatat velit et ex amet irure quis nisi.
          Consequat duis mollit dolore pariatur duis fugiat ex laboris cillum irure aute laborum nisi. Laboris qui aliquip dolor duis aute adipisicing esse excepteur dolore consequat veniam ullamco cupidatat. 
          Occaecat ad non eiusmod mollit labore qui voluptate veniam non deserunt aliquip occaecat officia adipisicing elit cillum.
        </p>
      </div>
    </IonContent>
  </>
)

export default ProfilePage;
