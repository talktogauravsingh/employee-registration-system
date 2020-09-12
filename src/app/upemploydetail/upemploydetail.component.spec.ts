import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpemploydetailComponent } from './upemploydetail.component';

describe('UpemploydetailComponent', () => {
  let component: UpemploydetailComponent;
  let fixture: ComponentFixture<UpemploydetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpemploydetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpemploydetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
