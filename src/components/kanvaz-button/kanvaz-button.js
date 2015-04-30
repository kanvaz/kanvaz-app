import {Component, View} from 'angular2/angular2';

@Component({
  selector: 'kanvaz-button',
  properties: {
    active: 'active'
  },
  hostProperties: {
    // TODO(pascal): replace this with [class]
    // once https://github.com/angular/angular/issues/1472#issuecomment-95589789
    // is fixed.
    'active': 'class.active'
  }
})
@View({
  templateUrl: 'kanvaz-button.html'
})
export class KanvazButton {

}
