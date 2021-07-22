import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculationComponent } from './calculation/calculation.component';
import { LoginComponent } from './login/login.component';
import { GreetingPipe } from './pipes/greeting.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CalculationComponent,
    LoginComponent,
    GreetingPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [CalculationComponent] // Root Component
})
export class AppModule { }
