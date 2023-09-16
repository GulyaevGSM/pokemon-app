export type Pokemon = {
    name: string;
    weight: number;
    height: number;
    url: string;
    id?: number;
    sprites?: {
        front_default: string;
    };
};

export type PokemonList = Pokemon[];

export type PokemonPopupProps = {
    isOpen: boolean;
    onClose: () => void;
    pokemon: Pokemon;
};

export type PokemonDetailPageProps = {
    pokemon?: Pokemon
};

