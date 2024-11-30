import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
@Controller('messages')
export class MessagesController {
    @Get()
    listMessages() {
        return 'List all messages';
    }

    @Get(':id')
    getMessage(@Param('id') id: string) {
        console.log('id: ', id);
        return 'Get a message';
    }

    @Post()
    createMessage(@Body() body: CreateMessageDto) {
        console.log('body: ', body);
        console.log('content: ', body.content);
        return 'Create a message';
    }

}
