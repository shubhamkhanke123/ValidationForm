import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetUserDeatilsComponent } from './get-user-deatils.component';

describe('GetUserDeatilsComponent', () => {
  let component: GetUserDeatilsComponent;
  let fixture: ComponentFixture<GetUserDeatilsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetUserDeatilsComponent]
    });
    fixture = TestBed.createComponent(GetUserDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
