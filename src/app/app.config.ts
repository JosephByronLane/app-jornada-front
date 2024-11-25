import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import firebaseConfig from '../preprocessing/keyJS.json';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {

  providers: [
    
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp({
      apiKey: firebaseConfig.apiKey,
      authDomain: firebaseConfig.authDomain,
      databaseURL: firebaseConfig.databaseURL,
      projectId: firebaseConfig.projectId,
      storageBucket: firebaseConfig.storageBucket,
      messagingSenderId: firebaseConfig.messagingSenderId,
      appId: firebaseConfig.appId,
    })),
    provideDatabase(() => getDatabase()),
  ]
};
