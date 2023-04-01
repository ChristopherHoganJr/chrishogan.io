"use client";
import React, { type FC, useState } from "react";
import axios from "axios";

const PokedexSection: FC = () => {
  const [pokemonName, setPokemonName] = useState<string>("charizard");
  const [pokemon, setPokemon] = useState<any>();
  const [notFound, setNotFound] = useState<boolean>(false);

  const searchPokemon = (e: any) => {
    e.preventDefault();
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
      .then((res) => {
        setPokemon(res.data);
        setNotFound(false);
      })
      .catch((err) => setNotFound(true));
  };

  return (
    <section className="w-full bg-[var(--color-white)] p-4">
      <div className=" max-w-7xl mx-auto  ">
        <div className="flex flex-col gap-5  p-4 border-2 border-[var(--color-black)] rounded-md">
          <h2 className="font-bold text-4xl text-[var(--color-black)] text-center">
            Sorting Data
          </h2>
          <div className="">
            <form
              className="flex flex-col md:flex-row items-center justify-center gap-5"
              onSubmit={(e) => searchPokemon(e)}
            >
              <div className="flex md:flex-row flex-col gap-2 justify-start items-center">
                <p className=" text-xl font-semibold text-center md:text-left">
                  Pokemon Name:
                </p>

                <input
                  type="text"
                  value={pokemonName}
                  className="p-2 rounded-md border-2 focus:outline-[var(--color-green)] border-[var(--color-black)]"
                  onChange={(e) => setPokemonName(e.target.value)}
                />
              </div>
              <button
                className="my-0 mx-4 -translate-y-2 transition-all md:active:translate-y-0 drop-shadow-[0_10px_5px_rgba(0,0,0,0.5)] active:drop-shadow-[0px_0_5px_rgba(0,0,0,0.5)] md:hover:-translate-y-4 md:hover:drop-shadow-[0_18px_5px_rgba(0,0,0,0.5)] text-xl border-2 text-[var(--color-grey)] border-[var(--color-grey)] rounded-md py-3 px-6 bg-[var(--color-black)] md:hover:border-[var(--color-white)] md:hover:text-[var(--color-white)]"
                disabled={pokemonName.length === 0 ? true : false}
              >
                Look Up Pokemon
              </button>
            </form>
          </div>
          <div className="">
            {notFound === true ? (
              <h3 className="text-xl font-semibold text-center">
                That pokemon does not exist or you did not spell the pokemon
                name right.
              </h3>
            ) : notFound === false && !pokemon ? (
              <p className=" text-xl font-semibold text-center">
                Please enter a pokemon name to see stats.
              </p>
            ) : (
              <div className="flex flex-col gap-5">
                <div className="flex justify-center items-center">
                  <img src={pokemon.sprites.front_default} alt="" />

                  <h3>
                    <span className="font-bold text-xl">{pokemonName}</span> -
                    [#
                    {pokemon.id}]
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border-2 border-[var(--color-grey)] rounded-md">
                    {/* Types */}
                    {pokemon.types.length > 1 ? (
                      <h4 className="font-bold text-xl text-center">Types</h4>
                    ) : (
                      <h4 className="font-bold text-lg text-center">Type</h4>
                    )}
                    <div className="flex flex-col mt-2 border-t-2 border-[var(--color-grey)] flex-wrap justify-content-center align-items-center">
                      {pokemon.types.map((e: any, idx: number) => {
                        return (
                          <div className="flex flex-col gap-2">
                            {" "}
                            <p key={idx} className="text-center">
                              {e.type.name}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  {/* Games */}
                  <div className="border-2 border-[var(--color-grey)] rounded-md">
                    {pokemon.game_indices.length > 1 ? (
                      <h4 className="font-bold text-xl text-center">Games</h4>
                    ) : (
                      <h4 className="font-bold text-lg text-center">Game</h4>
                    )}
                    <div className="flex flex-col mt-2 border-t-2 border-[var(--color-grey)]  justify-content-center align-items-center overflow-scroll h-[200px]">
                      {pokemon.game_indices.map((e: any, idx: number) => {
                        return (
                          <p key={idx} className={`text-center`}>
                            {e.version.name}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                  {/* Moves */}
                  <div className="border-2 border-[var(--color-grey)] rounded-md">
                    <h4 className="font-bold text-xl text-center">
                      Able to learn moves
                    </h4>

                    <div className="flex flex-col mt-2 border-t-2 border-[var(--color-grey)]  justify-content-center align-items-center overflow-scroll h-[200px]">
                      {pokemon.moves.map((e: any, idx: number) => {
                        return (
                          <p key={idx} className="text-center">
                            {e.move.name}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PokedexSection;
