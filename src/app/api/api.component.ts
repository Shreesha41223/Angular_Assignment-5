import { HttpClient, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class APIComponent {

  constructor(private http:HttpClient){}

  apiUrl='https://randomuser.me/api/';
  // https://api-ninjas.com/v1/randomuser
  apiData:any=null;
  error:string='';
  
  @Output() Event = new EventEmitter<any>();

  fetchData(){
    this.http.get<any>(this.apiUrl).subscribe({
      next:(response)=>{
        this.apiData=response.results[0];
        console.log(this.apiData);
        this.Event.emit(this.apiData);
        this.error='No error';
      },
      error:(err)=>{
        console.log("Error Occured",err);
      }
    })
  }
    
}

provideHttpClient(withFetch());