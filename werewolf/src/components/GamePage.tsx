import {useNavigate, useParams} from 'react-router-dom';
import {useEffect, useState} from "react";

function GamePage() {

    const navigate = useNavigate();
    const { numPlayers } = useParams();

    const [index, setIndex] = useState(0);
    const [discussionTime, setDiscussionTime] = useState(5 * 60);
    const [isDiscussion, setIsDiscussion] = useState(false);

    const introStr= "Everyone close your eyes."
    const closeEyesStr = "Now close your eyes."
    const scientistStr = "Scientist, open your eyes. Check the information pile and look at the bottom. You now know if the information is true or false."
    const CTStr = "Conspiracy theorists, open your eyes. You will also check the information pile and look at the bottom. You will also know if the information is true or false, but you will try to make everyone believe the opposite."
    const teacherStr = "Teacher, open your eyes. Flip over one card in the middle and leave it face up."
    const studentStr ="Student, open your eyes. Swap your card with one of the cards in the middle that is still face down, and look at your new card. Note who you are now and close your eyes."
    const skepticStr ="Skeptic, open your eyes. Take a look at one card in the middle."
    const fakeMediaStr = "Conspiracy theorist, keep your eyes closed but put your thumb up."
    const fakeMediaStr2 = "Fake media, open your eyes. Take a look and see if there are conspiracy theorists who have put their thumbs up."
    const finalStr = "Now everyone wake up."
    const realMediaStr = "Real Media, open your eyes.  You may look at another player’s card and return it face down."

    type Line = { text: string; duration: number };

    const introText: Line = { text: introStr, duration: 4000 };
    const scientistText: Line = { text: scientistStr, duration: 5000 };
    const closeEyesText: Line = { text: closeEyesStr, duration: 3000 };
    const CTText: Line = { text: CTStr, duration: 7000 };
    const fakeMediaText: Line = { text: fakeMediaStr, duration: 5000 };
    const fakeMediaText2: Line = { text: fakeMediaStr2, duration: 5000 };
    const teacherText: Line = { text: teacherStr, duration: 5000 };
    const realMediaText: Line = { text: realMediaStr, duration: 5000 };
    const skepticText: Line = { text: skepticStr, duration: 5000 };
    const studentText: Line = { text: studentStr, duration: 5000 };
    const finalText: Line = { text: finalStr, duration: 5000 };

    const [isPaused, setIsPaused] = useState(false);

    const handleBack = () => {
        navigate(`/title`);
    }

    const instructions4 = [introText, scientistText, closeEyesText, CTText, closeEyesText, fakeMediaText,
        fakeMediaText2, closeEyesText, teacherText, closeEyesText, realMediaText, closeEyesText, studentText, closeEyesText, finalText]

    const instructions5 = [introText, scientistText, closeEyesText, CTText, closeEyesText, fakeMediaText,
        fakeMediaText2, closeEyesText, teacherText, closeEyesText, realMediaText, closeEyesText, skepticText, closeEyesText, studentText, closeEyesText, finalText]

    const instructions6plus = [introText, scientistText, closeEyesText, CTText, closeEyesText, fakeMediaText,
        fakeMediaText2, closeEyesText, teacherText, closeEyesText, realMediaText, closeEyesText, skepticText, closeEyesText, finalText]

    let instructions;
    switch (numPlayers) {
        case '4':
            instructions = instructions4;
            break;
        case '5':
            instructions = instructions5;
            break;
        default:
            instructions = instructions6plus;
    }

    const instrDuration = instructions.map(line => line.duration);

    useEffect(() => {
        if (isDiscussion) return;
        if (isPaused) return;
        if (index >= instructions.length) {
            setIsDiscussion(true);
            return;
        }

        const timer = setTimeout(() => {
            setIndex(prev => prev + 1);
        }, instrDuration[index]);

        return () => clearTimeout(timer);
    }, [index, instructions.length, isDiscussion, isPaused]);

    useEffect(() => {
        if (!isDiscussion) return;
        if (discussionTime <= 0) return;
        if (isPaused) return;

        const timer = setInterval(() => {
            setDiscussionTime((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [ isDiscussion, discussionTime, isPaused ]);

    const formatTime = (seconds) => {
        const m = Math.floor(seconds / 60).toString().padStart(2, "0");
        const s = (seconds % 60).toString().padStart(2, "0");
        return `${m}:${s}`;
    };

    return (
        <div className="flex items-center justify-center h-screen text-5xl text-center px-4">
            {index < instructions.length ?

                <div>
                    <div className="px-10">
                        <p>{instructions[index].text}</p>
                    </div>

                    <button
                        onClick={() => setIsPaused((p) => !p)}
                        className="fixed bottom-14 left-1/2 -translate-x-1/2 bg-green-600 text-white px-8 py-2
                        rounded-xl text-2xl hover:scale-110 hover:bg-green-500 transition-all"
                    >
                        {isPaused ? "Play" : "Pause"}
                    </button>

                </div>

                :
                <div className="px-10">
                    {discussionTime == 0 ? <p>Time's up!</p> :
                        <p>You have 5 minutes to discuss what you think the true answer is:</p>}

                    <h3 className="text-9xl p-10">{formatTime(discussionTime)}</h3>

                    <button
                        className="bg-green-600 text-white px-8 py-2 rounded-xl text-2xl
                        hover:bg-green-500 hover:scale-110 transition-all"
                        onClick={() => handleBack()}>
                        Restart Game
                    </button>
                </div>
            }
        </div>
    );
}

export default GamePage