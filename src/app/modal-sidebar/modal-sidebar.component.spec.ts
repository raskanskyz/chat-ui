import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSidebarComponent } from './modal-sidebar.component';
import { Component } from '@angular/core';
import { CheckOriginDirective } from '../directives/check-origin.directive';
import { SetStylingDirective } from '../directives/set-styling.directive';
import { AvatarComponent } from '../avatar/avatar.component';
import { MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ModalSidebarComponent', () => {
  let component: ModalSidebarComponent;
  let fixture: ComponentFixture<ModalSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        BrowserAnimationsModule
      ],
      declarations: [
        ModalSidebarComponent,
        CheckOriginDirective,
        SetStylingDirective,
        AvatarComponent
      ]
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


