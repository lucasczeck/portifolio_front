import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsProjetosComponent } from './cards-projetos.component';

describe('CardsProjetosComponent', () => {
  let component: CardsProjetosComponent;
  let fixture: ComponentFixture<CardsProjetosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsProjetosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsProjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
