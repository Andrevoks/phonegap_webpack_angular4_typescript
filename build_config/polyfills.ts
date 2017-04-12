import 'core-js/es6';
import 'core-js/es7/reflect';
import {enableProdMode} from '@angular/core'
require('zone.js/dist/zone');

// declare var require: any;
declare var process: any;

if (process.env.ENV === 'production') {
    // Production
    enableProdMode();
} else {
    // Development
    Error['stackTraceLimit'] = Infinity;
    require('zone.js/dist/long-stack-trace-zone');
}