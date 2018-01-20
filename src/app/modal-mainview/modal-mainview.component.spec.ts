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
    component = new ModalMainviewComponent(service);
    fixture.detectChanges();
  });

  afterEach(() => {
    service = null;
    component = null;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
