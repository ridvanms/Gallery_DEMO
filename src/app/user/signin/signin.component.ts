import { Component } from '@angular/core';
import {FormControl,FormGroup,Validators} from "@angular/forms"
import { AuthService } from 'src/app/auth/auth.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  signInForm: FormGroup | any;

  constructor(
    private authService:AuthService
  ){}
  ngOnInit(): void {
    this.signInForm = new FormGroup({
       email: new FormControl('', [Validators.required, ]),
       password: new FormControl('', [ Validators.required]),
     });
  }

 

  onSubmit() {
    
    if (this.signInForm.valid) {
      const email = this.signInForm.value['email']
      const password = this.signInForm.value['password']
      
      this.authService.signin(email,password)

    }

  }
}
