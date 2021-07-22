import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculationComponent } from './calculation/calculation.component';
import { LoginComponent } from './login/login.component';
import { GreetingPipe } from './pipes/greeting.pipe';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculationComponent,
    LoginComponent,
    GreetingPipe,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [PostComponent] // new LoginComponent(authService);
})
export class AppModule { }
