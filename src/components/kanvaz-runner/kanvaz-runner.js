import {Component, View, Query} from 'angular2/angular2';
import {KanvazOutput} from 'kanvaz-output';
import {AceEditor} from 'ace-editor';

@Component({
  selector: 'kanvaz-runner'
})
@View({
  template: '<content></content>'
})
export class KanvazRunner {

  constructor(@Query(AceEditor) aceEditorQuery:AceEditor, @Query(KanvazOutput) outputQuery:KanvazOutput) {
    this.editors = aceEditorQuery._results;
    this.output = outputQuery._results;
    // TODO(pascal): this is quite hacky Query._results is async, also not sure if that's the way to get hold of'em.
    setTimeout(() => {
      this.run(this.editors[0], this.editors[1], this.editors[2], this.output[0]);
    }, 0);
  }

  run (htmlPane: AceEditor, cssPane: AceEditor, jsPane: AceEditor, runPane: KanvazOutput) {

    runPane.setCss(cssPane.getContent());
    runPane.setContent(htmlPane.getContent());
    runPane.setScript(babel.transform(jsPane.getContent()).code);
  }
}
