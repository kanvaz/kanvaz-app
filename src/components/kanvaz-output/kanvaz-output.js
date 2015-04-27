import {Component, View, NgElement, Ancestor} from 'angular2/angular2';
import {KanvazApp} from 'kanvaz-app';
import {KanvazModel} from 'kanvaz-model';

@Component({
  selector: 'kanvaz-output'
})
@View({
  template: `<style>@import 'kanvaz-output.css';</style><iframe></iframe>`
})
export class KanvazOutput {

  constructor(app:KanvazApp, el:NgElement) {

    app.setOutputTarget(this);

    this._el = el;
    this._document = this._el.domElement.firstChild.contentDocument;
    this._body = this._document.body;
    this._head = this._document.head;
  }

  get styleElement() {
    if (!this._styleElement) {
      this._styleElement = this._document.createElement('style');
      this._head.appendChild(this._styleElement);
    }
    return this._styleElement;
  }

  setContent (content) {
    this._body.innerHTML = content;
  }

  setScript (content) {
    var script = this._document.createElement('script');
    script.innerHTML = content;
    this._body.appendChild(script);
  }

  setCss (content) {
    this.styleElement.textContent = content;
    this._head.appendChild(this.styleElement);
  }

  execute(kanvaz:KanvazModel) {
    // TODO(pascal): don't be explicit here
    this.setCss(kanvaz.files[1].content);
    this.setContent(kanvaz.files[0].content);
    this.setScript(babel.transform(kanvaz.files[2].content).code);
  }
}
