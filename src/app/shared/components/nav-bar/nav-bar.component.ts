import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from "../../services/authentication.service";
import { SessionStorageService } from '../../services/session-storage.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  logInStatusText: string = 'Log In'

  constructor(
    public auth: AuthenticationService,
    public sessionService: SessionStorageService,
  ) {

  }

  ngOnInit(): void {
  }

  signOut() {
    this.auth.signOut()
  }



}
