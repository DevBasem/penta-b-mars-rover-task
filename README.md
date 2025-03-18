# Mars Rover Penta-b Task

A JavaScript implementation of a Mars Rover navigation system that allows you to control a rover on a grid-based surface, handling movement commands and obstacle detection.

## Features

- Move the rover forward and backward
- Turn the rover left and right
- Detect and avoid obstacles
- Get position and direction status
- Handle invalid commands gracefully

## Installation

1. Clone this repository
2. Ensure you have Node.js installed
3. Import the Rover class into your project:
```javascript
import Rover from './mars-rover.js';
```

## Usage
### Running Tests

The application includes a test file (`test-rover.js`) with various test scenarios. To run the tests:

```bash
node test-rover.js
```

This will run through several test scenarios including:
- Basic movement
- Turning and backward movement
- Complex command sequences
- Obstacle detection
- Empty command handling
- Alternating movement patterns

### Creating a New Rover

```javascript
// Parameters: x, y, direction, obstacles-(optional)
const rover = new Rover(0, 0, 'NORTH', [[2, 2]]); // Creates a rover at (0,0) facing North with an obstacle at (2,2)
```

### Valid Directions

The rover accepts the following directions when initializing:
- `'NORTH'`
- `'EAST'`
- `'SOUTH'`
- `'WEST'`

### Commands

The rover accepts the following commands:
- `'F'`: Move forward one grid point
- `'B'`: Move backward one grid point
- `'L'`: Turn left 90 degrees
- `'R'`: Turn right 90 degrees

### Example Usage

```javascript
// Create a new rover at position (0,0) facing NORTH
const rover = new Rover(0, 0, 'NORTH');

// Send commands to the rover
const status = rover.processCommands('FFRFF');
console.log(status);
```

### Status Output Format

The rover's status is returned in the format: `(x, y) DIRECTION [STOPPED]`
- `x, y`: Current coordinates
- `DIRECTION`: Current facing direction
- `STOPPED`: Added if an obstacle was encountered

Examples:
```
(0, 2) NORTH
(2, 2) EAST STOPPED  // When an obstacle is encountered
```

## Error Handling

The system handles several error cases:
- Invalid directions when creating the rover
- Invalid commands during movement
- Empty command sequences
- Obstacle detection and avoidance