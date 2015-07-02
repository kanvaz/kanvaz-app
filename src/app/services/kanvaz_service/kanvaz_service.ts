import {Inject} from 'angular2/angular2';
import {Http} from 'angular2/angular2';

import {ATELIER_ENDPOINT} from '../../config';
import {defaultKanvaz} from './default_kanvaz';
import {Kanvaz} from '../../model/kanvaz';

export class KanvazService {

  http:Http;

  constructor(@Inject(Http) http:Http) {
    this.http = http;
  }

  create() {
    // return this.http.request(ATELIER_ENDPOINT + '/new')
    //   .map(res => res.json())
    //   .map(data => new Kanvaz(data.files));
    return defaultKanvaz;
  }
}
