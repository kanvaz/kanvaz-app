/// <reference path="../../../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';

import {KanvazPanel} from '../kanvaz_panel/kanvaz_panel';
import {KanvazPanelSequence} from '../kanvaz_panel_sequence/kanvaz_panel_sequence';

// TODO(pascal): fix this
let styles = require('./kanvaz_editor.css');
let template = require('./kanvaz_editor.html');

@Component({
  selector: 'kanvaz-editor'
})
@View({
  directives: [KanvazPanel, KanvazPanelSequence],
  template: `<style>${styles}</style>\n${template}`
})
export class KanvazEditor {

  panelSequence: KanvazPanelSequence;

  setPanelSequence(panelSequence) {
    this.panelSequence = panelSequence;
  }
}
