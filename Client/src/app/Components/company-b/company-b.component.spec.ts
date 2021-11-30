import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyBComponent } from './company-b.component';

describe('CompanyBComponent', () => {
  let component: CompanyBComponent;
  let fixture: ComponentFixture<CompanyBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
