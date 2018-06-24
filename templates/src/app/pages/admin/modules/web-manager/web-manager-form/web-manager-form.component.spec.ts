import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebManagerFormComponent } from './web-manager-form.component';

describe('WebManagerFormComponent', () => {
  let component: WebManagerFormComponent;
  let fixture: ComponentFixture<WebManagerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebManagerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebManagerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
