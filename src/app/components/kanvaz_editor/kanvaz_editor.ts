/// <reference path="../../../../typings/tsd.d.ts" />

import {Component, View, CSSClass, NgFor} from 'angular2/angular2';

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

  constructor(kanvazService:KanvazService) {
    this.kanvaz = kanvazService.create();
  }

  toggleFileDrawer() {
    this.fileDrawerOpen = !this.fileDrawerOpen;
  }

  promptNewFile() {
    var filename = prompt("Filename");

    if (filename !== null) {
      this.kanvaz.addFile(filename, '');
    }
  }
}
