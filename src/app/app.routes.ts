import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { VideoListComponent } from './video-list/video-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'login',      component: LoginComponent },
  { path: 'list',      component: VideoListComponent },
  { path: '**',    component: NoContentComponent },
];
