import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NegativePositiveBarComponent } from './negative-positive-bar.component';

describe('NegativePositiveBarComponent', () => {
  let component: NegativePositiveBarComponent;
  let fixture: ComponentFixture<NegativePositiveBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NegativePositiveBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NegativePositiveBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
