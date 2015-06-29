import {Component, View, ElementRef, Attribute, onInit} from 'angular2/angular2';

// TODO(pascal): fix this
let styles = require('./codemirror_editor.css');

@Component({
  selector: 'codemirror-editor',
  properties: ['value'],
  lifecycle: [onInit]
})
@View({
  template: `
    <style>${styles}</style>
    <div id="codemirror"></div>
  `
})
export class CodemirrorEditor {

  mode:string;

  editor:CodeMirror;

  constructor(@Attribute('mode') mode:string, elementRef:ElementRef) {

    this.mode = mode;

    // TODO(pascal): this is way too hacky
    var domElement = elementRef
                        .nativeElement
                        .shadowRoot
                        .querySelector('#codemirror'); 

    this.editor = CodeMirror(domElement, {
      mode: mode
    });
  }

  onInit() {
    this.editor.setValue(this.value);
  }
}
