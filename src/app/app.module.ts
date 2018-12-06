import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { ContactService } from '../services/contact.service';

export const firebaseConfig = {
  apiKey: 'AIzaSyBTPT_vhbBD1ZDIK28ukz3jfq7jf4_DmnY',
  authDomain: 'fitco-28df1.firebaseapp.com',
  databaseURL: 'https://fitco-28df1.firebaseio.com',
  projectId: 'fitco-28df1',
  storageBucket: 'fitco-28df1.appspot.com',
  messagingSenderId: '575032621889'
};
@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ContactService
  ]
})
export class AppModule { }
