import { QuoteStatusCodeToLabelPipe } from './quote-status-code-to-label.pipe';

describe('QuoteStatusCodeToLabelPipe', () => {
  it('create an instance', () => {
    const pipe = new QuoteStatusCodeToLabelPipe();
    expect(pipe).toBeTruthy();
  });
});
