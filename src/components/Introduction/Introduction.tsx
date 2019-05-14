import React, { Component } from 'react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent, 
  IonAvatar,
} from '@ionic/react';

class Introduction extends Component {
  render() {
    return (
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
    );
  }
}

export default Introduction;
