import { Component, View, onAllChangesDone, Query } from 'angular2/angular2';
import { KanvazPanel } from 'kanvaz-panel';

@Component({
  selector: 'kanvaz-panel-sequence',
  lifecycle: [onAllChangesDone]
})
@View({
  template: '<content></content>'
})
export class KanvazPanelSequence {

  constructor(@Query(KanvazPanel) panelQuery:KanvazPanel) {
    this.panels = panelQuery._results;
    this.resetPanels();
  }

  togglePanel(panel) {
    panel.domElement.hidden = !panel.domElement.hidden;
    this.resetPanels();
  }

  resetPanels() {
    let visiblePanels = this.panels.filter((panel) => {
      return panel.domElement.hidden === false;
    });

    let width = 100 / visiblePanels.length,
        right = 0,
        left =  0;

    for (let i = 0; i < visiblePanels.length; i++) {

      let styles = visiblePanels[i].domElement.style;

      right = 100 - (width * (i+1));

      styles.top = 0;
      styles.bottom = 0;
      styles.left = left + '%';
      styles.right = right + '%';

      left += width;
    }
  }

  onAllChangesDone() {
    this.resetPanels();
  }
}
