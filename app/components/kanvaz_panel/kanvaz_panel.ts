import {Component, View, Attribute, NgIf, ElementRef, Host} from 'angular2/angular2';

import {KanvazPanelSequence} from '../kanvaz_panel_sequence/kanvaz_panel_sequence';

@Component({
  selector: 'kanvaz-panel',
  properties: ['title', 'active', 'filename', 'focus'],
  exportAs: 'panel'
})
@View({
  styleUrls: ['./components/kanvaz_panel/kanvaz_panel.css'],
  templateUrl: './components/kanvaz_panel/kanvaz_panel.html',
  directives: [NgIf]
})
export class KanvazPanel {

  active:boolean;
  title:string = '';
  filename:string = '';
  name: string = '';
  focus:boolean;
  nativeElement;

  constructor(elementRef: ElementRef, @Attribute('name') name:string, @Host() panelSequence: KanvazPanelSequence) {
    panelSequence.addPanel(this);
    this.name = name;
    this.nativeElement = elementRef.nativeElement;
  }
}
