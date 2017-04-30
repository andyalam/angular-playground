import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature: string = 'recipes';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAiaoKISqieTCGJqEe8FNcMFxvh8yPwkhI",
      authDomain: "ng-recipe-book-2abec.firebaseapp.com"
    });
  }

  onNavigate(feature: string) {
      this.loadedFeature = feature;
  }
}
