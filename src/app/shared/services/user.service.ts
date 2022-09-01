import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import * as globalVariables from "../config/global-variables";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
  ) { }

  userForm = this.formBuilder.group({
    _id: [0],
    userName: ['', [Validators.required]],
    email: ['', Validators.required],
    isSuperUser: [false]
  });


  initializeFormGroup() {
    this.userForm.setValue({
      _id: 0,
      userName: '',
      email: '',
      isSuperUser: false
    });
  }


  getUser(id: any) {
    return this.http.get(globalVariables.baseURL + 'users/' + id)
  }

  patchUser(id: any, body: any) {
    return this.http.patch(globalVariables.baseURL + 'users/' + id, body)
  }

}
