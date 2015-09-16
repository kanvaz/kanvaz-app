import {Component, View, NgFor, NgClass, ViewQuery, QueryList} from 'angular2/angular2';
import {RouteParams} from 'angular2/router';

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
  panelSequences: QueryList<KanvazPanelSequence>;
  fileDrawerOpen:boolean = true;
  activeHtmlFile:string = 'index.html';
  activeCssFile:string = 'styles.css';
  activeJsFile:string = 'app.js';

  constructor(routeParams: RouteParams, kanvazService: KanvazService, @ViewQuery(KanvazPanelSequence) panelSequences:QueryList<KanvazPanelSequence>) {
    this.kanvaz = new Kanvaz([]);
    // FIXME: Get rid of RouteParams here
    // The KanvazEditor shouldn't know how to retrieve a Kanvaz
    // Ideally it would just get a Kanvaz or Observable<Kanvaz> from somewhere
    // and work with that

    let kanvazId = routeParams.get('kanvaz_id');
    if (!kanvazId) {
      this.kanvaz = kanvazService.create();
    }
    else {
      kanvazService
        .fetch(kanvazId)
        .then((kanvaz) => {
          this.kanvaz = kanvaz;
        });
    }
    // To test the backend:
    // 1. Start server (atelier-rest-api)
    // 2. Uncomment the following code
    // 3. Look at the console to get the id of the saved kanvaz
    // 4. Reload the app as /idOfKanvaz


    // kanvazService
    //   .save(this.kanvaz)
    //   .then(() => console.log, () => console.log);

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
        this.panelSequences.first.openPanel(htmlPanel);
        this.panelSequences.first.setFocus(htmlPanel);
        break;
      case 'css':
        this.activeCssFile = file.name;
        this.panelSequences.first.openPanel(cssPanel);
        this.panelSequences.first.setFocus(cssPanel);
        break;
      case 'js':
      case 'ts':
        this.activeJsFile = file.name;
        this.panelSequences.first.openPanel(jsPanel);
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
