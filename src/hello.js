import {Component, Template, NgElement, Decorator} from 'angular2/angular2';
import {If} from 'angular2/angular2';
import {EditorIframe} from 'editorIframe';

@Component({
    selector: 'editor-app'  //TODO: default to camel-cased class name if not provided?
})
@Template({
    inline: `<ace-editor style="width:100%; height:100%; display:block;"></ace-editor>
            <button (click)="editor.setContent()"">foo</button>
            <editor-iframe #editor></editor-iframe>`,
    directives: [AceEditor, EditorIframe]
})
export class EditorApp {
}

@Component({
  selector: 'ace-editor'
})
@Template({
    inline: `<div class="ace-editor">Foo bar</div>`,
})
class AceEditor {
  constructor(el: NgElement) {
    this.editor = ace.edit(el.domElement);
  }

  getContent () {
      return this.editor.getValue();
  }
}
