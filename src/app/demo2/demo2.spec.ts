import {TestBed} from '@angular/core/testing';
import {Demo2Component} from "./demo2";
describe('App', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({declarations: [Demo2Component]});
    });
    it('should work in demo2', () => {
        let fixture = TestBed.createComponent(Demo2Component);
        expect(fixture.componentInstance instanceof Demo2Component).toBe(true, 'should create Demo2Component');
    });
});
