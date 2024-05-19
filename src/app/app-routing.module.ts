import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserdataComponent } from './userdata/userdata.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
  // { path: 'users', loadChildren: () => import("./users/users.module").then(m => m.UsersModule)},
  // { path: '', redirectTo: 'users', pathMatch: 'full' },
    { path: '', component: LoginComponent },
    { path: 'userdata/:id', component: UserdataComponent },
    { path: 'userdata', component: UserdataComponent },
    { path: 'userlist', component: UserlistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
