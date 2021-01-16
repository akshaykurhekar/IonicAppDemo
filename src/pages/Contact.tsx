import React from 'react';
import { IonAvatar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle,IonIcon , IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonItem, IonThumbnail, IonLabel } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Contact</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Contact</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <IonItem>
      
        <img src="./AirBrush_20191216221424.jpg" />
      
      
    </IonItem> */}
          {/* <div className="profileIocns">

          </div> */}
            <div className="content" >
            <IonItem>Name :  Akshay Manohar Kurhekar</IonItem>
            <IonItem>Email : kurhekar145@gmail.com</IonItem>
            <IonItem>Mob. No. : +91 9552259961</IonItem>
            </div>    
           

            <div className="footer">
                <p>@ No Copyright issue Made With Love Open to Use for any one.</p>
                <strong>Small contribution to open Source.</strong>               
                <br/>
                <br/>
               GitHub Link : <a href="https://github.com/akshaykurhekar/IonicAppDemo" target="_blank" > Check Out</a>
            </div>
      </IonContent>
    </IonPage>
  );
};

export default Contact;
