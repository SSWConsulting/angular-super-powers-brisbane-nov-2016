import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRouterModule } from './home.routes';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRouterModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
