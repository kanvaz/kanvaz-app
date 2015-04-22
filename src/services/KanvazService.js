import { PromiseWrapper } from 'angular2/src/facade/async';
import { KanvazModel } from 'kanvaz-model';

export class KanvazService {

  create() {
    let completer = PromiseWrapper.completer();

    // TODO(pascal): extract kanvaz data
    completer.resolve(new KanvazModel([
      {
        name: 'index.html',
        content: `<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Kanvaz</title>
  </head>
  <body>
    <h1>Hello</h1>
  </body>
</html>`
      },
      {
        name: 'styles.css',
        content: `h1 {
  color: blue;
}`
      }
    ]));

    return completer.promise;
  }
}
