import { ErrorToMessagePipe } from './error-to-message.pipe';

xdescribe('ErrorToMessagePipe', () => {
  it('create an instance', () => {
    const pipe = new ErrorToMessagePipe();
    expect(pipe).toBeTruthy();
  });
});
