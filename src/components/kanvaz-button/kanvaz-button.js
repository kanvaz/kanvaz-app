import {Component, View, PropertySetter, onChange} from 'angular2/angular2';

@Component({
  selector: 'kanvaz-button',
  properties: {
    active: 'active'
  },
  lifecycle: [onChange]
})
@View({
  templateUrl: 'kanvaz-button.html'
})
export class KanvazButton {

  constructor(@PropertySetter('class.active') activeClassSetter) {
    this.activeClassSetter = activeClassSetter;
  }

  // TODO(pascal): replace this with [class]
  // once https://github.com/angular/angular/issues/1472#issuecomment-95589789
  // is fixed.
  onChange(_) {
    this.activeClassSetter(this.active);
  }
}
