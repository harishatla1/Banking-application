import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepositComponent } from './deposit/deposit.component';
import { HomeComponent } from './home/home.component';
import { OpenAccountComponent } from './open-account/open-account.component';

const routes: Routes = [
  {
    path: 'open',
    component: OpenAccountComponent
  },
  {
    path: 'home',
    component:  HomeComponent
  },
  {
    path: 'Deposit',
    component:   DepositComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
