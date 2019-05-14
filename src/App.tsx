import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';

import AppStack from "./pages/AppStack";

import { IonApp, IonPage, IonRouterOutlet, 
IonTabs, IonTab, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge, IonHeader, IonTitle, IonToolbar} from '@ionic/react';

const App = () => (
  <Router>
    <div id="app">
      <IonApp>
          <Route path="/" component={AppStack} />
      </IonApp>
    </div>
  </Router>
);

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <div className="App">
//           <IonApp>

//             <IonPage id="main">
//               <IonRouterOutlet>
//                 <Route exact path="/" component={ProfilePage} />
//                 <Route exact path="/training" component={TrainingPage} />
//               </IonRouterOutlet>
//             </IonPage>

//             <IonTabs>
//               <IonTab tab="profile"> Profile Page </IonTab>
//               <IonTabBar slot="bottom">
//                 <IonTabButton tab="profile" href="/">
//                   <IonIcon name="person" />
//                   <IonLabel>Profile</IonLabel>
//                 </IonTabButton>

//                 <IonTabButton tab="TrainingPage" href="/training">
//                   <IonIcon name="school" />
//                   <IonLabel>Training</IonLabel>
//                 </IonTabButton>

//                 <IonTabButton tab="Experience">
//                   <IonIcon name="briefcase" />
//                   <IonLabel>Experience</IonLabel>
//                 </IonTabButton>

//                 <IonTabButton tab="Skills">
//                   <IonIcon name="key" />
//                   <IonLabel>Skills</IonLabel>
//                 </IonTabButton>
//               </IonTabBar>
//             </IonTabs>

//           </IonApp>
//         </div>
//       </Router>
//     );
//   }

// }

export default App;
