import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMainviewComponent } from './modal-mainview.component';

describe('ModalMainviewComponent', () => {
  let component: ModalMainviewComponent;
  let fixture: ComponentFixture<ModalMainviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalMainviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMainviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
