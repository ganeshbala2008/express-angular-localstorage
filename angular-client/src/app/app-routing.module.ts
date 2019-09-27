import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    data: { title: 'List of users' }
  },
  {
    path: 'user-detail/:id',
    component: UserDetailComponent,
    data: { title: 'User Details' }
  },
  {
    path: 'user/add',
    component: UserAddComponent,
    data: { title: 'Add user' }
  },
  { path: '',
    redirectTo: '/user',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
