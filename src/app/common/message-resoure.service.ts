import { Injectable } from '@angular/core';
import { MessageCodes } from './message-codes.enum';

@Injectable()
export class MessageResoureService {

  constructor() { }

  getMessage(code: string): string {
    switch (code) {
      case MessageCodes.TL_USER_NOT_FOUND:
        return 'You are not authorized to use ePricer application';
      default:
        return 'Technical Error: Please contact ePricer administrator';
    }
  }

}
