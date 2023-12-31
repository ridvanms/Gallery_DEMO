import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup | any;


  constructor(
    private authService:AuthService
  ){}
  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, ]),
      password: new FormControl('', [Validators.minLength(6), Validators.required]),
      confirmPassword: new FormControl('', [Validators.required])
    });
  }

 

  onSubmit() {
    const password = this.signUpForm.value['password']
    const confirmPassword = this.signUpForm.value['confirmPassword']
    
    if(password != confirmPassword) return alert('Passwords do not match!')
    if (this.signUpForm.valid) {
      const email = this.signUpForm.value['email']

      this.authService.signup(email,password)
    }
  }
}