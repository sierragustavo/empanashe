import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpanasheAboutComponent } from './empanashe-about.component';

describe('EmpanasheAboutComponent', () => {
  let component: EmpanasheAboutComponent;
  let fixture: ComponentFixture<EmpanasheAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpanasheAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpanasheAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
