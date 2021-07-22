import { AuthService } from './auth.service';

describe('Testing Auth Service', () => {

  let authService: AuthService;

  beforeEach(() => {
    authService = new AuthService();
  })

  it('should return true if user is authenticated', () => {
    localStorage.setItem('userToken', 'admin');
    expect(authService.isAuthenticated()).toBeTruthy();
  })

  afterEach(() => {
    authService = null;
    localStorage.removeItem('userToken');
  })

})