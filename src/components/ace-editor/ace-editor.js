import {
  Component,
  View,
  NgElement,
  Attribute,
  onChange,
  EventEmitter
} from 'angular2/angular2';

@Component({
  selector: 'ace-editor',
  lifecycle: [onChange],
  events: ['change'],
  properties: {
    content: 'content'
  }
})
@View({
    // TODO(christoph): Shadow Dom usage doesn't seem to work here
    template: `<div class="ace-editor"><content></content></div>`
})
export class AceEditor {

  constructor(@Attribute('mode') mode:String, el: NgElement) {
    this.editor = ace.edit(el.domElement);
    this.mode = mode;
    this.change = new EventEmitter();

    this.editor.renderer.setShowGutter(false);
    this.editor.setHighlightActiveLine(false);
    this.editor.resize(true);

    if (this.mode) {
      this.editor.getSession().setMode("ace/mode/" + this.mode);
    }

    this.editor.on('change', () => {

      this.change.next();

      if (this.contentSetThroughSetter) {
        this.contentSetThroughSetter = false;
      }
    });
  }

  getContent() {
    return this.editor.getValue();
  }

  setContent(value, cursorPos) {
    this.contentSetThroughSetter = true;
    this.editor.setValue(value, cursorPos);
  }

  onChange(_) {
    this.setContent(this.content, 1);
  }
}
