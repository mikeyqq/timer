const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

const numInput = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
function beeep (){ process.stdout.write('\nbeep')};
// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
if (key === '\u0003') {
  process.stdout.write(`Thanks for using me, ciao!\n`);
  process.exit();
};

if(key === 'b') {
  process.stdout.write('beep');
}

for(let num in numInput)
if(key === numInput[num]) {
  process.stdout.write(`\nsetting timer for x seconds...${numInput[num]}`);
  setTimeout(beeep, numInput[num] * 1000);
}