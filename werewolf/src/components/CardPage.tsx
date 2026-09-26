import CharacterCard from "./CharacterCard.tsx";
import {useNavigate} from "react-router-dom";
import {IoIosArrowBack} from "react-icons/io";
import {useState} from "react";
import {CHARACTERS} from "../utils/characters.ts";


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
                <IoIosArrowBack className="text-green-900 text-4xl"/>
            </button>

            <div className="flex flex-col h-screen items-center justify-center gap-4">
                <h3 className="text-2xl font-extrabold">Select cards:</h3>
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-4 place-items-center">
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
                    className="bg-green-600 text-white px-8 py-2 rounded-xl text-2xl hover:bg-green-500 hover:scale-110 transition-all"
                    onClick={() => handleNext()}
                >Play {selectedCards.length - 3}
                </button>
            </div>
        </>
    )
}

export default CardPage;