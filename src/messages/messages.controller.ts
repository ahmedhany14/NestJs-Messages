import { Controller, Get, Post, Body, Param } from '@nestjs/common';

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
    createMessage(@Body() body: any) {
        console.log('body: ', body);
        return 'Create a message';
    }

}
