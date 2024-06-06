import { ChatService } from './chat.service';
export declare class ChatController {
    private readonly ChatService;
    constructor(ChatService: ChatService);
    getChat(): void;
}
