import { async, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { TestBed, inject } from '@angular/core/testing';
// describe('Isolated', () => {
//   let login: LoginComponent;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [LoginComponent],
//       imports: [FormsModule, ReactiveFormsModule]
//     });
//   });

//   beforeEach(inject([LoginComponent], (loginForm: LoginComponent) => {
//     login = loginForm;
//   }));

//   it('should send credentials on submit', () => {
//     login.submitted.subscribe(({ email, password }) => {
//       expect(email).toEqual("expectedEmail@gmail.com");
//       expect(password).toEqual("expectedPassword");
//     });

//     login.onSubmit({ email: "expectedEmail@gmail.com", password: "expectedPassword" });
//   });
// });

// ---------------------------------------------------------------------- //

describe('Login Shallow Tests', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule, ReactiveFormsModule]
    })
    TestBed.compileComponents();
  }));
  it('should send credentials on submit', () => {
    let fixture = TestBed.createComponent(LoginComponent);
    let component = fixture.componentInstance;
    let element = fixture.nativeElement;
    fixture.detectChanges();
    element.querySelector('#login-email').value = "abc@gmail.com";
    element.querySelector('#login-email').dispatchEvent(new Event('input'));
    element.querySelector('#login-password').value = "123";
    element.querySelector('#login-password').dispatchEvent(new Event('input'));
    fixture.detectChanges();
    component.submitted.subscribe(({ email, password }) => {
      expect(email).toEqual("abc@gmail.com");
      expect(password).toEqual("123");
    });
    element.querySelector('button[type="submit"]').click();
  });
})