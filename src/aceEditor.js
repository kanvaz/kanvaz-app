import {Component, Template, NgElement, EventEmitter} from 'angular2/angular2';

@Component({
  selector: 'ace-editor'
})
@Template({
    // FIXME: Shadow Dom usage doesn't seem to work here
    inline: `<div class="ace-editor"><content></content></div>`
})
export class AceEditor {

  constructor(@EventEmitter('change') changeHandler:Function, el: NgElement) {
    this.editor = ace.edit(el.domElement);
    this.changeHandler = changeHandler;

    // TODO(Pascal): This should rather be done declaratively
    this.editor.on('change', () => {
      this.changeHandler();
    });
  }

  getContent() {
    return this.editor.getValue();
  }
}
