// import { DebugElement } from '@angular/core';
// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { By } from '@angular/platform-browser';
// import { AuthService } from './../services/auth.service';
// import { LoginComponent } from './login.component';

// describe('Login Component', () => {
//   let loginComponent: LoginComponent;
//   let fixture: ComponentFixture<LoginComponent>;
//   let authService: AuthService;
//   let el: DebugElement;
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [LoginComponent],
//       providers: [AuthService],
//       imports: []
//     })
//     // Create Component and Test Fixture
//     fixture = TestBed.createComponent(LoginComponent);
//     // Get Test Component from the Fixture
//     loginComponent = fixture.componentInstance;
//     // AuthService provided to the TestBed
//     authService = TestBed.get(AuthService);
//     // Get the "a" element by CSS selector (e.g. by class name)
//     el = fixture.debugElement.query(By.css('a'));
//   })
//   // it('doLogin returns true when the user has not been authenticated', () => {
//   //   spyOn(authService, 'isAuthenticated').and.returnValue(false);
//   //   expect(loginComponent.doLogin()).toBeTruthy();
//   //   expect(authService.isAuthenticated).toHaveBeenCalled();
//   // });
//   // it('doLogin returns false when the user has been authenticated', () => {
//   //   spyOn(authService, 'isAuthenticated').and.returnValue(true);
//   //   // localStorage.setItem("userToken", "bhawna");
//   //   expect(loginComponent.doLogin()).toBeFalsy();
//   //   expect(authService.isAuthenticated).toHaveBeenCalled();
//   // })
//   it('login button hidden when the user is authenticated', () => {
//     expect(el.nativeElement.textContent.trim()).toBe('');
//     fixture.detectChanges();
//     expect(el.nativeElement.textContent.trim()).toBe('Login');
//     fixture.detectChanges();
//     expect(el.nativeElement.textContent.trim()).toBe('Logout');

//   })
// })