import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignTestComponent } from './assign-test/assign-test.component';
import { AttendTestComponent } from './attend-test/attend-test.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UploadTestComponent } from './upload-test/upload-test.component';
import { ViewTestComponent } from './view-test/view-test.component';
import { ViewUsersComponent } from './view-users/view-users.component';


const routes: Routes = [
  { path: '', component: UploadTestComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'upload-test', component: UploadTestComponent },
  { path: 'assign-test', component: AssignTestComponent },
  { path: 'attend-test', component: AttendTestComponent },
  { path: 'view-test', component: ViewTestComponent },
  { path: 'view-user', component: ViewUsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
