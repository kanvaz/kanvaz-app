import {Component, Template} from 'angular2/angular2';

@Component({
  selector: `pane`,
})
@Template({
  inline: `<content></content>`
})
export class Pane {}

@Component({
  selector: `panes`,
})
@Template({
  inline: `<content></content>`
})
export class Panes {}
