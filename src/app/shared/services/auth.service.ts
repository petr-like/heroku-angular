export class AuthService {
   private isAuthenticated = localStorage.token ? true : false;

  login(user) {
    this.isAuthenticated = true;
    localStorage.setItem('token', user.token);
    localStorage.setItem('user', JSON.stringify(user.user));
  }

  logout() {
    localStorage.clear();
    return this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
