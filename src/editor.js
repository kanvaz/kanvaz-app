import {Component, Template, Query} from 'angular2/angular2';
import {Pane, Panes} from 'pane';
import {Output} from 'output';
import {AceEditor} from 'aceEditor';

@Component({
  selector: 'editor'
})
@Template({
  url: `editor.html`,
  directives: [
    AceEditor,
    Output,
    Pane,
    Panes
  ]
})
export class Editor {

  run (htmlPane: AceEditor, cssPane: AceEditor, jsPane: AceEditor, runPane: Output) {
    runPane.setCss(cssPane.getContent());
    runPane.setContent(htmlPane.getContent());
    runPane.setScript(jsPane.getContent());
  }
}
