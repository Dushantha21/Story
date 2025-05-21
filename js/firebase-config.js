const firebaseConfig = {
  apiKey: "AIzaSyC3vu7JlqbXDtfp6oJuflwQJbVSsotBilI",
  authDomain: "storyweave-da1fb.firebaseapp.com",
  databaseURL: "https://storyweave-da1fb-default-rtdb.firebaseio.com",
  projectId: "storyweave-da1fb",
  storageBucket: "storyweave-da1fb.firebasestorage.app",
  messagingSenderId: "137820490565",
  appId: "1:137820490565:web:13bd0454a43e23f38dcc2c",
  measurementId: "G-EZV8WBYWE1"
};

const app = firebase.initializeApp(firebaseConfig);

const database = firebase.database();