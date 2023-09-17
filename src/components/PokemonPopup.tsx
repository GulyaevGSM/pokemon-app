import { useState } from "react";
import PokemonDetailPage from "./PokemonDetailPage.tsx";
import {PokemonPopupProps} from "../utils/types.ts";
import {Close, PopupContent} from "../styles.tsx";

function PokemonPopup({ pokemon, onClose }: PokemonPopupProps) {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(false);
        onClose();
    };

    return (
        <div className={`popup ${isOpen ? "active" : ""}`}>
            <PopupContent>
                <Close onClick={handleClose}>
                  &times;
                </Close>
                <PokemonDetailPage pokemon={pokemon} />
            </PopupContent>
        </div>
    );
}

export default PokemonPopup;
