import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobrenComponent } from './sobren.component';

describe('SobrenComponent', () => {
  let component: SobrenComponent;
  let fixture: ComponentFixture<SobrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobrenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
