import { useState } from "react";
import PokemonDetailPage from "./PokemonDetailPage.tsx";
import {PokemonPopupProps} from "../utils/types.ts";

function PokemonPopup({ pokemon, onClose }: PokemonPopupProps) {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(false);
        onClose();
    };

    return (
        <div className={`popup ${isOpen ? "active" : ""}`}>
            <div className="popup-content">
                <span className="close" onClick={handleClose}>
                  &times;
                </span>
                <PokemonDetailPage pokemon={pokemon} />
            </div>
        </div>
    );
}

export default PokemonPopup;
