# Snake Client Project

Snake game is a very popular video game. It is a video game concept where the player maneuvers a dot and grows it by ‘eating’ pieces of food. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, upon which it dies.

This is simply a multiplayer take on the genre.

Before you can run this client, you will need to be running the server side which you can download and install from here. 

## Final Product

[In-Game Screenshot](images/snake-project.png)


## Getting Started

- Follow steps inside the snek server repo to run the server side
- Run the development snake client using the `node play.js` command.

## Rules of the Game
- Maneuver your snake to the dot in order to eat and grow larger
- Continue feeding while avoiding the edges of the game space and your own tail
- If you stop moving for a period of time, your snake will die from idleing

## Game Controls
- Use the WASD keys on your keyboard to control your snake
    - W = Up
    - A = Left
    - S = Down
    - D = Right
- You can press CTRL + C to quit out of the game server

## In-Game Communication
- You can send messages to the server as a text balloon above your snake
- Press P: Greeting ("Hello there friends!")
- Press O: Winning ("Thanks for the games!")
- Press I: Losing ("Well played!")

