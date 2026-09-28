import {useNavigate, useSearchParams} from 'react-router-dom';
import {useEffect, useRef, useState} from "react";
import {FaPause, FaPlay} from "react-icons/fa6";
import {scriptBuilder} from "../utils/scriptBuilder.ts";
import {IoChevronBackSharp} from "react-icons/io5";

function GamePage() {
    const [searchParams] = useSearchParams()
    const characterIds = searchParams.get("characters")?.split(",") ?? [];
    const navigate = useNavigate();

    const [index, setIndex] = useState(0);
    const [discussionTime, setDiscussionTime] = useState(5 * 60);
    const [isDiscussion, setIsDiscussion] = useState(false);
    const [isDiscussionPaused, setIsDiscussionPaused] = useState(false);

    const [isPaused, setIsPaused] = useState(false);
    const [speed, setSpeed] = useState(1); // 1 = normal, 0.5 = slower, 2 = faster
    const toggleSpeed = (value: number) => {
        setSpeed(prev => (prev === value ? 1 : value));
    };

    const handleBack = () => {
        navigate(`/title`);
    }
    const sortedCharacterIds = characterIds
        .map((i) => Number(i))
        .sort((a, b) => a - b);
    const { texts, durations, audios } = scriptBuilder(sortedCharacterIds)
    const audioRef = useRef<HTMLAudioElement | null>(null);

// Play the new line's audio whenever index changes
    useEffect(() => {
        if (isDiscussion) return;
        if (index >= texts.length) return;

        // stop whatever was playing before
        audioRef.current?.pause();

        const clipSrc = audios[index];
        if (!clipSrc) return; // no audio for this line — skip silently

        const audio = new Audio(clipSrc);
        audio.playbackRate = speed;
        audioRef.current = audio;

        if (!isPaused) {
            audio.play();
        }

        return () => {
            audio.pause();
        };
    }, [index, isDiscussion]);

// Keep audio in sync with pause/resume
    useEffect(() => {
        if (!audioRef.current) return;

        if (isPaused || isDiscussion) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
    }, [isPaused, isDiscussion]);

// Keep audio speed in sync with playback speed control
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.playbackRate = speed;
        }
    }, [speed]);

    const remainingRef = useRef(durations[0] ?? 0);
    const segmentStartRef = useRef<number|null>(null);

    // Reset remaining time whenever we move to a new line
    useEffect(() => {
        remainingRef.current = durations[index] ?? 0;
    }, [index]);

    useEffect(() => {
        if (isDiscussion) return;
        if (isPaused) return;
        if (index >= texts.length) {
            setIsDiscussion(true);
            return;
        }

        segmentStartRef.current = Date.now();
        const wallClockDelay = remainingRef.current / speed;

        const timer = setTimeout(() => {
            setIndex(prev => prev + 1);
        }, wallClockDelay);

        return () => {
            clearTimeout(timer);
            if (segmentStartRef.current == null) return;
            const wallElapsed = Date.now() - segmentStartRef.current;
            const consumed = wallElapsed * speed;
            remainingRef.current = Math.max(0, remainingRef.current - consumed);
        }
    }, [index, texts.length, isDiscussion, isPaused, speed]);

    useEffect(() => {
        if (!isDiscussion) return;
        if (discussionTime <= 0) return;
        if (isPaused || isDiscussionPaused) return;

        const timer = setInterval(() => {
            setDiscussionTime((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [ isDiscussion, discussionTime, isPaused, isDiscussionPaused]);

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60).toString().padStart(2, "0");
        const s = (seconds % 60).toString().padStart(2, "0");
        return `${m}:${s}`;
    };

    return (
        <>
            <button
                onClick={() => navigate(-1)}
                className="fixed top-4 left-4 md:p-2 hover:scale-110 transition-colors"
            >
                <IoChevronBackSharp className="text-customBrown text-4xl"/>
            </button>

        <div className="flex items-center justify-center h-screen md:text-5xl text-3xl text-center px-4 text-customBrown font-body">
            {index < texts.length ?
                <div>
                    <div className="md:px-10">
                        <p className="whitespace-pre-line">{texts[index]}</p>
                    </div>

                    <div className="fixed md:bottom-14 bottom-8 left-1/2 -translate-x-1/2 text-customBlack">
                        <div className="flex gap-6">
                            <button onClick={() => toggleSpeed(0.75)}
                                    className={speed === 0.75 ? 'text-4xl md:hover:scale-110 transition-all font-bold' : 'text-4xl md:hover:scale-110 transition-all'}
                            >
                                0.5x
                            </button>

                            <button
                                onClick={() => setIsPaused((p) => !p)}
                                className="text-5xl md:hover:scale-110 transition-all ">
                                {isPaused ? <FaPlay/> : <FaPause/>}
                            </button>
                            <button onClick={() => toggleSpeed(1.25)}
                                    className={speed === 1.25 ? 'text-4xl md:hover:scale-110 transition-all font-bold' : 'text-4xl hover:scale-110 transition-all'}
                            >
                                2x
                            </button>
                        </div>
                    </div>
                </div>

                :
                <div className="flex items-center flex-col ">
                    {discussionTime == 0 ? <p>Time's up!</p> :
                        <p className="mx-8">You have 5 minutes to discuss what you think the true answer is:</p>}

                    <div>
                        <h3 className="text-9xl p-10 tabular-nums">{formatTime(discussionTime)}</h3>
                    </div>

                    <div className="flex flex-col gap-4 m-4 w-52">
                        <button
                            className="bg-customYellow  px-6 py-2 text-2xl font-bold
                        md:hover:rotate-3 md:hover:scale-110 transition-all"
                            onClick={() => handleBack()}>
                            Restart Game
                        </button>
                        <button
                            className="bg-customYellow  px-6 py-2 text-2xl font-bold
                        md:hover:rotate-3 md:hover:scale-110 transition-all"
                            onClick={() => setIsDiscussionPaused(prev => !prev)}
                            >
                            {isDiscussionPaused ? 'Resume Timer' : 'Pause Timer'}
                        </button>
                    </div>

                </div>
            }
            </div>
        </>
    );
}

export default GamePage