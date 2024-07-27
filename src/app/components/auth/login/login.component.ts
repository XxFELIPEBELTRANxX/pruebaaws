import { Component, } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  titulo = 'login'
  enlace = 'register'
  text2  = 'Don t have an account?'
  registroForm!: FormGroup;

  constructor( private authServices: AuthService){
    this.registroForm = new FormGroup({
      email: new FormControl ('',[]),
      password: new FormControl ('',[])
    }) 
  }
    onSubmit(): void{
      if(this.registroForm.valid){
        console.log(this.registroForm.valid)
          this.authServices.postLogin(this.registroForm.value).subscribe(data =>{
            console.log(data)
          })
      }
    }
}
