import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent implements OnChanges{

  msg:string='';

  @Input() RUData:any=null;

  retrievedUserForm = new FormGroup({
    name:new FormControl('',Validators.required),
    photo: new FormControl(),
    gender:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    phone:new FormControl('',Validators.required),
    country: new FormControl('',Validators.required)
  })

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Form received\n",this.RUData);
  }

  clearForm(){
    this.retrievedUserForm.setValue({
      name: '',
      gender: null,
      email: null,
      phone: null,
      country: null,
      photo: null
    })
    this.msg='';
  }

  fillForm(){
    this.retrievedUserForm.setValue({
      name: this.RUData.name.title + ". " + this.RUData.name.first + " " + this.RUData.name.last,
      gender: this.RUData.gender,
      email: this.RUData.email,
      phone: this.RUData.phone,
      country: this.RUData.location.country,
      photo: this.RUData.picture.large
    })
  }

  formSubmit(){
    this.msg="Form Submitted!!"
  }

  onSubmit(event:Event){
    event.preventDefault();
  }

}
