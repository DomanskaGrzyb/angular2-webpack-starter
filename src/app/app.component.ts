import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {

  // let env = require('node-env-file');

  constructor( public appState: AppState ) {}

  public ngOnInit() {}

}
