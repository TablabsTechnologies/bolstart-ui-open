import { CometChatUserList } from './../../../cometchat-pro-angular-ui-kit/CometChatWorkspace/projects/angular-chat-ui-kit/src/components/Users/CometChat-user-list/cometchat-user-list.module';
import { CometChatGroupList } from './../../../cometchat-pro-angular-ui-kit/CometChatWorkspace/projects/angular-chat-ui-kit/src/components/Groups/CometChat-group-list/cometchat-group-list.module';
import { CometChatConversationList } from './../../../cometchat-pro-angular-ui-kit/CometChatWorkspace/projects/angular-chat-ui-kit/src/components/Chats/CometChat-conversation-list/cometchat-conversation-list.module';
import { CometChatUI } from './../../../cometchat-pro-angular-ui-kit/CometChatWorkspace/projects/angular-chat-ui-kit/src/components/CometChatUI/CometChat-Ui/cometchat-ui.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagingRoutingModule } from './messaging-routing.module';
import { MessagingComponent } from './messaging.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CometChatAvatar, CometChatUserListWithMessages, CometChatConversationListWithMessages, CometChatGroupListWithMessages } from 'src/cometchat-pro-angular-ui-kit/CometChatWorkspace/projects/angular-chat-ui-kit/src/public-api';


@NgModule({
  declarations: [MessagingComponent],
  imports: [
    CommonModule,
    SharedModule,
    MessagingRoutingModule,
    CometChatAvatar,
    CometChatUserListWithMessages,
    CometChatUI,
    CometChatConversationListWithMessages,
    CometChatGroupListWithMessages,

    CometChatConversationList,
    CometChatGroupList,
    CometChatUserList,

    // FormsModule,

  ]
})
export class MessagingModule { }
