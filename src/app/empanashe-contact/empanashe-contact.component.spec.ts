import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpanasheContactComponent } from './empanashe-contact.component';

describe('EmpanasheContactComponent', () => {
  let component: EmpanasheContactComponent;
  let fixture: ComponentFixture<EmpanasheContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpanasheContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpanasheContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
