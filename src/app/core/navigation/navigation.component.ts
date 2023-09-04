import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  
})
export class NavigationComponent{
  isMenuOpen = false
  
  constructor(
    public authService:AuthService
  ){

  }
  
  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen
  }

}
