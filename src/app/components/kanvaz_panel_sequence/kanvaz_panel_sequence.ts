import {Component, View} from 'angular2/angular2';
import {forwardRef, Inject, bind, Unbounded} from 'angular2/angular2';
import {KanvazPanel} from '../kanvaz_panel/kanvaz_panel';
import {KanvazEditor} from '../kanvaz_editor/kanvaz_editor';

@Component({
  selector: 'kanvaz-panel-sequence'
})
@View({
  template: '<content></content>'
  // directives: [
  //   bind(forwardRef(() => KanvazEditor)).toClass(forwardRef(() => KanvazEditor))
  // ]
})
export class KanvazPanelSequence {

  // constructor(@Inject(forwardRef(() => KanvazEditor)) editor: KanvazEditor) {
    // console.dir(editor);
  constructor(editor: KanvazEditor) {
    console.dir(editor);
    // TODO(pascal): this is quite hacky Query._results is async,
    // also not sure if that's the way to get hold of'em.
    // this.panels = panelQuery._results;
  }

  // togglePanel(panel) {
  //   panel.domElement.hidden = !panel.domElement.hidden;
  //   this.resetPanels();
  // }

  // resetPanels() {
  //   let visiblePanels = this.panels.filter((panel) => {
  //     return panel.domElement.hidden === false;
  //   });

  //   let width = 100 / visiblePanels.length,
  //       right = 0,
  //       left =  0;

  //   for (let i = 0; i < visiblePanels.length; i++) {

  //     let styles = visiblePanels[i].domElement.style;

  //     right = 100 - (width * (i+1));

  //     styles.top = 0;
  //     styles.bottom = 0;
  //     styles.left = left + '%';
  //     styles.right = right + '%';

  //     left += width;
  //   }
  // }
}

