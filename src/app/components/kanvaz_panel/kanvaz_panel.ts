import {
  Component,
  View,
  Parent,
  NgIf,
  ElementRef,
  Renderer} from 'angular2/angular2';
import {KanvazEditor} from '../kanvaz_editor/kanvaz_editor';
import {KanvazPanelSequence} from '../kanvaz_panel_sequence/kanvaz_panel_sequence';

// TODO(pascal): fix this
let styles = require('./kanvaz_panel.css');
let template = require('./kanvaz_panel.html');

@Component({
  selector: 'kanvaz-panel',
  properties: ['title', 'active'],
  exportAs: 'panel'
})
@View({
  template: `<style>${styles}</style>\n${template}`,
  directives: [NgIf]
})
export class KanvazPanel {

  active:boolean;
  title:string = '';
  nativeElement;

  constructor(@Parent() panelSequence: KanvazPanelSequence, elementRef: ElementRef, renderer: Renderer) {
    panelSequence.addPanel(this);
    // TODO(pascal): we shouldn't work with nativeElement directly
    this.nativeElement = elementRef.nativeElement;
  }
}
