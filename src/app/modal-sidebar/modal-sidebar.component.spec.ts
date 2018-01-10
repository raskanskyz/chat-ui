import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSidebarComponent } from './modal-sidebar.component';

describe('ModalSidebarComponent', () => {
  let component: ModalSidebarComponent;
  let fixture: ComponentFixture<ModalSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
