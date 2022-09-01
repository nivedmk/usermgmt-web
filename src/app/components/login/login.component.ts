import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SessionStorageService } from 'src/app/shared/services/session-storage.service';
import { AuthenticationService } from "../../shared/services/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    public auth: AuthenticationService,
    private router: Router,
    private sessionService: SessionStorageService,
  ) { }

  ngOnInit(): void {
    if (this.sessionService.Token) {
      this.router.navigateByUrl('/users')
    }
  }

  onFormSubmit() {
    if (this.auth.logInForm.valid) {
      this.auth.logInAPI().subscribe(
        (res: any) => {
          if (res.message === 'SUCCESS') {
            this.sessionService.setToken(res.token);
            this.sessionService.setUserName(res.user.userName);
            this.sessionService.setSuperUser(res.user.isSuperUser);
            console.log('Success');
            this.auth.logInForm.reset();
            this.router.navigateByUrl('/users');
          }
        }, err => {
          console.log(err);
        }
      )

    }
  }
}
