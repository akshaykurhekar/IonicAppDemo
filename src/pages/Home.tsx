import React from 'react';
import {
     IonAvatar,
     IonCard,
     IonCardContent, 
     IonCardHeader, 
     IonCardSubtitle,
     IonIcon , 
     IonCardTitle, 
     IonContent, 
     IonHeader, 
     IonPage, 
     IonTitle, 
     IonToolbar, 
     IonGrid, 
     IonRow, 
     IonCol, 
     IonButton} from '@ionic/react';
     import { ellipse, square, triangle } from 'ionicons/icons';
     import './Home.css';


const  Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Resume</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* <IonHeader collapse="condense">
           <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader> */}
        <h2><strong className="title"> About Me... </strong></h2>
        <IonGrid>
            <IonRow>
              <IonCol size="12">
                
        <IonCard>
            <IonCardHeader>
            <IonCardSubtitle>Computer Engineer</IonCardSubtitle>
            <IonCardTitle>Akshay Manohar Kurhekar</IonCardTitle>
            </IonCardHeader>

          <IonCardContent>
             I am a Full Stack Developer. I love Paying around javascript and html
             with doing some exprimants on it.    
          </IonCardContent>
        </IonCard>
        </IonCol>
                       
          </IonRow>
          <h2><strong className="title"> My Works </strong></h2>
          
            <IonRow>
            <IonCol size="12">
            <IonCard>
          <IonCardHeader>
              <IonCardSubtitle>Hybrid App</IonCardSubtitle>
             <IonCardTitle>Ionic App</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            A Hybrid Ionic App using React, Ionic Framework and Capacitor, resume App made for android platform. <br/><br/>
          GitHub Link : <a href="https://github.com/akshaykurhekar/IonicAppDemo" target="_blank" >Check Out</a> my work here.
           </IonCardContent>
        </IonCard>
        </IonCol> 
            <IonCol size="12">
            <IonCard>
          <IonCardHeader>
              <IonCardSubtitle>WebSite</IonCardSubtitle>
             <IonCardTitle>Digital Code Converter</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            This is online code Converter and Digit Conversion use to calculate canonical expression using K-map method. <br/><br/>
          Link : <a href="https://kmap-codeconverter.netlify.app/" target="_blank" >Check Out</a> my work here.
           </IonCardContent>
        </IonCard>
        </IonCol>

        <IonCol size="12">
            <IonCard>
          <IonCardHeader>
              <IonCardSubtitle>React WebSite</IonCardSubtitle>
             <IonCardTitle>React Login Authentication</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            React Login Auth. and private route implementation with Node.js and MySql using redux, localstorage <br/><br/>
          Github Link <a href="https://github.com/akshaykurhekar/React-Login-Route-Auth" target="_blank" >Check Out</a> my work here.
           </IonCardContent>
        </IonCard>
        </IonCol>

        <IonCol size="12">
        <IonCard>
          <IonCardHeader>
              <IonCardSubtitle>E-Commerce Portal</IonCardSubtitle>
             <IonCardTitle>Augmented Foods</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            This is E-Commerce platform to sell food product online with integrated payment gateway and admin panel for product management. <br/><br/>
            Link : <a href="http://augmentedfoodsindia.com/" target="_blank">Check out</a> my work here.
          </IonCardContent>
        </IonCard>
        </IonCol> 
        <IonCol size="12">
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Education Portal</IonCardSubtitle>
            <IonCardTitle>vSelflearn</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            This is E-Learning Platform for KVN school and SIT Engineering Colleges in Lonavala, With Admin and student Panel. <br/><br/>
            KVN - <a href="http://kvn.edu.in/vSelflearn-KVN" target="_blank" >Check Out</a> my work here. <br/> 
            SIT - <a href="https://vselflearn-engineering.vinnovatetechnologies.com/" target="_blank" >Check Out</a> my work here.  
          </IonCardContent>
        </IonCard>
        </IonCol> 
        <IonCol size="12">
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Hospitality Websites</IonCardSubtitle>
            <IonCardTitle>Hotels Site</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
              This all are Hotels Static website which I had worked on it. <br/><br/>                
                The Krushnai Resort - <a href="http://krushnairesort.com/" target="_blank" >Check Out</a>   <br/>
                Mayur Retreat - <a href="http://mayurretreat.com/" target="_blank" >Check Out</a>    <br/>
                The Metropole - <a href="http://themetropole.in/" target="_blank" >Check Out</a>    <br/>
                Hotel Dreamland - <a href="http://dreamlandresort.in/" target="_blank" >Check Out</a>    <br/>
                Hotel Retreat Heritage - <a href="http://retreatheritage.com/" target="_blank" >Check Out</a> <br/>   
                Hotel Imperial Grande - <a href="http://imperialgrande.com/" target="_blank" >Check Out</a>   <br/>
                Sahyadri – hospitality - <a href="http://www.sahyadriservices.in/" target="_blank" >Check Out</a>    
          </IonCardContent>
        </IonCard>
        </IonCol>          
        </IonRow>
      
        </IonGrid>        
      </IonContent>
    </IonPage>
  );
};

export default  Home;
