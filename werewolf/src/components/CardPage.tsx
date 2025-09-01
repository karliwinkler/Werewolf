import CharacterCard from "./CharacterCard.tsx";
import {useNavigate, useParams} from "react-router-dom";

function CardPage() {

    const { numPlayers } = useParams();
    const navigate = useNavigate();

    const handleNext = (numPlayers: string) => {
        navigate(`/game/${numPlayers}`);
    }

    switch (numPlayers) {
        case '4': {
            return (
                <div className="flex flex-col h-screen items-center justify-center gap-9">
                    <div className="">
                        <h3 className="text-2xl font-bold">You are playing with:</h3>
                    </div>
                    <div className="grid grid-cols-4 gap-4 place-items-center">
                        <CharacterCard name={"Scientist"}>
                        </CharacterCard>
                        <CharacterCard name={"Conspiracy Theorist"}>
                        </CharacterCard>
                        <CharacterCard name={"Real Media"}>
                        </CharacterCard>
                        <CharacterCard name={"Student"}>
                        </CharacterCard>
                        <CharacterCard name={"Skeptic"}>
                        </CharacterCard>
                        <CharacterCard name={"Citizen"}>
                        </CharacterCard>
                        <CharacterCard name={"Citizen"}>
                        </CharacterCard>
                    </div>
                    <button
                        className="bg-green-500 text-white px-8 py-2 rounded-lg text-2xl hover:bg-green-600 transition-colors"
                        onClick={() => handleNext(numPlayers)}
                    >Start Game</button>
                </div>
            )
        }
        case "5": {
            return (
                <div className="flex flex-col h-screen items-center justify-center gap-9">
                    <h3 className="text-2xl font-bold">You are playing with:</h3>
                    <div className="grid grid-cols-4 gap-4 place-items-center">
                        <CharacterCard name={"Scientist"}>
                        </CharacterCard>
                        <CharacterCard name={"Conspiracy Theorist"}>
                        </CharacterCard>
                        <CharacterCard name={"Real Media"}>
                        </CharacterCard>
                        <CharacterCard name={"Fake Media"}>
                        </CharacterCard>
                        <CharacterCard name={"Student"}>
                        </CharacterCard>
                        <CharacterCard name={"Skeptic"}>
                        </CharacterCard>
                        <CharacterCard name={"Citizen"}>
                        </CharacterCard>
                        <CharacterCard name={"Citizen"}>
                        </CharacterCard>
                    </div>
                    <button
                        className="bg-green-500 text-white px-8 py-2 rounded-lg text-2xl hover:bg-green-600 transition-colors"
                        onClick={() => handleNext(numPlayers)}
                    >Start Game</button>
                </div>
            )
        }
        case "6": {
            return (
                <div className="flex flex-col h-screen items-center justify-center gap-9">
                    <h3 className="text-2xl font-bold">You are playing with:</h3>
                    <div className="grid grid-cols-5 gap-4 place-items-center">
                        <CharacterCard name={"Scientist"}>
                        </CharacterCard>
                        <CharacterCard name={"Conspiracy Theorist"}>
                        </CharacterCard>
                        <CharacterCard name={"Real Media"}>
                        </CharacterCard>
                        <CharacterCard name={"Fake Media"}>
                        </CharacterCard>
                        <CharacterCard name={"Student"}>
                        </CharacterCard>
                        <CharacterCard name={"Skeptic"}>
                        </CharacterCard>
                        <CharacterCard name={"Citizen"}>
                        </CharacterCard>
                        <CharacterCard name={"Citizen"}>
                        </CharacterCard>
                        <CharacterCard name={"Citizen"}>
                        </CharacterCard>
                    </div>
                    <button
                        className="bg-green-500 text-white px-8 py-2 rounded-lg text-2xl hover:bg-green-600 transition-colors"
                        onClick={() => handleNext(numPlayers)}
                    >Start Game</button>
                </div>
            )
        }
        case "7": {
            return (
                <div className="flex flex-col h-screen items-center justify-center gap-9">
                    <h3 className="text-2xl font-bold">You are playing with:</h3>
                    <div className="grid grid-cols-5 gap-4 place-items-center">
                        <CharacterCard name={"Scientist"}>
                        </CharacterCard>
                        <CharacterCard name={"Conspiracy Theorist"}>
                        </CharacterCard>
                        <CharacterCard name={"Real Media"}>
                        </CharacterCard>
                        <CharacterCard name={"Fake Media"}>
                        </CharacterCard>
                        <CharacterCard name={"Student"}>
                        </CharacterCard>
                        <CharacterCard name={"Skeptic"}>
                        </CharacterCard>
                        <CharacterCard name={"Citizen"}>
                        </CharacterCard>
                        <CharacterCard name={"Citizen"}>
                        </CharacterCard>
                        <CharacterCard name={"Citizen"}>
                        </CharacterCard>
                        <CharacterCard name={"Citizen"}>
                        </CharacterCard>
                    </div>
                    <button
                        className="bg-green-500 text-white px-8 py-2 rounded-lg text-2xl hover:bg-green-600 transition-colors"
                        onClick={() => handleNext(numPlayers)}
                    >Start Game</button>
                </div>
            )
        }
        default: {
            return (
                <div>
                    <p>Error: invalid number of players: {numPlayers}</p>
                </div>
            )
        }
    }


}

export default CardPage;