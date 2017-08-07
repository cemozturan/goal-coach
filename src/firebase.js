import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA78FoSLiTjEw71Vfh-AvKl9tkAe11MME8",
    authDomain: "goal-coach-1b658.firebaseapp.com",
    databaseURL: "https://goal-coach-1b658.firebaseio.com",
    projectId: "goal-coach-1b658",
    storageBucket: "",
    messagingSenderId: "184481049080"
  };

  export const firebaseApp = firebase.initializeApp(config);
