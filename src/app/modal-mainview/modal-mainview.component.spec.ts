import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalMainviewComponent } from './modal-mainview.component';
import { AvatarComponent } from '../avatar/avatar.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { ChatRoomsService } from '../services/chat-rooms.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('ModalMainviewComponent', () => {
  let component: ModalMainviewComponent;
  let fixture: ComponentFixture<ModalMainviewComponent>;
  let spy: any;
  let service: ChatRoomsService;
  let messageItem: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MatInputModule,
        BrowserAnimationsModule
      ],
      declarations: [
        ModalMainviewComponent,
        AvatarComponent
      ],
      providers: [
        ChatRoomsService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    service = new ChatRoomsService();
    fixture = TestBed.createComponent(ModalMainviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    service = null;
    component = null;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should not be able to send an empty message', () => {
    component.message = "";
    expect(component.sendMessage()).toBeFalsy();
  });

  it('should be able to send a message with content', () => {
    component.message = "awesome message";
    spyOn(service, "sendMessage").and.returnValue(true);
    expect(component.sendMessage()).toBeTruthy();
  });

  it('should display self messages with proper css', () => {
    component.messages = [{
      isSelfMessage: true,
      text: "awesome message"
    }];
    fixture.detectChanges();
    let test: HTMLElement = fixture.debugElement.query(By.css(".message-content")).nativeElement;
    expect(test.classList.contains("self-message")).toBeTruthy();
  });

  it('should display foreign messages with proper css', () => {
    component.messages = [{
      isSelfMessage: false,
      text: "awesome foreign message"
    }];
    fixture.detectChanges();
    let test: HTMLElement = fixture.debugElement.query(By.css(".message-content")).nativeElement;
    expect(test.classList.contains("self-message")).toBeFalsy();
  });
});
