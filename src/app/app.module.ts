import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//COMPONENTS
import { AppComponent } from './app.component';
import { ChatModalComponent } from './chat-modal/chat-modal.component';
import { ModalSidebarComponent } from './modal-sidebar/modal-sidebar.component';
import { ModalMainviewComponent } from './modal-mainview/modal-mainview.component';
import { AvatarComponent } from './avatar/avatar.component';

//SERVICES
import { ChatRoomsService } from './services/chat-rooms.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckOriginDirective } from './directives/check-origin.directive';
import { SetStylingDirective } from './directives/set-styling.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChatModalComponent,
    ModalSidebarComponent,
    ModalMainviewComponent,
    AvatarComponent,
    CheckOriginDirective,
    SetStylingDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ChatRoomsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
