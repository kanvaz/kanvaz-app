import {Component, View} from 'angular2/angular2';

// TODO(pascal): fix this
let styles = require('./kanvaz_panel.css');
let template = require('./kanvaz_panel.html');

@Component({
  selector: 'kanvaz-panel',
  properties: ['title: title']
})
@View({
  template: `<style>${styles}</style>\n${template}`
})
export class KanvazPanel {

}
