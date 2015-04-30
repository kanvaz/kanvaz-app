import {
  Component, 
  View, 
  Attribute,
  NgElement
} from 'angular2/angular2';

@Component({
  selector: 'kanvaz-panel',
  properties: {
    title: 'title'
  }
})
@View({
  templateUrl: 'kanvaz-panel.html'
})
export class KanvazPanel {

  constructor(reference:NgElement) {
    this.domElement = reference.domElement;
  }

}
