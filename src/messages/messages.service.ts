import { Injectable } from "@nestjs/common";
import { IRepository } from "./interfaces/IMessageRepo";


export class MessagesService {

    constructor(
        private messageRepo: IRepository // Inject the repository
    ) { }
    // Get all messages
    async getAllMessages() {
        return await this.messageRepo.findAll();
    }

    // Get message by id
    async getMessageById(id) {
        const message:any = await this.messageRepo.findOne(id);

        return message;
    }

    // Create a message
    async createMessage(message) {
        return await this.messageRepo.create(message);
    }
}

