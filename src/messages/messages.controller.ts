import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
    @Get()
    listMessages() {
        return 'List all messages';
    }

    @Get(':id')
    getMessage() {
        return 'Get a message';
    }

    @Post()
    createMessage() {
        return 'Create a message';
    }

}
