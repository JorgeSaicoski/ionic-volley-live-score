import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonLabel, IonButton, IonItem, IonCardContent } from '@ionic/angular/standalone';
import { Match } from '../../models/match';
import { MatchService } from '../../services/matches.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, CommonModule, ReactiveFormsModule, IonCard, IonLabel, IonButton, IonItem, IonCardContent]

})
export class Tab2Page implements OnInit {
  match: Match = new Match(0, [], false, false, new Date(), '');
  showMessage: boolean = false
  message: string = ""
  myForm: FormGroup;
  
  constructor(private matchService: MatchService) {
    this.myForm = new FormGroup({
      adversary: new FormControl('', [Validators.required,  Validators.minLength(3)]), 
      matchDate: new FormControl('', Validators.required),
    })
  }

  ngOnInit() {
  }

  createMatch() {
    if (this.myForm.valid){
      this.matchService.createMatch(this.match).subscribe({
        next: (createdMatch: any) => {
          console.log('Match created:', createdMatch);
          this.displayMessage('Match created successfully!');
        },
        error: (err: any) => {
          console.error('Error creating match:', err);
          this.displayMessage('Error creating match.');
        },
      });
    }

  }

  displayMessage(message: string) {
    this.message = message;
    this.showMessage = true;

    setTimeout(() => {
      this.showMessage = false;
    }, 5000);
  }
}



