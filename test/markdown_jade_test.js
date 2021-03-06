'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.markdown_jade = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  default_options: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/test/fixtures/testing.html');
    var expected = grunt.file.read('test/expected/testing.html');
    test.equal(actual, expected, 'should describe what the default behavior is.');

    test.done();
  },

  "3-levels": function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/test/fixtures/3-levels.html');
    var expected = grunt.file.read('test/expected/3-levels.html');
    test.equal(actual, expected, 'should describe what the befhavior for 3 levels is.');

    test.done();
  },

  "decode": function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/test/fixtures/decode.html');
    var expected = grunt.file.read('test/expected/decode.html');
    test.equal(actual, expected, 'should describe what the befhavior for `decode` is.');

    test.done();
  },


};
