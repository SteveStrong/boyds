import { Component } from '@angular/core';

import { Tools } from 'ng-foundry-models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app' + Tools.generateUUID();
}
