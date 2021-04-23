import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProjectComponent } from './components/project/project.component';
import { TaskComponent } from './components/task/task.component';
import { UserComponent } from './components/user/user.component';
import { ViewComponent } from './components/view/view.component';

const routes: Routes = 
[
  {path: '', component: LoginComponent},
  {path: 'user', component: UserComponent},
  {path: 'project', component: ProjectComponent},
  {path: 'task', component: TaskComponent},
  {path: 'view', component: ViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
