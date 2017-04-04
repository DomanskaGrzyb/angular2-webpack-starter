import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { VideoListComponent } from './video-list/video-list.component';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: VideoListComponent },
  { path: '**',    component: NoContentComponent },
];
