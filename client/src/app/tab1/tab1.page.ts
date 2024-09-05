import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { MatchService } from '../services/matches.service';
import { catchError, map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, CommonModule],
})
export class Tab1Page implements OnInit {
  matches: any[] = [];

  constructor(private matchService: MatchService) {}

  ngOnInit() {
    this.loadMatches();
  }

  loadMatches() {
    this.matchService.getMatches(1, 10)
      .pipe(
        map((data) => {
          this.matches = data;
          return data; 
        }),
        catchError((error) => {
          console.error('Error fetching matches:', error);
          return []; 
        })
      )
      .subscribe();
  }
}