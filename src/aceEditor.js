import {Component, Template, NgElement} from 'angular2/angular2';

@Component({
  selector: 'ace-editor'
})
@Template({
    // FIXME: Shadow Dom usage doesn't seem to work here
    inline: `<div class="ace-editor"><content></content></div>`,
})
export class AceEditor {
  constructor(el: NgElement) {
    this.editor = ace.edit(el.domElement);
  }

  getContent () {
      return this.editor.getValue();
  }
}
