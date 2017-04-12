import {NgModule} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {routing} from "./app.routing";
import {IndexComponent} from './index/index';
import {DemoComponent} from "./demo/demo";
import {Demo2Component} from "./demo2/demo2";
@NgModule({
    imports: [
        BrowserModule,
        routing
    ],
    declarations: [
        IndexComponent,
        DemoComponent,
        Demo2Component
    ],
    bootstrap: [IndexComponent]
})
export class AppModule {
}
