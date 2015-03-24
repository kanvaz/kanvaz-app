import {Component, Template, NgElement, Decorator} from 'angular2/angular2';
import {If} from 'angular2/angular2';
import {EditorIframe} from 'editorIframe';
import {AceEditor} from 'aceEditor';

@Component({
    selector: 'editor-app'  //TODO: default to camel-cased class name if not provided?
})
@Template({
    inline: `<ace-editor #ace></ace-editor>
            <button (click)="editor.setContent(ace.getContent())"">foo</button>
            <editor-iframe #editor></editor-iframe>`,
    directives: [AceEditor, EditorIframe]
})
export class EditorApp {
}
