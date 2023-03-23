import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProjetosPessoaisComponent } from './card-projetos-pessoais.component';

describe('CardProjetosPessoaisComponent', () => {
  let component: CardProjetosPessoaisComponent;
  let fixture: ComponentFixture<CardProjetosPessoaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardProjetosPessoaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardProjetosPessoaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
