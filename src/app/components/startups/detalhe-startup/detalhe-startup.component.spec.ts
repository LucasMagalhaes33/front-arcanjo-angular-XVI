import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheStartupComponent } from './detalhe-startup.component';

describe('DetalheStartupComponent', () => {
  let component: DetalheStartupComponent;
  let fixture: ComponentFixture<DetalheStartupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalheStartupComponent]
    });
    fixture = TestBed.createComponent(DetalheStartupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
