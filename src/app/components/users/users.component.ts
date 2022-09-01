import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import * as globalVariables from "../../shared/config/global-variables";
import { SessionStorageService } from 'src/app/shared/services/session-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['User Name', 'Email ', 'User Type', 'Date Of Join'];
  usersList: any = [];

  constructor(
    private http: HttpClient,
    public sessionService: SessionStorageService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    if (!this.sessionService.Token) {
      this.router.navigateByUrl('/login');
    }
    this.init();
  }

  init() {
    this.http.get(globalVariables.baseURL + 'users').subscribe((res: any) => {
      if (res) {
        this.usersList = res.users;
      }
    }, err => {
      console.log(err);
    })
  }

  delete(id: any) {
    this.http.delete(globalVariables.baseURL + 'users/' + id).subscribe((res: any) => {
      if (res.message === "SUCCESS") {
        this.init();
      }
    }, err => {
      console.log(err)
    })
  }

  createNewUser(id: any) {
    if (id === null) {
      console.log('here')
      this.router.navigateByUrl('/add-user');
    }
    if (id) {
      this.router.navigateByUrl('/add-user/' + id);
    }
  }

}
