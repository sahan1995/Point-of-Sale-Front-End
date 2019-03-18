import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerComponent} from './customer/customer.component';
import {ItemComponent} from './item/item.component';
import {MainwComponent} from "./mainw/mainw.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'customer',component:CustomerComponent},
  {path:'item',component:ItemComponent},
  {path:'',component:MainwComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[CustomerComponent,ItemComponent,MainwComponent]
