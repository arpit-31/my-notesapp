import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{ path: 'create', component: CreateComponent},
{ path: 'home', component: HomeComponent},
{path:'create/:noteid',component: CreateComponent},
{ path: '', redirectTo: 'home',pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
