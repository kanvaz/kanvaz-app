import {Component, Template, NgElement, Decorator} from 'angular2/angular2';
import {If} from 'angular2/angular2';
import {EditorIframe} from 'editorIframe';

@Component({
    selector: 'editor-app'  //TODO: default to camel-cased class name if not provided?
})
@Template({
    inline: `<div class="ace-editor" ace-editor #ace>Foo bar</div>
            <button (click)="editor.setContent()"">foo</button>
            <editor-iframe #editor></editor-iframe>`,
    directives: [AceEditor, EditorIframe]
})
export class EditorApp {
}

@Decorator({
  selector: '[ace-editor]'
})
class AceEditor {
  constructor(el: NgElement) {
    this.editor = ace.edit(el.domElement);
  }

  getContent () {
      return this.editor.getValue();
  }
}
