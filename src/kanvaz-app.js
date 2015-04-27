import {bootstrap, Component, View, If, CSSClass, Query, onAllChangesDone} from 'angular2/angular2';
import {QueryList} from 'angular2/src/core/compiler/query_list';
import {KanvazService} from 'KanvazService';
import {KanvazHeader} from 'kanvaz-header';
import {KanvazButton} from 'kanvaz-button';
import {KanvazPanelSequence} from 'kanvaz-panel-sequence';
import {KanvazPanel} from 'kanvaz-panel';
import {KanvazFileDrawer} from 'kanvaz-file-drawer';
import {KanvazOutput} from 'kanvaz-output';
import {KanvazRunner} from 'kanvaz-runner';
import {AceEditor} from 'ace-editor';

const INITIAL_HTML_FILE = 'index.html';
const INITIAL_CSS_FILE = 'styles.css';
const INITIAL_JS_FILE = 'app.js';


@Component({
  selector: 'kanvaz-app',
  injectables: [KanvazService]
})
@View({
  templateUrl: 'kanvaz-app.html',
  directives: [
    KanvazHeader,
    KanvazButton,
    KanvazPanelSequence,
    KanvazPanel,
    KanvazFileDrawer,
    KanvazOutput,
    KanvazRunner,
    If,
    AceEditor
  ]
})
export class KanvazApp {

  constructor(kanvazService:KanvazService) {

    this.kanvazService = kanvazService;

    this.activeHTMLFile = INITIAL_HTML_FILE;
    this.activeCSSFile = INITIAL_CSS_FILE;
    this.activeJSFile = INITIAL_JS_FILE;

    // TODO(pascal): only create if new kanvaz is requested
    kanvazService.create().then((kanvaz) => {
      this.kanvaz = kanvaz;
    });
  }

  setOutputTarget(output:KanvazOutput) {
    this.outputTarget = output;
  }

  // TODO(pascal): discuss if explicit kanvas param would be better here
  updateKanvaz(filename:String, content:String) {
    this.kanvaz.writeFileContents(filename, content);
  }

  run() {
    this.outputTarget.execute(this.kanvaz);
  }
}

bootstrap(KanvazApp).then((kanvazComponentRef) => {
  // TODO(pascal): figure out if this is really the best way to do this. ISSUE (https://github.com/angular/angular/issues/1530)
  kanvazComponentRef.instance.run();
});
