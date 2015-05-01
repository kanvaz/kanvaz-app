import { PromiseWrapper } from 'angular2/src/facade/async';
import { Kanvaz } from 'kanvaz';
import { defaultKanvaz } from 'default-kanvaz';

export class KanvazService {

  create() {
    let completer = PromiseWrapper.completer();
    completer.resolve(defaultKanvaz);
    return completer.promise;
  }
}
