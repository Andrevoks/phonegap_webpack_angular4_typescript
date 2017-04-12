import {TestBed} from '@angular/core/testing';
import {IndexComponent} from "./index";
import {RouterTestingModule} from "@angular/router/testing";

describe('App', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule // https://github.com/AngularClass/angular2-webpack-starter/issues/1004#issuecomment-247703415
            ],
            declarations: [IndexComponent]
        });
    });
    it('should work in index', () => {
        let fixture = TestBed.createComponent(IndexComponent);
        expect(fixture.componentInstance instanceof IndexComponent).toBe(true, 'should create IndexComponent');
    });
});
