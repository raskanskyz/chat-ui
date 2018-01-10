import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChatModalComponent } from './chat-modal/chat-modal.component';
import { ModalSidebarComponent } from './modal-sidebar/modal-sidebar.component';
import { ModalMainviewComponent } from './modal-mainview/modal-mainview.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatListItemComponent } from './chat-list-item/chat-list-item.component';
import { ChatRoomsService } from './services/chat-rooms.service';

@NgModule({
  declarations: [
    AppComponent,
    ChatModalComponent,
    ModalSidebarComponent,
    ModalMainviewComponent,
    ChatListComponent,
    ChatListItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ChatRoomsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
