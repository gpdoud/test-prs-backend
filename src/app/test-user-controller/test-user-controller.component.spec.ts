import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestUserControllerComponent } from './test-user-controller.component';

describe('TestUserControllerComponent', () => {
  let component: TestUserControllerComponent;
  let fixture: ComponentFixture<TestUserControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestUserControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestUserControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
