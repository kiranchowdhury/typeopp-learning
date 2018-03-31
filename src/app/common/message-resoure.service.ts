import { Injectable } from '@angular/core';
import { MessageCodes } from './message-codes.enum';

@Injectable()
export class MessageResoureService {

  constructor() { }

  getMessage(code: string): string {
    switch (code) {
      case MessageCodes.EP_USER_NOT_FOUND:
      case MessageCodes.EP_USER_UNAUTHORIZED:
        return 'You are not authorized to use ePricer application';
      default:
        return 'Technical Error: Please contact ePricer administrator';
    }
  }

}
