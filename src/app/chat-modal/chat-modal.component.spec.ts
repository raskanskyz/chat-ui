import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatModalComponent } from './chat-modal.component';
import { ModalSidebarComponent } from '../modal-sidebar/modal-sidebar.component';
import { ModalMainviewComponent } from '../modal-mainview/modal-mainview.component';
import { AvatarComponent } from '../avatar/avatar.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { ChatRoomsService } from '../services/chat-rooms.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('ChatModalComponent', () => {
  let component: ChatModalComponent;
  let fixture: ComponentFixture<ChatModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        MatInputModule,
        FormsModule,
        BrowserAnimationsModule
      ],
      declarations: [
        ChatModalComponent,
        ModalSidebarComponent,
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
    fixture = TestBed.createComponent(ChatModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
