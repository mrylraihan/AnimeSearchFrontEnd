import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeadquartersComponent } from './headquarters/headquarters.component';

const routes: Routes = [
  {path:'headquarters',component:HeadquartersComponent},
  {path:'**',redirectTo:'/headquarters',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
