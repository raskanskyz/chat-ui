import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatModalComponent } from './chat-modal/chat-modal.component';
import { ModalSidebarComponent } from './modal-sidebar/modal-sidebar.component';
import { ModalMainviewComponent } from './modal-mainview/modal-mainview.component';
import { AvatarComponent } from './avatar/avatar.component';
import { MatInputModule } from '@angular/material';
import { ChatRoomsService } from './services/chat-rooms.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [
        AppComponent,
        ChatModalComponent,
        ModalSidebarComponent,
        ModalMainviewComponent,
        AvatarComponent,
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        BrowserAnimationsModule
      ],
      providers: [
        ChatRoomsService
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  // it(`should have as title 'app'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('Welcome to the Spot.IM Chat app');
  // }));

  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to the Spot.IM Chat app');
  // }));
});
