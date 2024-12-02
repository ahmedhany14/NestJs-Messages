import { Injectable } from "@nestjs/common";
import { readFile, writeFile } from "fs/promises";
import { IRepository } from "./interfaces/IMessageRepo";

@Injectable()
export class MessagesRepository implements IRepository {


    private static async ReadFile(path: string) {
        const data = await readFile(path, "utf-8");
        return JSON.parse(data);
    }
    // create a message
    public async create(message: string) {
        const messages = await MessagesRepository.ReadFile("messages.json");
        const id = Math.floor(Math.random() * 1000) + 1;
        const newMessage = {
            id,
            message
        };
        messages[id] = newMessage;
        await writeFile("messages.json", JSON.stringify(messages));
        return newMessage;
    }

    // get all messages
    public async findOne(id: number): Promise<any> {
        let messages = await MessagesRepository.ReadFile("messages.json");
        return messages[id];
    }

    // get message by id
    public async findAll() {
        let messages = await MessagesRepository.ReadFile("messages.json");

        return messages;
    }
}