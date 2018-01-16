import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//MAT
import { MatButtonModule, MatInputModule } from '@angular/material';


//COMPONENTS
import { AppComponent } from './app.component';
import { ChatModalComponent } from './chat-modal/chat-modal.component';
import { ModalSidebarComponent } from './modal-sidebar/modal-sidebar.component';
import { ModalMainviewComponent } from './modal-mainview/modal-mainview.component';
import { AvatarComponent } from './avatar/avatar.component';

//SERVICES
import { ChatRoomsService } from './services/chat-rooms.service';

@NgModule({
  declarations: [
    AppComponent,
    ChatModalComponent,
    ModalSidebarComponent,
    ModalMainviewComponent,
    AvatarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [
    ChatRoomsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
