import {PokemonDetailPageProps} from "../utils/types.ts";
import {Detail} from "../styles.tsx";

function PokemonDetailPage({ pokemon }: PokemonDetailPageProps) {
    return (
        <Detail>
            <h2>{pokemon?.name}</h2>
            <img src={pokemon?.sprites?.front_default} alt={pokemon?.name} />
            <p>Weight: {pokemon?.weight}</p>
            <p>Height: {pokemon?.height}</p>
        </Detail>
    );
}

export default PokemonDetailPage;
