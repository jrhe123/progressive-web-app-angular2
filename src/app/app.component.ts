import { Component, OnInit } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFire, AuthProviders, AuthMethods,FirebaseListObservable } from 'angularfire2';
import { FirebaseApp } from "angularfire2";
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{

  constructor(){
    var config = {
      apiKey: "AIzaSyCf6ltVzGyCa1BetoucRD1BDO6fjE0LmkY",
      authDomain: "notification-85523.firebaseapp.com",
      databaseURL: "https://notification-85523.firebaseio.com",
      projectId: "notification-85523",
      storageBucket: "notification-85523.appspot.com",
      messagingSenderId: "721439807437"
    };
    firebase.initializeApp(config);

    let messaging = firebase.messaging();
    messaging.requestPermission()
    .then(function(){
      console.log("have permission");
      return messaging.getToken();
    })
    .then(function(token){
      console.log(token);
    })
    .catch(function(err){
      console.log("error");
    })

    messaging.onMessage(function(payload){
      console.log('on message: ', payload);
    });
  }

}
