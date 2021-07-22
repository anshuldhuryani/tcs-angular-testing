import { AuthService } from './../services/auth.service';
import { LoginComponent } from './login.component';

describe('Login Component', () => {

  let loginComponent: LoginComponent;
  let authService: AuthService;
  let spy: any;

  beforeEach(() => {
    authService = new AuthService();
    loginComponent = new LoginComponent(authService);
  })

  it('doLogin returns true when the user has not been authenticated', () => {
    spy = spyOn(authService, 'isAuthenticated').and.returnValue(false);
    expect(loginComponent.doLogin()).toBeTruthy();
    expect(authService.isAuthenticated).toHaveBeenCalled();
  });

  it('doLogin returns false when the user has been authenticated', () => {
    localStorage.setItem("userToken", "bhawna");
    expect(loginComponent.doLogin()).toBeFalsy();
  })

  afterEach(() => {
    localStorage.removeItem('userToken');
    authService = null;
    loginComponent = null;
  })

})