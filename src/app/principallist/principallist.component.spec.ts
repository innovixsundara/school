import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipallistComponent } from './principallist.component';

describe('PrincipallistComponent', () => {
  let component: PrincipallistComponent;
  let fixture: ComponentFixture<PrincipallistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipallistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipallistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
