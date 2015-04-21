import { Component, View, Attribute, NgElement } from 'angular2/angular2';

@Component({
  selector: 'kanvaz-panel'
})
@View({
  templateUrl: 'kanvaz-panel.html'
})
export class KanvazPanel {

  constructor(@Attribute('active') active:String, reference:NgElement) {
    this.domElement = reference.domElement;

    if (active && active === 'false') {
      this.domElement.hidden = true;
    }
  }
}
