import {Component, View, NgFor, NgClass, ViewQuery, QueryList} from 'angular2/angular2';

import {KanvazPanel} from '../kanvaz_panel/kanvaz_panel';
import {KanvazPanelSequence} from '../kanvaz_panel_sequence/kanvaz_panel_sequence';
import {Kanvaz, KanvazService} from '../../services/KanvazService';
import {CodemirrorEditor} from '../codemirror_editor/codemirror_editor';

@Component({
  selector: 'kanvaz-editor',
  viewBindings: [KanvazService]
})
@View({
  styleUrls: ['./components/kanvaz_editor/kanvaz_editor.css'],
  templateUrl: './components/kanvaz_editor/kanvaz_editor.html?v=<%= VERSION %>',
  directives: [KanvazPanel, KanvazPanelSequence, CodemirrorEditor, NgFor, NgClass]
})
export class KanvazEditor {
  kanvaz:Kanvaz;
  panelSequence:KanvazPanelSequence;
  fileDrawerOpen:boolean = true;
  activeHtmlFile:string = 'index.html';
  activeCssFile:string = 'styles.css';
  activeJsFile:string = 'app.js';

  constructor(kanvazService: KanvazService, @ViewQuery(KanvazPanelSequence) panelSequences:QueryList<KanvazPanelSequence>) {
    this.kanvaz = kanvazService.create();
    this.panelSequences = panelSequences;
  }

  toggleFileDrawer() {
    this.fileDrawerOpen = !this.fileDrawerOpen;
  }

  isActiveFile(file) {
    return (file.name === this.activeCssFile || file.name === this.activeHtmlFile || file.name === this.activeJsFile);
  }

  // TODO(pascal): can we decouple here?
  openFile(file, htmlPanel:KanvazPanel, cssPanel:KanvazPanel, jsPanel:KanvazPanel) {
    var fileExt = file.name.substr((~-file.name.lastIndexOf(".") >>> 0) + 2);

    switch (fileExt) {
      case 'html':
        this.activeHtmlFile = file.name;
        this.panelSequences.first.setFocus(htmlPanel);
        break;
      case 'css':
        this.activeCssFile = file.name;
        this.panelSequences.first.setFocus(cssPanel);
        break;
      case 'js':
      case 'ts':
        this.activeJsFile = file.name;
        this.panelSequences.first.setFocus(jsPanel);
        break;
    }
  }

  promptNewFile() {
    var filename = prompt("Filename");

    if (filename !== null) {
      this.kanvaz.addFile(filename, '');
    }
  }
}
