// Lib
import { expect } from 'chai';

// App
import toLocaleString from '../index';

describe('#toLocaleString', () => {
  it('should convert single digits', () => {
    const result = toLocaleString(1);
    expect(result).to.equal('1');
  });

  it('should convert double digits', () => {
    const result = toLocaleString(12);
    expect(result).to.equal('12');
  });

  it('should convert triple digits', () => {
    const result = toLocaleString(123);
    expect(result).to.equal('123');
  });

  it('should convert 4 digits', () => {
    const result = toLocaleString(1234);
    expect(result).to.equal('1,234');
  });

  it('should convert 5 digits', () => {
    const result = toLocaleString(12345);
    expect(result).to.equal('12,345');
  });

  it('should convert 6 digits', () => {
    const result = toLocaleString(123456);
    expect(result).to.equal('123,456');
  });

  it('should convert 7 digits', () => {
    const result = toLocaleString(1234567);
    expect(result).to.equal('1,234,567');
  });

  it('should convert 8 digits', () => {
    const result = toLocaleString(12345678);
    expect(result).to.equal('12,345,678');
  });
});
