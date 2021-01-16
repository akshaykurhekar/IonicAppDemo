import React from 'react';
import { IonAvatar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle,IonIcon , IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonProgressBar, IonItem } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Skills.css';

const Skills: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Skills</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Skills</IonTitle>
          </IonToolbar>
        </IonHeader>
                     
          <h2><strong className="title"> Skills </strong></h2>

        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Technical Skills</IonCardSubtitle>
            <IonCardTitle>Full Stack Developer</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            I love to work daily, I always try to improve my skills...
          </IonCardContent>
        </IonCard>

           {/*-- Colorize Progressbar --*/}

           <div className="progress">
           <h4><strong> HTML 5 </strong></h4>
    <IonProgressBar color="danger" value={0.8}></IonProgressBar><br />
    
    <h4><strong> CSS </strong></h4>
    <IonProgressBar color="primary" value={0.7}></IonProgressBar><br />
    <h4><strong> JavaScript </strong></h4>
    <IonProgressBar color="warning" value={0.7}></IonProgressBar><br />
    <h4><strong> TypeScript </strong></h4>
    <IonProgressBar color="primary" value={0.6} buffer={0.9}></IonProgressBar><br />
    <h4><strong> React Js </strong></h4>
    <IonProgressBar color="secondary" value={0.65} buffer={0.9}></IonProgressBar><br />
    <h4><strong> React Native </strong></h4>
    <IonProgressBar value={0.5} buffer={0.8}></IonProgressBar><br />
    <h4><strong> Node.js </strong></h4>
    <IonProgressBar value={0.6} buffer={0.8}></IonProgressBar><br />
    <h4><strong> MongoDB </strong></h4>
    <IonProgressBar color="success" value={0.6} buffer={0.8}></IonProgressBar><br />
    <h4><strong> MySql </strong></h4>
    <IonProgressBar value={0.8} ></IonProgressBar><br />
    <h4><strong> PHP </strong></h4>
    <IonProgressBar value={0.75} buffer={0.8}></IonProgressBar><br />
    <h4><strong> Java </strong></h4>
    <IonProgressBar value={0.7} ></IonProgressBar><br />
    <h4><strong> C++ </strong></h4>
    <IonProgressBar color="medium" value={0.6} ></IonProgressBar><br />
    <h4><strong> Python </strong></h4>
    <IonProgressBar color="tertiary" value={0.65} buffer={0.8}></IonProgressBar><br />

           </div>
          
      </IonContent>
    </IonPage>
  );
};

export default Skills;
