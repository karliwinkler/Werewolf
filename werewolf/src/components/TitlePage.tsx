import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function TitlePage() {
    const navigate = useNavigate();

    const handleBegin = () => navigate(`/selection`);
    const handleHowToPlay = () => navigate(`/instructions`);

    return (
        <div className="h-screen w-screen text-green-900 flex flex-col ">

            {/* Top Right Button */}
            <div className="flex justify-end p-6">
                <button
                    onClick={handleHowToPlay}
                    className="bg-green-600 text-white px-5 py-2 rounded-xl text-xl shadow-lg
                               hover:bg-green-500 hover:scale-105 transition-all"
                >
                    How to Play
                </button>
            </div>

            {/* Main Title Section */}
            <div className="flex flex-col items-center justify-center flex-grow text-center px-4 pb-16">

                <motion.h1
                    className="text-6xl font-extrabold tracking-wide"
                    initial={{opacity: 0, y: 30}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1, ease: "easeOut"}}
                >
                    The Hidden Truth
                </motion.h1>

                <motion.h2
                    className="text-2xl italic text-gray-500 mt-2"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 0.6, duration: 1}}
                >
                    A scientific mystery
                </motion.h2>


                {/* Begin Button */}
                <button
                    onClick={handleBegin}
                    className="mt-10 bg-green-600 text-white px-10 py-3 rounded-2xl text-3xl
                               shadow-xl hover:bg-green-500 hover:scale-110 transition-all"
                >
                    Begin
                </button>
            </div>

        </div>
    );
}

export default TitlePage;
