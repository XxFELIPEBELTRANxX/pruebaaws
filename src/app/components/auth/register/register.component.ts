import { Component,  } from '@angular/core';
import {FormControl, FormGroup } from '@angular/forms';
// import { RegisterServices } from '../../../services/register.services';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  title ="Register"
  enlace ='login'
  text2 = 'Do you already have an account'
  registroForm!: FormGroup;

  constructor( private authServices: AuthService){
    this.registroForm = new FormGroup({
      username:new FormControl('',[]),
      email:new FormControl('',[]),
      password:new FormControl('',[])
    }) 
  }
    onSubmit(){
      if(this.registroForm.valid){
        // console.log(this.registroForm.valid)
          this.authServices.postRegister(this.registroForm.value).subscribe(data =>{
            console.log(data)
          })
      }
    }
  
}
