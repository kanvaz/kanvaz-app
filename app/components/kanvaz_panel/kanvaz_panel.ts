import {Component, View, NgIf, ElementRef, Host, LifecycleEvent} from 'angular2/angular2';

import {KanvazPanelSequence} from '../kanvaz_panel_sequence/kanvaz_panel_sequence';

@Component({
  selector: 'kanvaz-panel',
  properties: ['title', 'active', 'filename', 'focus'],
  exportAs: 'panel',
  lifecycle: [LifecycleEvent.onChanges]
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
  focus:boolean;
  nativeElement;

  constructor(elementRef: ElementRef, @Host() panelSequence: KanvazPanelSequence) {
    panelSequence.addPanel(this);
    this.nativeElement = elementRef.nativeElement;
  }

  onChanges(_) {
    console.dir(_);
  }
}
