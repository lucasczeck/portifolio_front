import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProjetosProfissionaisComponent } from './card-projetos-profissionais.component';

describe('CardProjetosProfissionaisComponent', () => {
  let component: CardProjetosProfissionaisComponent;
  let fixture: ComponentFixture<CardProjetosProfissionaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardProjetosProfissionaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardProjetosProfissionaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
