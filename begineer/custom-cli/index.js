#!/usr/bin/env node
// console.log("Asad Pokemon")
// hashbang and shibang tell operating system which interprator to use here node is an interprator
// enter npm install -g    to create our cli

// // How to pass options to a cli
// const yargs = require("yargs");
// const { argv } = yargs(process.argv);

// const printFivePokemonMoves = async (pokemonName) => {
//   const apiResponse = await fetch(
//     `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
//   );
//   const pokemon = await apiResponse.json();
//   const moves = pokemon.moves.map(({ move }) => move.name);
//   console.log(moves.slice(0, 5));
// };
// printFivePokemonMoves(argv.pokemon);

// How to Intract to a cli
// install inquirer @8.2.5

const inquirer = require("inquirer");
const printFivePokemonMoves = async (pokemonName) => {
  const apiResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );
  const pokemon = await apiResponse.json();
  const moves = pokemon.moves.map(({ move }) => move.name);
  console.log(moves.slice(0, 5));
};
const prompt = inquirer.createPromptModule();
// qestion like array of objects
prompt([
  {
    type: "input",
    name: "pokemon",
    message: "Enter a pokemon name to view first 5 move:",
  },
]).then((answer) => {
  const pokemon = answer.pokemon;
  printFivePokemonMoves(pokemon);
});

