import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyCComponent } from './company-c.component';

describe('CompanyCComponent', () => {
  let component: CompanyCComponent;
  let fixture: ComponentFixture<CompanyCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
