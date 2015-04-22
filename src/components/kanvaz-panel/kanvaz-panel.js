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

  constructor(
    @Attribute('active') active:String,
    @PropertySetter('hidden') hiddenSetter:Function,
    reference:NgElement
  ) {
    this.domElement = reference.domElement;

    if (active && active === 'false') {
      hiddenSetter(true);
    }
  }
}
