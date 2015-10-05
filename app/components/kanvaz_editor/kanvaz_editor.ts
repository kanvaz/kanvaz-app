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
  fileDrawerOpen:boolean = true;
  activeFiles = {
    html: 'index.html',
    css: 'styles.css',
    js: 'app.js'
  };

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

    panelSequences.onChange(() => this.panelSequence = panelSequences.first);
  }

  toggleFileDrawer() {
    this.fileDrawerOpen = !this.fileDrawerOpen;
  }

  isActiveFile (file: any) :boolean {
    let ext = this.getFileNameExtension(file.name);
    return this.activeFiles[ext] === file.name;
  }

  getFileNameExtension (fileName: string) :string {
    return fileName.substr((~-fileName.lastIndexOf(".") >>> 0) + 2);
  }

  openFile(file) {
    var fileExt = this.getFileNameExtension(file.name);

    this.activeFiles[fileExt] = file.name;
    this.panelSequence.openPanelByName(fileExt);
    this.panelSequence.focusPanelByName(fileExt);
  }

  promptNewFile() {
    var filename = prompt("Filename");

    if (filename !== null) {
      this.kanvaz.addFile(filename, '');
    }
  }
}
