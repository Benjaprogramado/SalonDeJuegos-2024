import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"saladejuegos-2024","appId":"1:321908198090:web:be5efce67b7c7229100233","storageBucket":"saladejuegos-2024.appspot.com","apiKey":"AIzaSyAdls8Cx4CEE4x2Feia9EYoFyIRIHY383U","authDomain":"saladejuegos-2024.firebaseapp.com","messagingSenderId":"321908198090"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
