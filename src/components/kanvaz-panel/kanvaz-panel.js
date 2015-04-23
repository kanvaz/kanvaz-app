import {
  Component, 
  View, 
  Attribute,
  PropertySetter,
  NgElement
} from 'angular2/angular2';

@Component({
  selector: 'kanvaz-panel'
})
@View({
  templateUrl: 'kanvaz-panel.html'
})
export class KanvazPanel {

  constructor(reference:NgElement) {
    this.domElement = reference.domElement;
  }

}
