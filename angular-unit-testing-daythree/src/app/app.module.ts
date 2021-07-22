import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculationComponent } from './calculation/calculation.component';
import { LoginComponent } from './login/login.component';
import { GreetingPipe } from './pipes/greeting.pipe';
import { PostComponent } from './post/post.component';
import { UsersComponent } from './users/users.component';
import { HoverFocusDirective } from './directives/hover-focus.directive';

@NgModule({
  declarations: [
    AppComponent,
    CalculationComponent,
    LoginComponent,
    GreetingPipe,
    PostComponent,
    UsersComponent,
    HoverFocusDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [UsersComponent] // new LoginComponent(authService);
})
export class AppModule { }
