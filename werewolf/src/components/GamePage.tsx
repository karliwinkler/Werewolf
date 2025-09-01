import { useParams } from 'react-router-dom';
import {useEffect, useState} from "react";

function GamePage() {

    const { numPlayers } = useParams();
    const [index, setIndex] = useState(0);
    const [discussionTime, setDiscussionTime] = useState(5 * 60);
    const [isDiscussion, setIsDiscussion] = useState(false);

    const introText = "Everyone close your eyes."
    const closeEyesText = "Now close your eyes."
    const scientistText = "Scientist, wake up and look under the cup. Remember, this is the true answer."
    const CTText = "Conspiracy Theorist, wake up and look under the cup. You have the option to swap the true answer to confuse the other players."
    const teacherText = "Teacher, wake up and look at one other player's card."
    const studentText ="Student, wake up. Swap your character card with one of the cards in the middle, and take a look at your new card."
    const skepticText ="Skeptic, wake up. Turn over one of the cards in the middle and take a look, then turn it back over."
    const fakeMediaText = "Fake Media, wake up. Conspiracy Theorist, keep your eyes closed and put your thumb up so Fake Media can see."
    const fakeMediaText2 = "Now put your thumb down and Fake Media close your eyes."
    const finalText = "Now everyone wake up."

    let fakeMedia = true;
    if (numPlayers == '4') {
        fakeMedia = false;
    }

    const instructions = fakeMedia ?
        [introText, scientistText, closeEyesText, CTText, closeEyesText, teacherText, closeEyesText, fakeMediaText, fakeMediaText2, studentText, closeEyesText, skepticText, closeEyesText, finalText] :
        [introText, scientistText, closeEyesText, CTText, closeEyesText, teacherText, closeEyesText, studentText, closeEyesText, skepticText, closeEyesText, finalText]

    const instrDuration= fakeMedia ?
        [4000, 5000, 3000, 7000, 3000, 4000, 3000, 5000, 4000, 6000, 3000, 5000, 3000, 5000] :
        [4000, 5000, 3000, 7000, 3000, 4000, 3000, 6000, 3000, 5000, 3000, 5000]

    useEffect(() => {
        if (isDiscussion) return;
        if (index >= instructions.length) {
            setIsDiscussion(true);
            return;
        }

        const timer = setTimeout(() => {
            setIndex(prev => prev + 1);
        }, instrDuration[index]);

        return () => clearTimeout(timer);
    }, [index, instructions.length, isDiscussion]);

    useEffect(() => {
        if (!isDiscussion) return;
        if (discussionTime <= 0) return;

        const timer = setInterval(() => {
            setDiscussionTime((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [ isDiscussion, discussionTime ]);

    const formatTime = (seconds) => {
        const m = Math.floor(seconds / 60).toString().padStart(2, "0");
        const s = (seconds % 60).toString().padStart(2, "0");
        return `${m}:${s}`;
    };

    return (
        <div className="flex items-center justify-center h-screen text-5xl text-center px-4">
            {index < instructions.length ? <p>{instructions[index]}</p> :
                <div>
                    <p>You have 5 minutes to discuss what you think the true answer is:</p>
                    <h3 className="text-9xl p-10">{formatTime(discussionTime)}</h3>
                </div>
            }
        </div>
    );
}

export default GamePage