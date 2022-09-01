import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() { }


  setToken(token: any) {
    sessionStorage.setItem('tkn', token);
  }

  get Token() {
    return sessionStorage.getItem('tkn');
  }

  removeToken() {
    sessionStorage.removeItem('tkn');
  }


  setUserName(username: any) {
    sessionStorage.setItem('username', username);
  }

  get UserName() {
    return sessionStorage.getItem('username');
  }

  removeUserName() {
    sessionStorage.removeItem('username');
  }

  setSuperUser(isSuperUser: any) {
    sessionStorage.setItem('isSuperUser', isSuperUser);
  }

  get isSuperUser() {
    return sessionStorage.getItem('isSuperUser');
  }

  removeSuperUser() {
    sessionStorage.removeItem('isSuperUser');
  }

}
