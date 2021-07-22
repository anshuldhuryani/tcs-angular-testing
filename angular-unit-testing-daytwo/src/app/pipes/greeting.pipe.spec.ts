import { GreetingPipe } from './greeting.pipe';

describe('Greeting Pipe', () => {

  it('create an instance', () => {
    const pipe = new GreetingPipe();
    expect(pipe).toBeTruthy();
  });

  it('Test Pipe with Name', () => {
    const pipe = new GreetingPipe();
    expect(pipe.transform('Bhawna Gunwani')).toBe('Hello Bhawna Gunwani');
  })
});
