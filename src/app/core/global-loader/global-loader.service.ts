import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalLoaderService {
  isLoading = false
  constructor() { }
  showLoader(){
    this.isLoading = true
  }
  hideLoader(){
    this.isLoading = false
  }
}
