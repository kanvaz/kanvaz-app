import {
  Component,
  View,
  NgElement,
  Attribute
} from 'angular2/angular2';

@Component({
  selector: 'ace-editor'
})
@View({
    // FIXME: Shadow Dom usage doesn't seem to work here
    template: `<div class="ace-editor"><content></content></div>`
})
export class AceEditor {

  constructor(@Attribute('mode') mode:String, el: NgElement) {
    this.editor = ace.edit(el.domElement);
    this.editor.renderer.setShowGutter(false);
    this.editor.setHighlightActiveLine(false);
    this.mode = mode;
    if (this.mode) {
      this.editor.getSession().setMode("ace/mode/" + this.mode);
    }
  }

  getContent() {
    return this.editor.getValue();
  }
}
