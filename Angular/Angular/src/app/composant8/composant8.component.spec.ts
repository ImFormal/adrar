import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Composant8Component } from './composant8.component';

describe('Composant8Component', () => {
  let component: Composant8Component;
  let fixture: ComponentFixture<Composant8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Composant8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Composant8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
