import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quoteStatusCodeToLabel'
})
export class QuoteStatusCodeToLabelPipe implements PipeTransform {

  transform(statusCodes: null | string[]): any {
    if (!statusCodes) {
      return 'Unknown Status';
    }
    return null;
  }

}
