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
  IonItem,
} from '@ionic/react';

class Experience extends Component {
  render() {
    return (
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Experience</IonCardTitle>
          <IonCardSubtitle>Software Engineer</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          <IonItem>
            <p>2011 - 2014</p>
            <h3>Internship 1 - Company 1</h3>
            <p><em>Cupidatat sed ut tempor sed sunt consectetur duis ut incididunt. Fugiat ad eiusmod esse dolore excepteur ea aute eu quis eu commodo sed voluptate fugiat esse dolor.</em></p>
          </IonItem>
          <IonItem>
            <p>2014 - 2018</p>
            <h3>Internship 2 - Company 2</h3>
            <p><em>Non voluptate adipisicing dolore dolor voluptate nostrud sunt consectetur laborum. Ad esse dolor fugiat laboris eu et veniam occaecat ad voluptate elit dolore irure.</em></p>
          </IonItem>
          <IonItem>
            <p>2011 - 2014</p>
            <h3>Internship 3 - Company 3</h3>
            <p><em>Laboris ea sit irure anim occaecat ut dolor do elit minim amet dolore irure ad. Qui in laboris nulla voluptate eu in velit enim proident excepteur eiusmod ut.</em></p>
          </IonItem>
        </IonCardContent>
      </IonCard>
    );
  }
}

export default Experience;
