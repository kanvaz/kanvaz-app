import {Component, View, Query, ViewQuery, QueryList, NgFor} from 'angular2/angular2';
import {KanvazPanel} from '../kanvaz_panel/kanvaz_panel';
import {KanvazEditor} from'../kanvaz_editor/kanvaz_editor';

@Component({
  selector: 'kanvaz-panel-sequence',
  exportAs: 'sequence'
})
@View({
  directives: [NgFor],
  template: '<ng-content></ng-content>'
})
export class KanvazPanelSequence {

  panels:Array<KanvazPanel> = [];

  // TODO(pascal): don't we wanna use `@Query` instead?
  addPanel(panel:KanvazPanel) {
    this.panels.push(panel);
  }

  togglePanel(panel:KanvazPanel) {
    panel.nativeElement.hidden = !panel.nativeElement.hidden;
    this.resetPanels();
  }

  openPanel(panel:KanvazPanel) {
    panel.nativeElement.hidden = false;
    this.resetPanels();
  }

  resetPanels() {
    var visiblePanels = this.panels.filter((panel) => {
      return panel.nativeElement.hidden !== true;
    });

    var width = 100 / visiblePanels.length,
        right = 0,
        left =  0;

    for (var i = 0; i < visiblePanels.length; i++) {

      var styles = visiblePanels[i].nativeElement.style;

      right = 100 - (width * (i+1));

      styles.top = 0;
      styles.bottom = 0;
      styles.left = left + '%';
      styles.right = right + '%';

      left += width;
    }
  }

  onInit() {
    this.resetPanels();
  }

  setFocus(panel:KanvazPanel) {
    this.panels.map((panel) => {
      panel.focus = false;
    });
    panel.focus = true;
  }
}
