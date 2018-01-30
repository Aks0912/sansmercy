import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustBagComponent } from './cust-bag.component';

describe('CustBagComponent', () => {
  let component: CustBagComponent;
  let fixture: ComponentFixture<CustBagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustBagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustBagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
