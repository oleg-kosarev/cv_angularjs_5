import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioDetalisComponent } from './portfolio-detalis.component';

describe('PortfolioDetalisComponent', () => {
  let component: PortfolioDetalisComponent;
  let fixture: ComponentFixture<PortfolioDetalisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioDetalisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioDetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
