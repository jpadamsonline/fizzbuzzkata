var assert = require('assert');
var runFizzBuzz = require('../index');

describe('FizzBuzz', function() {
    describe('runFizzBuzz()', function() {
        it('should be a function', function() {
            assert.equal(typeof runFizzBuzz, 'function');
        });

        it('should go from 1 to 30 by default', () => {
            let arr = runFizzBuzz().items;
            assert.equal(arr.length, 30)
            assert.equal(arr[0], 1)
        })

        it('should print our numbers from 1 to n if n is given', () => {
            let arr = runFizzBuzz(10).items;
            assert.equal(arr.length, 10)
            assert.equal(arr[arr.length -1], "buzz")
            assert.equal(arr[0], 1)
        })

        it('should limit numbers from 1 to 40', () => {
            let arr = runFizzBuzz(50).items;
            assert.equal(arr[arr.length -1], "buzz")
            let arr2 = runFizzBuzz(-50).items;
            assert.equal(arr[0], 1)
        })

        it('should print fizz for numbers divisible by 3', () => {
            let arr = runFizzBuzz(20).items;
            assert.equal(arr[3 - 1], "fizz")
            assert.equal(arr[6 - 1], "fizz")
            assert.equal(arr[9 - 1], "fizz")
        })

        it('should print buzz for numbers divisible by 5', () => {
            let arr = runFizzBuzz(20).items;
            assert.equal(arr[5 - 1], "buzz")
            assert.equal(arr[10 - 1], "buzz")
        })

        it('should print fizzbuzz for numbers divisible by 5 and 3', () => {
            let arr = runFizzBuzz(30).items;
            assert.equal(arr[15 - 1], "fizzbuzz")
            assert.equal(arr[30 - 1], "fizzbuzz")
        })

        it('should be able to print out fizzbuzz', () => {
            let res = runFizzBuzz(20);
            let str = res.format(res.items)
            assert.equal(str.match(/fizzbuzz/g)[0], 'fizzbuzz')

            res = runFizzBuzz(6);
            str = res.format(res.items)
            assert.equal(str.match(/fizz/g).length, 2)
            assert.equal(res.print(str), true)
        })
    });
});
