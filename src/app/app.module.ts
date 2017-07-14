import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyCf6ltVzGyCa1BetoucRD1BDO6fjE0LmkY',
  authDomain: 'notification-85523.firebaseapp.com',
  databaseURL: 'https://notification-85523.firebaseio.com',
  storageBucket: 'notification-85523.appspot.com',
  messagingSenderId: '721439807437'
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
