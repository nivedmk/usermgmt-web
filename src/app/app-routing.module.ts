import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { ManagerAccountsComponent } from './shared/components/manager-accounts/manager-accounts.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'create-acount',
    component: CreateAccountComponent
  },
  {
    path: 'add-user',
    component: ManagerAccountsComponent
  },
  {
    path: 'add-user/:id',
    component: ManagerAccountsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
