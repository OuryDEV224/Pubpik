import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyC1jsBT-D3NZ7ivtnM1hSImhvPdWIZK3-U",
      authDomain: "pubpik-realise.firebaseapp.com",
      projectId: "pubpik-realise",
      storageBucket: "pubpik-realise.appspot.com",
      messagingSenderId: "876778287602",
      appId: "1:876778287602:web:7e0962ad85a5d84603bb6b"
    })),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
