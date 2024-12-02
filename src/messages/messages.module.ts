import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';

import { MessagesRepository } from './messages.repository';
import { MessagesService } from './messages.service';
@Module({
  controllers: [MessagesController],
  providers: [
    MessagesService,
    {
      provide: 'MessagesRepository', // Custom token for MessagesRepository
      useClass: MessagesRepository,
    },
  ]

})
export class MessagesModule { }
