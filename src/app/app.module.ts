import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {ParticlesModule} from 'angular-particle';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// database connection

const config = {
    apiKey: 'AIzaSyDNG5NGQ613nZH-ozIiwOVjHYOgeB6SxcM',
    authDomain: 'hoopsphere-72a9a.firebaseapp.com',
    databaseURL: 'https://hoopsphere-72a9a.firebaseio.com',
    projectId: 'hoopsphere-72a9a',
    storageBucket: 'hoopsphere-72a9a.appspot.com',
    messagingSenderId: '847253400342'
};

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        ReactiveFormsModule,
        ParticlesModule,
        AngularFireModule,
        AngularFirestoreModule,
        AngularFireModule.initializeApp(config),
        AngularFireDatabaseModule
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {
            provide: RouteReuseStrategy,
            useClass: IonicRouteStrategy
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
