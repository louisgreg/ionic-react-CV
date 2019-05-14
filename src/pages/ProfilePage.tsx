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
} from '@ionic/react';

const ProfilePage = () => (
  <>
    <IonHeader>
      <IonToolbar color="primary">
        <IonTitle>Louis POLLIN - Profile</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonCard>
        <IonAvatar slot="end">
          <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"/>
        </IonAvatar>
        <IonCardHeader>
          <IonCardTitle>My profile</IonCardTitle>
          <IonCardSubtitle>Software Engineer</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>Although, it does look fairly cold. Lorem ipsum, hdjshkjfsd,sfgs,sfgssf.</IonCardContent>
      </IonCard>
    </IonContent>
  </>
)

export default ProfilePage;
