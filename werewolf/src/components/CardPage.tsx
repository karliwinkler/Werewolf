import CharacterCard from "./CharacterCard.tsx";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {CHARACTERS} from "../utils/characters.ts";
import {IoChevronBackSharp} from "react-icons/io5";


function CardPage() {
    const navigate = useNavigate();
    const [selectedCards, setSelectedCards] = useState<number[]>([0, 1, 2, 3, 4, 8]);

    const toggleCharacter = (id: number, required: boolean) => {
        if (required) { return }
        setSelectedCards((prev) =>
            prev.includes(id)
                ? prev.filter((n) => n !== id)
                : [...prev, id]
        );
        console.log(selectedCards)
    };

    const handleNext = () => {
        navigate(`/game/?characters=${selectedCards.join(",")}`);
    }

    return (
        <>
            <button
                onClick={() => navigate(-1)}
                className="fixed top-4 left-4 md:p-2 hover:scale-110 transition-colors"
            >
                <IoChevronBackSharp className="text-customBrown text-4xl"/>
            </button>

            <div className="flex flex-col h-screen items-center justify-center gap-4 font-body">
                <h3 className="md:text-5xl text-4xl text-customBlack font-heading">Select cards:</h3>
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-4 place-items-center">
                        {CHARACTERS.map((char) => (
                            <CharacterCard
                                key={char.id}
                                name={char.name}
                                image_path={char.image}
                                isSelected={selectedCards.includes(char.id)}
                                onClick={() => toggleCharacter(char.id, char.require)}
                            />
                        ))}
                    </div>

                <button
                    className="bg-customYellow text-customBrown mt-6 px-10 py-3 text-3xl md:hover:scale-110 md:hover:rotate-3 transition-all"
                    onClick={() => handleNext()}
                >Play {selectedCards.length - 3}
                </button>
            </div>
        </>
    )
}

export default CardPage;