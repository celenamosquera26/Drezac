import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutComponent } from './put.component';

describe('PutComponent', () => {
  let component: PutComponent;
  let fixture: ComponentFixture<PutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PutComponent]
    });
    fixture = TestBed.createComponent(PutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
