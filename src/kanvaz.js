import {bootstrap, Component, View, If, CSSClass, Query} from 'angular2/angular2';
import {KanvazHeader} from 'kanvaz-header';
import {KanvazPanelSequence} from 'kanvaz-panel-sequence';
import {KanvazPanel} from 'kanvaz-panel';
import {KanvazOutput} from 'kanvaz-output';
import {KanvazRunner} from 'kanvaz-runner';
import {AceEditor} from 'ace-editor';

@Component({
  selector: 'kanvaz'
})
@View({
  templateUrl: 'kanvaz.html',
  directives: [
    KanvazHeader,
    KanvazPanelSequence,
    KanvazPanel,
    KanvazOutput,
    KanvazRunner,
    If,
    AceEditor
  ]
})
export class Kanvaz {
  run (htmlPane: AceEditor, cssPane: AceEditor, jsPane: AceEditor, runPane: KanvazOutput) {
    runPane.setCss(cssPane.getContent());
    runPane.setContent(htmlPane.getContent());
    runPane.setScript(babel.transform(jsPane.getContent()).code);
  }

}

bootstrap(Kanvaz);
