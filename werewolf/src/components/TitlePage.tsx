import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '/Users/karliwinkler/IdeaProjects/Werewolf/werewolf/src/index.css'
import {BsFillQuestionCircleFill} from "react-icons/bs";

function TitlePage() {
    const navigate = useNavigate();

    const handleBegin = () => navigate(`/cards`);
    const handleHowToPlay = () => navigate(`/instructions`);

    return (
        <div className="h-screen w-screen text-customBlack flex flex-col font-body">

            {/* Top Right Button */}
            <div className="flex justify-end p-6">
                <button
                    onClick={handleHowToPlay}
                    className="text-4xl text-customBrown md:hover:scale-110 transition-all"
                >
                    <BsFillQuestionCircleFill/>
                </button>
            </div>

            {/* Main Title Section */}
            <div className="flex flex-col items-center justify-center flex-grow text-center px-4 pb-16">

                <div className="relative inline-block">
                    <img src="../src/assets/scientist_no_bg.png" alt="Scientist"
                         className="md:w-44 w-32 absolute md:-top-20 md:-left-44 -bottom-64 -left-4"/>

                    <img src="../src/assets/skeptic_no_bg.png" alt="Skeptic"
                         className="md:w-44 w-32 absolute md:-top-20 md:-left-44 -bottom-64 -left-4"/>

                    <motion.h1
                        className="md:text-8xl tracking-wide text-7xl font-heading"
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 1, ease: "easeOut"}}
                    >
                        The Hidden Truth
                    </motion.h1>

                    <img src="../src/assets/conspirator_no_bg.png" alt="Conspiracy Theorist"
                         className="md:w-40 w-32 absolute md:-bottom-40 md:-right-24 -right-2 -top-40 rotate-6"/>

                    <img src="../src/assets/citizen_no_bg.png" alt="Citizen"
                         className="md:w-36 w-28 absolute md:-bottom-40 md:-left-20 -bottom-80 left-16 -rotate-12"/>
                </div>

                <motion.h2
                    className="md:text-3xl text-2xl italic text-customTeal2 mt-2"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 0.6, duration: 1}}
                >
                    A scientific mystery
                </motion.h2>

                {/* Begin Button */}
                <button
                    onClick={handleBegin}
                    className="md:mt-10 mt-6 bg-customYellow text-customBrown px-10 py-3 md:text-3xl text-2xl
                                md:hover:rotate-3 md:hover:scale-110 transition-all"
                >
                    Begin
                </button>
            </div>

            <div className="flex items-center justify-center text-gray-400 text-xs m-2 text-center">
                <p>Created by Amy, Ben, Dave, Karli, and Libby</p>
            </div>

        </div>
    );
}

export default TitlePage;
