import { Component, NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../auth/auth-guard.service';
import { ProfileComponent } from './profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const routes:Routes = [
  {
    path:'user/signin',
    component:SigninComponent
  },
  {
    path:'user/signup',
    component:SignupComponent
  },
  {
    path:'user/profile',
    canActivate:[AuthGuardService],
    component:ProfileComponent
  }
]


@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    ProfileComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    CommonModule
  ],
  exports:[
    RouterModule
  ]
})
export class UserModule { }
