class Rover {
  constructor(x, y, direction, obstacles = []) {
    this.x = x;
    this.y = y;
    this.directions = ['NORTH', 'EAST', 'SOUTH', 'WEST'];
    this.directionIndex = this.directions.indexOf(direction);
    if (this.directionIndex === -1) {
      throw new Error(`Invalid direction: ${direction}`);
    }
    this.obstacles = obstacles;
    this.obstacleDetected = false;
  }

  getStatus() {
    let status = `(${this.x}, ${this.y}) ${this.directions[this.directionIndex]}`;
    if (this.obstacleDetected) {
      status += ' STOPPED';
    }
    return status;
  }

  hasObstacle(x, y) {
    return this.obstacles.some(obstacle => obstacle[0] === x && obstacle[1] === y);
  }

  turn(turnCommand) {
    const step = (turnCommand === 'L' ? -1 : 1);
    this.directionIndex = (this.directionIndex + step + this.directions.length) % this.directions.length;
  }

  move(moveCommand) {
    const factor = (moveCommand === 'F' ? 1 : -1);
    const deltas = [
      { dx: 0, dy: 1 },
      { dx: 1, dy: 0 },
      { dx: 0, dy: -1 },
      { dx: -1, dy: 0 }
    ];
    const { dx, dy } = deltas[this.directionIndex];
    
    const nextX = this.x + dx * factor;
    const nextY = this.y + dy * factor;
    
    if (this.hasObstacle(nextX, nextY)) {
      this.obstacleDetected = true;
      return;
    }
    
    this.x = nextX;
    this.y = nextY;
  }

  processCommands(commands) {
    if (!commands || commands.length === 0) {
      console.log('You Should Enter Commands');
      return;
    }

    for (const command of commands) {
      if (this.obstacleDetected) break;

      const upperCommand = command.toUpperCase();
      
      if (upperCommand === 'L' || upperCommand === 'R') {
        this.turn(upperCommand);
      } else if (upperCommand === 'F' || upperCommand === 'B') {
        this.move(upperCommand);
      } else {
        console.log('Invalid command');
      }
    }
    return this.getStatus();
  }
}

export default Rover;
