
// Fizz Buzz:
// prints numbers from 1 to n, where n is a given number
// prints fizz when the number is divisible by 3
// prints buzz if the number is divisible by 3 and 5


function runFizzBuzz(n=30) {
  if ( n > 40) n = 40;
  if ( n < 1 ) n = 1;

  let resultArray = [];
  let result = {};

  for (let i = 0; i < n; i++) {
    let val = i+1;
    let str = "";
    if ( val % 3 == 0 ) str += "fizz"
    if ( val % 5 == 0 ) str += "buzz"
    resultArray[i] = str ? str : val;
  }

  result.items = resultArray;

  result.format = function format(arr) {
    return arr.join('\n')
  }

  result.print = function print(str) {
    if (result.items.length > -1) {
        header();
        breaker();
        console.log(result.format(result.items));
        breaker();
    }
    return true;
  }

  return result;
}

function header() {
    console.log('\n========================');
    console.log('## FizzBuzz w/ Tests\n');
    console.log('- to run the test');
    console.log('--> npm run test');
}

function breaker() {
    console.log('\n------------------------- ');
    console.log('------------------------- \n');
}

if ( __filename === process.argv[1] ) {
    runFizzBuzz().print();
}

module.exports = runFizzBuzz;
