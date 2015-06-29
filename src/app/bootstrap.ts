/// <reference path="../../typings/tsd.d.ts" />

import {bootstrap, ApplicationRef} from 'angular2/angular2';
import {routerInjectables} from 'angular2/router';
import {shadowDomInjectables} from 'common/shadowDomInjectables';
import {appInjectables} from 'common/app_injectables';
// Our custom injectable that uses Just-In-Time change detection
// import {jitInjectables} from 'common/changeDetectionInjectables';
import {App} from './components/app';

bootstrap(App,[
  shadowDomInjectables,
  routerInjectables,
  appInjectables
]).then((appRef:ApplicationRef) => {
  var hostComponent = appRef.hostComponent;
});
