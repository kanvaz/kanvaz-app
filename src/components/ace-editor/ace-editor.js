import {
  Component,
  View,
  NgElement,
  EventEmitter
} from 'angular2/angular2';

@Component({
  selector: 'ace-editor'
})
@View({
    // FIXME: Shadow Dom usage doesn't seem to work here
    template: `<div class="ace-editor"><content></content></div>`
})
export class AceEditor {

  constructor(el: NgElement) {
    this.editor = ace.edit(el.domElement);
    this.editor.renderer.setShowGutter(false);
  }

  getContent() {
    return this.editor.getValue();
  }
}
