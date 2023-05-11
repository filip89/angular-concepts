import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  //Forms module TODO explain ngSubmit?
  imports: [CommonModule, AuthRoutingModule, FormsModule]
})
export class AuthModule {} //as an example, auth module will be added to app module imports and eagerly loaded TODO