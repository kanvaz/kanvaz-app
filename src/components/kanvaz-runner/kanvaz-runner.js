import {Component, View, Query} from 'angular2/angular2';
import {KanvazOutput} from 'kanvaz-output';
import {KanvazService} from 'KanvazService';
import {AceEditor} from 'ace-editor';

@Component({
  selector: 'kanvaz-runner',
  injectables: [KanvazService]
})
@View({
  template: '<content></content>'
})
export class KanvazRunner {

  constructor(
    // @Query(AceEditor) aceEditorQuery:AceEditor,
    @Query(KanvazOutput) outputQuery:KanvazOutput,
    kanvazService:KanvazService
  ) {
    // this.editors = aceEditorQuery._results;
    this.output = outputQuery._results;

    //TODO(pascal): only create if really requested
    // kanvazService.create().then((kanvaz) => {
    //   this.kanvaz = kanvaz;
    //   this.editors[0].setContent(kanvaz.getFiles()[0].content, 1); // TODO(pascal): can we really assume that [0] is the html file?
    //   this.editors[1].setContent(kanvaz.getFiles()[1].content, 1);

    //   this.run(
    //     this.kanvaz,
    //   );
    // });
  }

  runInOutputPanel (
    kanvaz: Kanvaz,
    outputPanel: KanvazOutput
  ) {
    outputPanel.setCss(kanvaz.files[1].content);
    outputPanel.setContent(kanvaz.files[0].content);
    outputPanel.setScript(babel.transform(kanvaz.files[2].content).code);
  }
}
