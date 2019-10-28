import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonPlacesComponent } from './common-places.component';

describe('CommonPlacesComponent', () => {
  let component: CommonPlacesComponent;
  let fixture: ComponentFixture<CommonPlacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonPlacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
