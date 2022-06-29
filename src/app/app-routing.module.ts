import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './pages/todo/todo-list/todo-list.component';
import { UserFormComponent } from './pages/users/user-form/user-form.component';
import { UserListComponent } from './pages/users/user-list/user-list.component';

const routes: Routes = [
  { path: '', component: TodoListComponent},
  { path: 'form', component: UserFormComponent},
  { path: 'form/:id', component: UserFormComponent},
  { path: 'users', component: UserListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
