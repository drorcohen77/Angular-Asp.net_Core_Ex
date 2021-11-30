import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyAComponent } from './company-a.component';

describe('CompanyAComponent', () => {
  let component: CompanyAComponent;
  let fixture: ComponentFixture<CompanyAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
