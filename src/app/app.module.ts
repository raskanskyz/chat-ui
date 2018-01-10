import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//COMPONENTS
import { AppComponent } from './app.component';
import { ChatModalComponent } from './chat-modal/chat-modal.component';
import { ModalSidebarComponent } from './modal-sidebar/modal-sidebar.component';
import { ModalMainviewComponent } from './modal-mainview/modal-mainview.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatListItemComponent } from './chat-list-item/chat-list-item.component';
import { AvatarComponent } from './avatar/avatar.component';

//SERVICES
import { ChatRoomsService } from './services/chat-rooms.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ChatModalComponent,
    ModalSidebarComponent,
    ModalMainviewComponent,
    ChatListComponent,
    ChatListItemComponent,
    AvatarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ChatRoomsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
