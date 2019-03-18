import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainwComponent } from './mainw.component';

describe('MainwComponent', () => {
  let component: MainwComponent;
  let fixture: ComponentFixture<MainwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
