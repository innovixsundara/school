import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignteacherComponent } from './assignteacher.component';

describe('AssignteacherComponent', () => {
  let component: AssignteacherComponent;
  let fixture: ComponentFixture<AssignteacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignteacherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignteacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
