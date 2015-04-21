import {
  Component,
  View,
  If,
  Parent,
  NgElement
} from 'angular2/angular2';

@Component({
  selector: `panes`,
  lifecycle: [onAllChangesDone]
})
@Template({
  inline: `<content></content>`
})
export class Panes {

  constructor(el: NgElement) {
    this.el = el;
    console.dir(el);
    this.panes = [];
  }

  addPane(pane) {
    this.panes.push(pane);
  }

  onAllChangesDone() {
    console.log('all changes are done');
  }






  // setFixWidths() {
  //   this.panes.forEach((pane) => {
  //     var width = parseInt(pane.el.domElement.clientWidth, 10);
  //     pane.el.domElement.style.flex = '0 0 ' + width;
  //     console.dir(pane);
  //   });
  // }

  recalculatePanes() {
    var totalSpace = parseInt(this.el.domElement.clientWidth, 10);
    var paneWidths = this.panes.map((pane) => {
      return parseInt(pane.el.domElement.clientWidth, 10);
    });
    console.log('Total space', totalSpace);
    console.log('Pane widths', paneWidths);
  }
}

@Component({
  selector: `pane`,
  bind: {
    'resizable': 'resizable'
  }
})
@Template({
  inline: `
    <div class="pane-content">
      <content></content>
    </div>
    <pane-resizer *if="resizable"></pane-resizer>
  `,
  directives: [If, PaneResizer]
})
export class Pane {

  constructor(el: NgElement, @Parent() panes:Panes) {
    this.el = el;
    this.panes = panes;
    this.panes.addPane(this);
  }

  // fixWidth() {
  //   this.panes.setFixWidths();
  // }

  resize(x) {
    var paneWidth = parseInt(this.el.domElement.clientWidth, 10);
    var newPaneWidth = x + paneWidth;
    this.el.domElement.style.flex = '0 0 ' +newPaneWidth + 'px';
  }
}

@Component({
  selector: 'pane-resizer',
  events: {
    'mousedown': 'onMouseDown($event)'
  }
})
@Template({
  inline: `<div></div>`
})
class PaneResizer {

  constructor(element: NgElement, @Parent pane:Pane) {
    this.el = element;
    this.lastX = 0;
    this.pane = pane;
  }

  onMouseDown($event) {
    $event.preventDefault();
    document.body.style.cursor = 'ew-resize';
    this.el.domElement.classList.add('hover');

    // this.pane.fixWidth();
    this.lastX = $event.pageX;

    this.move = this.onMouseMove.bind(this);
    this.up = this.onMouseUp.bind(this);

    document.addEventListener('mousemove', this.move, false);
    document.addEventListener('mouseup', this.up, false);
  }

  onMouseMove($event) {
    $event.preventDefault();

    var x = $event.pageX - this.lastX;

    this.lastX = $event.pageX;
    this.pane.resize(x);
  }

  onMouseUp($event) {
    this.el.domElement.classList.remove('hover');
    document.body.style.cursor = 'default';
    document.removeEventListener('mouseup', this.up);
    document.removeEventListener('mousemove', this.move);
  }
}
