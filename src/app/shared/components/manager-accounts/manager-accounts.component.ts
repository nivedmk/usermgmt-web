import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { SessionStorageService } from 'src/app/shared/services/session-storage.service';

@Component({
  selector: 'app-manager-accounts',
  templateUrl: './manager-accounts.component.html',
  styleUrls: ['./manager-accounts.component.scss']
})
export class ManagerAccountsComponent implements OnInit {
  value: any;
  constructor(
    private route: ActivatedRoute,
    public sessionService: SessionStorageService,
    public userService: UserService
  ) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {
      this.value = params.get('id');
    });
    if (this.value) {
      this.userService.getUser(this.value).subscribe((res: any) => {
        if (res.message === "SUCCESS") {
          this.userService.userForm.patchValue(res.user)
        }
      })
    }
  }

  onFormSubmit() {
    this.userService.patchUser(this.value, this.userService.userForm.value).subscribe((res: any) => {
      console.log(res)
    })
  }

}
