/// <reference path="../../../../typings/tsd.d.ts" />

import {Component, View, CSSClass, NgFor} from 'angular2/angular2';

import {ACTIVE_JS_FILE, ACTIVE_HTML_FILE, ACTIVE_CSS_FILE, HTML_FILE_EXT, CSS_FILE_EXT, JS_FILE_EXT} from '../../config';

import {KanvazPanel} from '../kanvaz_panel/kanvaz_panel';
import {KanvazPanelSequence} from '../kanvaz_panel_sequence/kanvaz_panel_sequence';
import {KanvazService} from '../../services/kanvaz_service/kanvaz_service';
import {Kanvaz} from '../../model/kanvaz';

import {CodemirrorEditor} from '../codemirror_editor/codemirror_editor';

// TODO(pascal): fix this
let styles = require('./kanvaz_editor.css');
let template = require('./kanvaz_editor.html');

@Component({
  selector: 'kanvaz-editor'
})
@View({
  directives: [KanvazPanel, KanvazPanelSequence, CSSClass, CodemirrorEditor, NgFor],
  template: `<style>${styles}</style>\n${template}`
})
export class KanvazEditor {

  kanvaz:Kanvaz;

  fileDrawerOpen:boolean = true;

  activeHTMLFile:string = ACTIVE_HTML_FILE;

  activeJSFile:string = ACTIVE_JS_FILE;

  activeCSSFile:string = ACTIVE_CSS_FILE;

  constructor(kanvazService:KanvazService) {
    this.kanvaz = kanvazService.create();
  }

  toggleFileDrawer() {
    this.fileDrawerOpen = !this.fileDrawerOpen;
  }

  openFile(file) {
    var fileExt = file.name.substr((~-file.name.lastIndexOf(".") >>> 0) + 2);
    switch (fileExt) {
      case HTML_FILE_EXT:
        this.activeHTMLFile = file.name;
        break;
      case CSS_FILE_EXT:
        this.activeCSSFile = file.name;
        break;
      case JS_FILE_EXT:
        this.activeJSFile = file.name;
        break;
    }
  }

  promptNewFile() {
    var filename = prompt("Filename");

    if (filename !== null) {
      this.kanvaz.addFile(filename, '');
    }
  }
}
