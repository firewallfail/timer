const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// b=98, 1 = 49, 9 = 57,

const waitForInput = () => {
  process.stdin.on('data', (key) => {
    let input = key[0];
    if (input === 3) console.log("Thanks for using me, ciao!");
    console.log('');
    if (input === 98) process.stdout.write('\x07');
    input -= 48;
    if (input > 0 && input < 10) {
      console.log(`Setting timer for ${input} seconds...`)
      setTimeout(() => process.stdout.write('\x07'), input * 1000);
    };
  })
};

waitForInput();