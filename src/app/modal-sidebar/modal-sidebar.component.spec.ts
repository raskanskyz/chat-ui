import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSidebarComponent } from './modal-sidebar.component';
import { Component } from '@angular/core';
import { AvatarComponent } from '../avatar/avatar.component';
import { MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

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


  it('should display an avatar image', () => {
    expect(component.currentAvatarUrl).toContain("https://spotim-demo-chat-server.herokuapp.com/avatars/");
  });

  it('should allow submitting a valid form', () => {
    component.nickNameForm.controls.nickName.setValue('nicky');
    let nickName = component.nickNameForm.controls.nickName;

    expect(nickName.valid).toBeTruthy();
  });

  it('should deny submitting an invalid form', () => {
    component.nickNameForm.controls.nickName.setValue('');
    let nickName = component.nickNameForm.controls.nickName;

    expect(nickName.valid).toBeFalsy();
    expect(component.nickNameForm.valid).toBeFalsy();
  });

  it('should display error field when nickName is invalid', () => {
    component.nickNameForm.controls.nickName.setValue('');
    let nickName = component.nickNameForm.controls.nickName;
    const fixture = TestBed.createComponent(ModalSidebarComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(nickName.valid).toBeFalsy();
    expect(nickName.errors).toBeTruthy();
  });

  it('should display nickName', () => {
    const fixture = TestBed.createComponent(ModalSidebarComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const nickName = component.nickNameForm.controls.nickName;

    expect(compiled.querySelector('.nickname-placeholder').textContent).toMatch(nickName.value);
  });
});


