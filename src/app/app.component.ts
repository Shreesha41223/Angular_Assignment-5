import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { APIComponent } from './api/api.component';
import { UserFormComponent } from './user-form/user-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,APIComponent,UserFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hWork_5';
  userData:any=null;

  userRetrived(retrivedUsedData:any){
    this.userData = retrivedUsedData;
    console.log("received ->",this.userData);
  }

}
