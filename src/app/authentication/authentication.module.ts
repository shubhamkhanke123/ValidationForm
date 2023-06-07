import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { GetUserDeatilsComponent } from './get-user-deatils/get-user-deatils.component';


@NgModule({
  declarations: [
    GetUserDeatilsComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
