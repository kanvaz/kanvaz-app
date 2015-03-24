import {Component, Template, NgElement, Decorator} from 'angular2/angular2';
import {If} from 'angular2/angular2';
import {EditorIframe} from 'editorIframe';
import {AceEditor} from 'aceEditor';

@Component({
    selector: 'editor-app'  //TODO: default to camel-cased class name if not provided?
})
@Template({
    url: `editor-app.tpl.html`,
    directives: [AceEditor, EditorIframe]
})
export class EditorApp {

    run (htmlPane: AceEditor, jsPane: AceEditor, runPane: EditorIFrame) {
        runPane.setContent(htmlPane.getContent());
        runPane.setScript(jsPane.getContent());
    }
}
