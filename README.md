[![Netlify Status](https://api.netlify.com/api/v1/badges/740f2f30-496d-4e80-a1c1-1c4c8d9a5d40/deploy-status)](https://app.netlify.com/sites/cranky-euclid-a09a7b/deploys)

# React Game Of Life

John Conways Game of Life is a cellular automation.
What in tarnation is  **that**, you ask?

A cellular automaton is a collection of "colored" cells on a grid that each live or die according to a set of rules based on the states of neighboring cells. 

## The rules are:

1. For live cells:
  - Each cell with one or no neighbors dies, as if by solitude.  
  - Each cell with four or more neighbors dies, as if by overpopulation.
  - Each cell with two or three neighbors survives.
2. For dead cells:
  -  Each cell with three neighbors now lives.

## Getting Started
- Fork or directly clone this repository to your local machine
- Run `cd life` to navigate to the app root directory
- Use the yarn command to install dependencies including:
  - React
  - Material UI
- Once the dependencies are finished installing, use the yarn start command inside the root directory to open the app in your local browser of choice

## Features 
- Toggle any square by clicking
- Click and drag slowly while holding `shift` key to "draw" over squares 
- Select any preset button to load sample starting grids.
- Step through each generation 
- Get a random configuration

## Future Features
- Add Custom Speed
- Add Glider and Rocket Patterns in Presets



### Project Planning
https://trello.com/b/Qbk4Pwhb/game-of-life
