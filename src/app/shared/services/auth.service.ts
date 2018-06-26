export class AuthService {
   private isAuthenticated = localStorage.token ? true : false;

  login(user) { // if user logged, save to local storage, token and information of user
    this.isAuthenticated = true;
    localStorage.setItem('token', user.token);
    localStorage.setItem('user', JSON.stringify(user.user));
  }

  logout() { // logout and clear local storage
    localStorage.clear();
    return this.isAuthenticated = false;
  }

  isLoggedIn(): boolean { // checked if user logged
    return this.isAuthenticated;
  }
}
