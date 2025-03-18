import Rover from './mars-rover.js';

function runTest(name, initialX, initialY, direction, commands, obstacles = []) {
  console.log(`\n=== ${name} ===`);
  const rover = new Rover(initialX, initialY, direction, obstacles);
  console.log(`Starting at: ${rover.getStatus()}`);
  
  if (obstacles.length > 0) {
    console.log('Obstacles at:', obstacles);
  }
  
  console.log(`Commands: ${commands}`);
  console.log(`Final position: ${rover.processCommands(commands)}`);
}

runTest('Basic Movement', 0, 0, 'NORTH', 'FFRFF');

runTest('Turning and Backward', 10, 10, 'EAST', 'FLFRBB');

runTest('Complex Sequence', 5, 5, 'WEST', 'FFLFRBBLF');

runTest('Obstacle Detection', 0, 0, 'NORTH', 'FFRFF', [[2, 2], [5, 5]]); 

runTest('Empty Commands', 5, 5, 'NORTH', '');

runTest('Alternating Movement', 0, 0, 'EAST', 'FBFBFBFBFBLRFBFBFB'); 