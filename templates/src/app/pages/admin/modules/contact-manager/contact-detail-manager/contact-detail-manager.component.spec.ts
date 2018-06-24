import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDetailManagerComponent } from './contact-detail-manager.component';

describe('ContactDetailManagerComponent', () => {
  let component: ContactDetailManagerComponent;
  let fixture: ComponentFixture<ContactDetailManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactDetailManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDetailManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
