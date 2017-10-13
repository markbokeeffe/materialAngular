import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FenianismComponent } from './fenianism.component';

describe('FenianismComponent', () => {
  let component: FenianismComponent;
  let fixture: ComponentFixture<FenianismComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FenianismComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FenianismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
