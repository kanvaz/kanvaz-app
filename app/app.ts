import {Component, View, bootstrap} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_BINDINGS} from 'angular2/router';
import {HTTP_BINDINGS} from 'angular2/http';

import {KanvazEditor} from './components/kanvaz_editor/kanvaz_editor';

@Component({
  selector: 'kanvaz-app'
})
@RouteConfig([
  { path: '/', component: KanvazEditor, as: 'kanvaz-editor' },
  { path: '/:kanvaz_id/:version', component: KanvazEditor },
  { path: '/:user_id/:kanvaz_id/:version', component: KanvazEditor }
])
@View({
  template: '<router-outlet></router-outlet>',
  directives: [ROUTER_DIRECTIVES]
})
class App {}

bootstrap(App, [ROUTER_BINDINGS, HTTP_BINDINGS]);
