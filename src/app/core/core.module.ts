import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { GlobalLoaderComponent } from './global-loader/global-loader.component';



@NgModule({
  declarations: [
    NavigationComponent,
    GlobalLoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavigationComponent,
    GlobalLoaderComponent
  ]
})
export class CoreModule { }
