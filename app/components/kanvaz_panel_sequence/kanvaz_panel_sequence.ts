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
    this.openPanelByPredicate((val) => val === panel)
  }

  openPanelByName (name: string) {
    this.openPanelByPredicate((panel) => panel.name === name);
  }

  openPanelByPredicate (predicate: (panel: KanvazPanel) => boolean) {
    let panel = this.getPanelByPredicate(predicate);
    if (!panel) {
      throw new Error ('KanvazPanelSequenz => openPanelByPredicate: unable to get panel');
    }

    panel.nativeElement.hidden = false;
    this.resetPanels();
  }

  getPanelByName (name: string) {
    return this.getPanelByPredicate((panel) => panel.name === name);
  }

  getPanelByPredicate (predicate: (panel: KanvazPanel) => boolean) {
    return this.panels.find(predicate);
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

  focusPanel(panel:KanvazPanel) {
    this.focusPanelByPredicate((val) => val === panel);
  }

  focusPanelByName (name: string) {
    this.focusPanelByPredicate((panel) => panel.name === name);
  }

  focusPanelByPredicate (predicate: (panel: KanvazPanel) => boolean) {
    let panel = this.getPanelByPredicate(predicate);
    if (!panel) {
      throw new Error ('KanvazPanelSequenz => focusPanelByPredicate: unable to get panel');
    }

    this.panels.map((panel) => panel.focus = false);
    panel.focus = true;
  }

}
