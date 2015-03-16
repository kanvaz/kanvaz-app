import {Component, Template, NgElement} from 'angular2/angular2';

@Component({
    selector: 'editor-iframe'  //TODO: default to camel-cased class name if not provided?
})
@Template({
    inline: `<iframe style="width: 100%;border: 3px dashed;">{{foo}}</iframe>`,
})
export class EditorIframe {
    constructor(el:NgElement) {
        this._el = el;
        this._document = this._el.domElement.firstChild.contentDocument;
        this._body = this._document.body;
        this.foo = 'wohooo!';
    }

    setContent (content) {
        this._body.innerHTML = content;//'<ul><li>foo</li><li>bar</li><ul>';
        console.log(content);
    }
}
