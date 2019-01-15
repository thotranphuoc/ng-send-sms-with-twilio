// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyCj9b4-DeF_zyn2gUuAmBEukG42XIx9SJ0",
    authDomain: "messaging-push-sample.firebaseapp.com",
    databaseURL: "https://messaging-push-sample.firebaseio.com",
    projectId: "messaging-push-sample",
    storageBucket: "messaging-push-sample.appspot.com",
    messagingSenderId: "523826768688"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
