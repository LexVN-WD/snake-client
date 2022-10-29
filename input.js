let connection;

// STDIN SETUP
const setupInput = function(connection) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (key) => handleUserInput (key, connection));
  return stdin;
};

// IN_GAME MESSAGES
const greeting = "Say: Hello there friends!";
const win = "Say: Thanks for the games!";
const lose = "Say: Well played!";

// USER INPUT CODE
const handleUserInput = function(key, connection) {
  if (key === 'w') {
    //console.log("Move: up");
    connection.write("Move: up");
  }
  if (key === 'a') {
    //console.log("Move: left");
    connection.write("Move: left");
  }
  if (key === 's') {
    //console.log("Move: down");
    connection.write("Move: down");
  }
  if (key === 'd') {
    //console.log("Move: right");
    connection.write("Move: right");
  }
  if (key === 'p') {
    connection.write(greeting);
  }
  if (key === 'o') {
    connection.write(win);
  }
  if (key === 'i') {
    connection.write(lose);
  }
  if (key === '\u0003') {
    process.exit();
  }
};
/* 
(1): handleUserInput takes players the WASD keyboard commands and transcribes them into movements for the snake
(2): pressing 'p', 'o', or 'i' on the keyboard while in-game will play different messages for greeting, win, and lose
(3): if you press the keyboard command for \u0003 (CTRL + C), the player will be able to quit the game
 */


// EXPORTS
module.exports = {
  setupInput,
};