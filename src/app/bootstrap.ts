/// <reference path="../../typings/tsd.d.ts" />

import {bootstrap, ApplicationRef} from 'angular2/angular2';
import {routerInjectables} from 'angular2/router';
import {shadowDomInjectables} from 'common/shadowDomInjectables';
// Our custom injectable that uses Just-In-Time change detection
// import {jitInjectables} from 'common/changeDetectionInjectables';
// Our top level component that holds all of our components
import {App} from './components/app';

bootstrap(App,[
  shadowDomInjectables,
  routerInjectables
]).then((appRef:ApplicationRef) => {
  console.dir(appRef.hostComponent);
});
