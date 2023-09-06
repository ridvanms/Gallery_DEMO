import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth"
import { Router } from "@angular/router"
import { CookieService } from 'ngx-cookie-service';
import { GlobalLoaderService } from '../core/global-loader/global-loader.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService  {
  constructor(
    private http:HttpClient,
    private router:Router,
    private cookie:CookieService,
    private global_loader:GlobalLoaderService,
    private fireAuth:AngularFireAuth
  ){}

  signin(email:string,password:string){
    this.global_loader.showLoader()
    
    this.fireAuth.signInWithEmailAndPassword(email,password)
      .then(userCredential => {
        this.global_loader.hideLoader()
        const user = userCredential.user
        this.cookie.set('token',JSON.stringify(user),2)
        this.router.navigate(['/'])
      },
      error => {
        this.global_loader.hideLoader();
        this.router.navigate(['/user/signin'])
        switch(error.code){
          case 'auth/user-disabled':
            return alert('Invalid user or password!')
          case 'auth/user-not-found':
            return alert('Invalid user or password!')
          default:{
            return alert('Login error try again later')
          }
        }
      })
      
  }
  signup(email:string,password:string){
    this.global_loader.showLoader()
    this.fireAuth.createUserWithEmailAndPassword(email,password)
    .then((userCredential) => {
      this.global_loader.hideLoader()
      const user = userCredential.user
      this.cookie.set('token',JSON.stringify(user),2)
      this.router.navigate(['/']);
    }

    ).catch(err => {
      this.global_loader.hideLoader()
      this.router.navigate(['/user/signup'])
      alert(err.message)
    })
  }
  signout(){
    this.cookie.delete('token')
    this.router.navigate(['/'])
  }
  isAuth(){
    return !!this.cookie.get('token')
  }
}
