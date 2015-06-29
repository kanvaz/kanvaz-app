/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View, coreDirectives} from 'angular2/angular2';
import {RouteConfig, RouterOutlet, RouterLink, Router} from 'angular2/router';

import {KanvazEditor} from './kanvaz_editor/kanvaz_editor';

@Component({
  selector: 'kanvaz-app'
})
@View({
  directives: [RouterOutlet, RouterLink, coreDirectives],
  template:`
    <router-outlet></router-outlet>
  `
})
@RouteConfig([
  { path: '/', component: KanvazEditor },
  { path: '/:kanvaz_id/:version', component: KanvazEditor },
  { path: '/:user_id/:kanvaz_id/:version', component: KanvazEditor }
])
export class App {

}
