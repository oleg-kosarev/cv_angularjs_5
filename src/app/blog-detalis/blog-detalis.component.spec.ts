import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetalisComponent } from './blog-detalis.component';

describe('BlogDetalisComponent', () => {
  let component: BlogDetalisComponent;
  let fixture: ComponentFixture<BlogDetalisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogDetalisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogDetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
