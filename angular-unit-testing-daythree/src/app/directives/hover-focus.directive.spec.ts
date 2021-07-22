import { TestBed } from '@angular/core/testing';
import { HoverFocusDirective } from './hover-focus.directive';

describe('HoverFocusDirective', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoverFocusDirective]
    });
  })

  it('should create an instance', () => {
    const directive = new HoverFocusDirective();
    expect(directive).toBeTruthy();
  });
});
