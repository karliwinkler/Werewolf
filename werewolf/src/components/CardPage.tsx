import CharacterCard from "./CharacterCard.tsx";
import {useNavigate, useParams} from "react-router-dom";
import scientist_img from '../assets/scientist.webp'
import conspirator_img from '../assets/conspirator.webp'
import realmedia_img from '../assets/real_media.webp'
import student_img from '../assets/student.webp'
import skeptic_img from '../assets/skeptic.webp'
import citizen_img from '../assets/citizen.webp'
import fakemedia_img from '../assets/fake_media.webp'
import teacher_img from '../assets/teacher.webp'

const scientist = { name: "Scientist", image: scientist_img };
const conspirator = { name: "Conspiracy Theorist", image: conspirator_img };
const fakeMedia = { name: "Fake Media", image: fakemedia_img };
const realMedia = { name: "Real Media", image: realmedia_img };
const student = { name: "Student", image: student_img };
const skeptic = { name: "Skeptic", image: skeptic_img };
const teacher = { name: "Teacher", image: teacher_img };

let cardPlacement = "grid grid-cols-4 gap-4 place-items-center";

function CharacterGrid({ cards }) {
    return (
        <div className={cardPlacement}>
            {cards.map((char, i) => (
                <CharacterCard key={i} name={char.name} image_path={char.image} />
            ))}
        </div>
    );
}

function CardPage() {
    const { numPlayers } = useParams();
    const navigate = useNavigate();

    const handleNext = (numPlayers: string | undefined) => {
        navigate(`/game/${numPlayers}`);
    }

    let playingCards: any[];
    switch (numPlayers) {
        case "4":
            playingCards = [scientist, conspirator, conspirator, fakeMedia, teacher, realMedia, student]
            break;
        case "5":
            playingCards = [scientist, conspirator, conspirator, fakeMedia, teacher, realMedia, skeptic, student]
            break;
        case "6":
            playingCards = [scientist, conspirator, conspirator, fakeMedia, teacher, realMedia, skeptic, student, student]
            cardPlacement = "grid grid-cols-5 gap-4 place-items-center"
            break;
        case "7":
            playingCards = [scientist, conspirator, conspirator, fakeMedia, teacher, realMedia, skeptic, student, student, student]
            cardPlacement = "grid grid-cols-5 gap-4 place-items-center"
            break;
    }

    return (
        <div className="flex flex-col h-screen items-center justify-center gap-9">
            <div className="">
                <h3 className="text-2xl font-extrabold">You are playing with:</h3>
            </div>
                <CharacterGrid cards={playingCards} />
            <button
                className="bg-green-600 text-white px-8 py-2 rounded-xl text-2xl hover:bg-green-500 hover:scale-110 transition-all"
                onClick={() => handleNext(numPlayers)}
            >Start Game</button>
        </div>
    )
}

export default CardPage;