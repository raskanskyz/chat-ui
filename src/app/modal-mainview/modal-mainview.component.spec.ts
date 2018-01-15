import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalMainviewComponent } from './modal-mainview.component';
import { CheckOriginDirective } from '../directives/check-origin.directive';
import { SetStylingDirective } from '../directives/set-styling.directive';
import { AvatarComponent } from '../avatar/avatar.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { ChatRoomsService } from '../services/chat-rooms.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ModalMainviewComponent', () => {
  let component: ModalMainviewComponent;
  let fixture: ComponentFixture<ModalMainviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MatInputModule,
        BrowserAnimationsModule
      ],
      declarations: [
        ModalMainviewComponent,
        CheckOriginDirective,
        SetStylingDirective,
        AvatarComponent,
      ],
      providers: [
        ChatRoomsService
      ]
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
