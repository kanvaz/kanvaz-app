import {Component, View, ElementRef, Attribute, onInit, onChange, EventEmitter} from 'angular2/angular2';

// TODO(pascal): fix this
let styles = require('./codemirror_editor.css');

@Component({
  selector: 'codemirror-editor',
  properties: ['value'],
  events: ['change'],
  lifecycle: [onInit, onChange],
  exportAs: 'editor'
})
@View({
  template: `
    <style>${styles}</style>
    <div id="cm"></div>
  `
})
export class CodemirrorEditor {

  mode:string;

  value:string;

  editor:CodeMirror;

  change:EventEmitter = new EventEmitter();

  cursorPos;

  constructor(@Attribute('mode') mode:string, elementRef:ElementRef) {

    this.mode = mode;

    // TODO(pascal): this is way too hacky
    var domElement = elementRef.nativeElement.shadowRoot.querySelector('#cm'); 

    this.editor = CodeMirror(domElement, {
      mode: mode
    });

    this.editor.on('change', () => {
      this.change.next();
    });
  }

  setValue(value) {
    this.editor.setValue(value);
  }

  getValue() {
    return this.editor.getValue();
  }

  onInit() {
    this.setValue(this.value);
  }

  onChange() {
    var cursorPos = this.editor.getCursor();
    this.setValue(this.value);
    this.editor.setCursor(cursorPos);
  }
}
