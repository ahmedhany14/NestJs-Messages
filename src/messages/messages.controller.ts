import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
    constructor(
        private massageService: MessagesService
    ) { }

    @Get()
    async listMessages() {
        return await this.massageService.getAllMessages();
    }

    @Get(':id')
    public async getMessage(@Param('id') id: string) {
        const message = await this.massageService.getMessageById(id);
        if (!message) {
            throw new NotFoundException('message not found');
        }
        return message;
    }

    @Post()
    async createMessage(@Body() body: CreateMessageDto) {
        return await this.massageService.createMessage(body.content);
    }

}
