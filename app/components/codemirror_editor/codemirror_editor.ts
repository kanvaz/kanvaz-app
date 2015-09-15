import {Component, View, ElementRef, Attribute, EventEmitter, ViewEncapsulation} from 'angular2/angular2';

@Component({
  selector: 'codemirror-editor',
  properties: ['value'],
  events: ['change'],
  exportAs: 'editor'
})
@View({
  styleUrls: ['./components/codemirror_editor/codemirror_editor.css'],
  template: '',
  encapsulation: ViewEncapsulation.None
})
export class CodemirrorEditor {

  mode:string;
  value:string;
  editor;
  change:EventEmitter = new EventEmitter();
  cursorPos;

  constructor(@Attribute('mode') mode:string, elementRef:ElementRef) {

    this.mode = mode;
    var domElement = elementRef.nativeElement;

    this.editor = CodeMirror(domElement, {
      mode: this.mode
    });

    this.editor.on('change', () => {
      this.change.next(null);
    });
  }

  setValue(value) {
    this.editor.setValue(this.value);
  }

  getValue() {
    return this.editor.getValue();
  }

  onInit() {
    this.setValue(this.value);
  }

  onChanges() {
    var cursorPos = this.editor.getCursor();
    this.setValue(this.value);
    this.editor.setCursor(cursorPos);
  }
}
