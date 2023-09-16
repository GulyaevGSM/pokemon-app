import {PokemonDetailPageProps} from "../utils/types.ts";

function PokemonDetailPage({ pokemon }: PokemonDetailPageProps) {
    return (
        <div className='detail'>
            <h2>{pokemon?.name}</h2>
            <img src={pokemon?.sprites?.front_default} alt={pokemon?.name} />
            <p>Weight: {pokemon?.weight}</p>
            <p>Height: {pokemon?.height}</p>
        </div>
    );
}

export default PokemonDetailPage;
