import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import * as globalVariables from "../config/global-variables";
import { FormBuilder, Validators } from "@angular/forms";
import { SessionStorageService } from "./session-storage.service";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {



  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private sessionStorageService: SessionStorageService,
    private router: Router,
  ) { }

  signUpForm = this.formBuilder.group({
    userName: ['', [Validators.required]],
    email: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(7)]],
    isSuperUser: [false]
  })

  logInForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(7)]],
  })

  signOut() {
    this.signOutAPI().subscribe(
      (res: any) => {
        if (res.message === 'SUCCESS') {
          this.sessionStorageService.removeToken();
          this.sessionStorageService.removeUserName();
          this.sessionStorageService.removeSuperUser();
          this.router.navigateByUrl('/login')
        }
      }, err => {
        console.log(err);

      })
  }

  singUpAPI() {
    return this.http.post(globalVariables.baseURL + 'users/add', this.signUpForm.value)
  }

  logInAPI() {
    return this.http.post(globalVariables.baseURL + 'users/login', this.logInForm.value)
  }

  signOutAPI() {
    return this.http.post(globalVariables.baseURL + 'users/logout', {})
  }


}
