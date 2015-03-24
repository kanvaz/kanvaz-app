import {Component, Template, NgElement} from 'angular2/angular2';

@Component({
  selector: 'ace-editor'
})
@Template({
    inline: `<div class="ace-editor">Foo bar</div>`,
})
export class AceEditor {
  constructor(el: NgElement) {
    this.editor = ace.edit(el.domElement);
  }

  getContent () {
      return this.editor.getValue();
  }
}
