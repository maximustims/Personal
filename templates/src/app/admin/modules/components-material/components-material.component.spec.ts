import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsMaterialComponent } from './components-material.component';

describe('ComponentsMaterialComponent', () => {
  let component: ComponentsMaterialComponent;
  let fixture: ComponentFixture<ComponentsMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
