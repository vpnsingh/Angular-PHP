import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HellolazyComponent } from './hellolazy.component';

describe('HellolazyComponent', () => {
  let component: HellolazyComponent;
  let fixture: ComponentFixture<HellolazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HellolazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HellolazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
