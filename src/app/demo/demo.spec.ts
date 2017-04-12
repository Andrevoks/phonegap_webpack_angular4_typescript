import {TestBed} from '@angular/core/testing';
import {DemoComponent} from "./demo";
describe('App', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({declarations: [DemoComponent]});
    });
    it('should work in demo', () => {
        let fixture = TestBed.createComponent(DemoComponent);
        expect(fixture.componentInstance instanceof DemoComponent).toBe(true, 'should create DemoComponent');
    });
});
