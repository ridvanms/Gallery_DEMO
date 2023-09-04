import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  
  constructor(
    private authservice:AuthService,
    private router:Router
    ) {}

  canActivate() {
      const isAuthenticated  = this.authservice.getAccessToken()
      if(isAuthenticated){
        return true
      }else{
        this.router.navigate(['/user/signin'])
        return false
      }
  }
}
