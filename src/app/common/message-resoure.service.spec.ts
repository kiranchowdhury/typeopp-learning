import { TestBed, inject } from '@angular/core/testing';

import { MessageResoureService } from './message-resoure.service';

describe('MessageResoureService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageResoureService]
    });
  });

  it('should be created', inject([MessageResoureService], (service: MessageResoureService) => {
    expect(service).toBeTruthy();
  }));
});
