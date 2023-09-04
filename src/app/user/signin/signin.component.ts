import { Component } from '@angular/core';
import {FormControl,FormGroup,Validators} from "@angular/forms"
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  signInForm: FormGroup | any;

  ngOnInit(): void {
    this.signInForm = new FormGroup({
       email: new FormControl('', [Validators.required, ]),
       password: new FormControl('', [ Validators.required]),
     });
  }

 

  onSubmit() {
    if (this.signInForm.valid) {
      console.log(this.signInForm.value);
    }
  }
}
