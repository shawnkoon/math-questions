'use strict';

var _chai = require('chai');

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Lib
describe('#toLocaleString', function () {
  it('should convert single digits', function () {
    var result = (0, _index2.default)(1);
    (0, _chai.expect)(result).to.equal('1');
  });

  it('should convert double digits', function () {
    var result = (0, _index2.default)(12);
    (0, _chai.expect)(result).to.equal('12');
  });

  it('should convert triple digits', function () {
    var result = (0, _index2.default)(123);
    (0, _chai.expect)(result).to.equal('123');
  });

  it('should convert 4 digits', function () {
    var result = (0, _index2.default)(1234);
    (0, _chai.expect)(result).to.equal('1,234');
  });

  it('should convert 5 digits', function () {
    var result = (0, _index2.default)(12345);
    (0, _chai.expect)(result).to.equal('12,345');
  });

  it('should convert 6 digits', function () {
    var result = (0, _index2.default)(123456);
    (0, _chai.expect)(result).to.equal('123,456');
  });

  it('should convert 7 digits', function () {
    var result = (0, _index2.default)(1234567);
    (0, _chai.expect)(result).to.equal('1,234,567');
  });

  it('should convert 8 digits', function () {
    var result = (0, _index2.default)(12345678);
    (0, _chai.expect)(result).to.equal('12,345,678');
  });
});

// App