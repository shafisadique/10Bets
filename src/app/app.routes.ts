import { Routes } from '@angular/router';
import { MainBodyComponent } from './main-body/main-body.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AuthGuard } from './guard/auth.guard';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { NotificationComponent } from './components/notification/notification.component';

export const routes: Routes = [
  {path:'',component:MainLayoutComponent,canActivate:[AuthGuard],children:[
    { path: '', component: MainBodyComponent },
    {path:'my-ledger',loadComponent:()=>import('../app/components/myledger/myledger.component').then(m=>m.MyledgerComponent)},
    {path:'sport-details/:matchcode',loadComponent:()=>import('../app/components/sport-details/sport-details.component').then(m=>m.SportDetailsComponent)},
    {path:'in-play',loadComponent:()=>import('../app/components/inplay/inplay.component').then(m=>m.InplayComponent)},
    {path:'my-profile',loadComponent:()=>import('../app/profile/profile.component').then(m=>m.ProfileComponent)},
  ]}, 
  {path:'login',loadComponent:()=>import('../app/login/login.component').then(m=>m.LoginComponent)},
  {path:'tc',pathMatch:'full' ,component:NotificationComponent},

  {
    path: '**',
    component: ErrorpageComponent,
  },
];



