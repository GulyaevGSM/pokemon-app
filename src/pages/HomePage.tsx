import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@chakra-ui/react";
import PokemonPopup from "../components/PokemonPopup.tsx";
import {Pokemon, PokemonList} from "../utils/types.ts";

function HomePage() {
    const [pokemonList, setPokemonList] = useState<PokemonList>([]);
    const [selectedPokemon, setSelectedPokemon] = useState<null | Pokemon>(null);
    const [sortBy, setSortBy] = useState("weight"); // По умолчанию сортируем по весу
    const [sortDirection, setSortDirection] = useState("asc"); // По умолчанию сортируем в возрастающем порядке

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon?limit=10`)
            .then((response) => {
                const results = response.data.results;
                return Promise.all(
                    results.map((pokemon: Pokemon) => axios.get(pokemon.url))
                );
            })
            .then((pokemonData) => {
                let sortedPokemon = [...pokemonData]
                sortedPokemon.sort((a, b) => {
                    const aProperty = a.data[sortBy];
                    const bProperty = b.data[sortBy];
                    return sortDirection === "asc" ? aProperty - bProperty : bProperty - aProperty;
                });
                sortedPokemon = sortedPokemon.map((item) => item.data);
                setPokemonList(sortedPokemon);
            });

        const handleEscapeKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setSelectedPokemon(null);
            }
        };

        if (selectedPokemon) {
            window.addEventListener("keydown", handleEscapeKey);
        } else {
            window.removeEventListener("keydown", handleEscapeKey);
        }

        return () => {
            window.removeEventListener("keydown", handleEscapeKey);
        };
    }, [sortBy, sortDirection, selectedPokemon]);

    const handlePokemonClick = (pokemon: Pokemon) => {
        setSelectedPokemon(pokemon);
    };

    const toggleSortDirection = () => {
        setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    };

    return (
        <div>
            <h1 style={{
                textAlign: 'center',
                margin: 20
            }}>Pokemon List</h1>
            <div className="button-container">
                <Button colorScheme="blue" onClick={() => setSortBy("weight")}>
                    По Весу
                </Button>
                <Button colorScheme="blue" onClick={() => setSortBy("height")}>
                    По Росту
                </Button>
                <Button colorScheme="blue" onClick={toggleSortDirection}>
                    {sortDirection === "asc" ? "По возрастанию" : "По убыванию"}
                </Button>
            </div>
            <ul className="pokemon-list">
                {pokemonList.map((pokemon) => (
                    <li key={pokemon.name}>
                        <div className="pokemon-card" onClick={() => handlePokemonClick(pokemon)}>
                            <img
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                                    alt={pokemon.name}
                            />
                            <p>{pokemon.name}</p>
                        </div>
                    </li>
                ))}
            </ul>
            {selectedPokemon && <PokemonPopup isOpen={true} pokemon={selectedPokemon} onClose={() => setSelectedPokemon(null)} />}
        </div>
    );
}

export default HomePage;
