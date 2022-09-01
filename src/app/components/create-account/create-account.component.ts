import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorageService } from 'src/app/shared/services/session-storage.service';

import { AuthenticationService } from "../../shared/services/authentication.service";

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  constructor(
    public auth: AuthenticationService,
    private router: Router,
    public sessionService: SessionStorageService
  ) { }

  ngOnInit(): void {
    if (this.sessionService.Token) {
      this.router.navigateByUrl('/home')
    }
  }

  onFormSubmit() {
    if (this.auth.signUpForm.valid) {
      this.auth.singUpAPI().subscribe(
        (res: any) => {
          if (res.message === 'SUCCESS') {
            console.log('Success');
            this.sessionService.setToken(res.response.token)
            this.sessionService.setUserName(res.response.user.userName)
            this.auth.signUpForm.reset();
            this.router.navigateByUrl('/users');
          }
        }, err => {
          console.log(err);
        }
      )

    }
  }

}
