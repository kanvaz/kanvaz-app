import {Component, View, ElementRef} from 'angular2/angular2';

@Component({
  selector: 'ace-editor',
  properties: ['content']
})
@View({
    // TODO(christoph): Shadow Dom usage doesn't seem to work here
  template: `<div><content></content></div>`,
  styles: [`
    :host {
      display: block;
      height: 100%;
    }
  `]
})
export class AceEditor {

  editor;

  constructor(elementRef:ElementRef) {
    this.editor = ace.edit(elementRef.nativeElement);
    // this.mode = mode;
    // this.change = new EventEmitter();

    this.editor.renderer.setShowGutter(false);
    this.editor.setHighlightActiveLine(false);
    this.editor.getSession().setMode('ace/mode/html');
    this.editor.resize(true);

    this.editor.setValue('foo');

    // if (this.mode) {
    //   this.editor.getSession().setMode("ace/mode/" + this.mode);
    // }

    // this.editor.on('change', () => {

    //   this.change.next();

    //   if (this.contentSetThroughSetter) {
    //     this.contentSetThroughSetter = false;
    //   }
    // });
  }

  // getContent() {
  //   return this.editor.getValue();
  // }

  // setContent(value, cursorPos) {
  //   this.contentSetThroughSetter = true;
  //   this.editor.setValue(value, cursorPos);
  // }

  // onChange(_) {
  //   this.setContent(this.content, 1);
  // }
}
