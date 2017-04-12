import { Routes, RouterModule } from '@angular/router';
import {DemoComponent} from "./demo/demo";
import {Demo2Component} from "./demo2/demo2";

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/demo',
        pathMatch: 'full',
    },
    {
        path: 'demo',
        component: DemoComponent
    },
    {
        path: 'demo2',
        component: Demo2Component
    }
];

export const routing = RouterModule.forRoot(appRoutes, {useHash: true});