import {Component, Template, NgElement, Decorator} from 'angular2/angular2';
import {If} from 'angular2/angular2';

@Component({
    selector: 'editor-app'  //TODO: default to camel-cased class name if not provided?
})
@Template({
    inline: `<div class="ace-editor" ace-editor>Foo bar</div>`,
    directives: [AceEditor]
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
}
