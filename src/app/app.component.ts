import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'blog';

  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyC53wrv1fxaJjWEwAlDI8wfSjY5OA1zUn8",
      authDomain: "blog-547a7.firebaseapp.com",
      databaseURL: "https://blog-547a7.firebaseio.com",
      projectId: "blog-547a7",
      storageBucket: "blog-547a7.appspot.com",
      messagingSenderId: "806430042603",
      appId: "1:806430042603:web:22029e8e510d1748"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  ngOnInit() { }
  
}
