/// <reference path="../../typings/tsd.d.ts" />

import {bootstrap, ApplicationRef} from 'angular2/angular2';
import {routerInjectables} from 'angular2/router';
import {shadowDomInjectables} from 'common/shadowDomInjectables';
// Our custom injectable that uses Just-In-Time change detection
// import {jitInjectables} from 'common/changeDetectionInjectables';
import {App} from './components/app';
import {KanvazEditor} from './components/kanvaz_editor/kanvaz_editor';

bootstrap(App,[
  shadowDomInjectables,
  routerInjectables
]).then((appRef:ApplicationRef) => {
  var hostComponent = appRef.hostComponent;
});
