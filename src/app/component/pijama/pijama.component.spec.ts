import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PijamaComponent } from './pijama.component';

describe('PijamaComponent', () => {
  let component: PijamaComponent;
  let fixture: ComponentFixture<PijamaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PijamaComponent]
    });
    fixture = TestBed.createComponent(PijamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
