import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipperaryComponent } from './tipperary.component';

describe('TipperaryComponent', () => {
  let component: TipperaryComponent;
  let fixture: ComponentFixture<TipperaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipperaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipperaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
