#!/usr/bin/env node
// console.log("Asad Pokemon")
// hashbang and shibang tell operating system which interprator to use here node is an interprator
// enter npm install -g    to create our cli

const yargs = require("yargs");
const { argv } = yargs(process.argv);

const printFivePokemonMoves = async (pokemonName) => {
  const apiResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );
  const pokemon = await apiResponse.json();
  const moves = pokemon.moves.map(({ move }) => move.name);
  console.log(moves.slice(0, 5));
};
printFivePokemonMoves(argv.pokemon);
