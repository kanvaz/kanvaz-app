import {Component, View, ElementRef, Attribute, LifecycleEvent, EventEmitter, ViewEncapsulation} from 'angular2/angular2';

@Component({
  selector: 'codemirror-editor',
  properties: ['value'],
  events: ['change'],
  lifecycle: [LifecycleEvent.onInit, LifecycleEvent.onChange],
  exportAs: 'editor'
})
@View({
  styleUrls: ['./components/codemirror_editor/codemirror_editor.css'],
  template: '',
  encapsulation: ViewEncapsulation.NONE
})
export class CodemirrorEditor {

  mode:string;
  value:string;
  editor:CodeMirror;
  change:EventEmitter = new EventEmitter();
  cursorPos;

  constructor(@Attribute('mode') mode:string, elementRef:ElementRef) {

    this.mode = mode;
    var domElement = elementRef.nativeElement;

    this.editor = CodeMirror(domElement, {
      mode: mode
    });

    this.editor.on('change', () => {
      this.change.next();
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

  onChange() {
    var cursorPos = this.editor.getCursor();
    this.setValue(this.value);
    this.editor.setCursor(cursorPos);
  }
}

