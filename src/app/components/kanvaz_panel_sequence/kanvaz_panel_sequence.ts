import {Component, View, onAllChangesDone, onInit} from 'angular2/angular2';
import {KanvazPanel} from '../kanvaz_panel/kanvaz_panel';

@Component({
  selector: 'kanvaz-panel-sequence',
  lifecycle: [onInit],
  exportAs: 'sequence'
})
@View({
  template: '<content></content>'
})
export class KanvazPanelSequence {

  panels:List<KanvazPanel> = [];

  addPanel(panel:KanvazPanel) {
    this.panels.push(panel);
  }

  togglePanel(panel:KanvazPanel) {
    panel.nativeElement.hidden = !panel.nativeElement.hidden;
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
}

