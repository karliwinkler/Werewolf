import {useNavigate} from "react-router-dom";

function InstructionPage() {

    const navigate = useNavigate();

    const handleBegin = () => {
        navigate(`/title`);
    }

    return (
        <>
            <div className="flex flex-col items-center px-4">
                <h3 className="flex justify-center text-4xl pt-16 font-bold"> How To Play:</h3>

                <div className="pt-4 max-w-2xl text-left leading-relaxed space-y-4">
                    <div>
                        There is one objective of the game:
                        <strong> uncover the truth </strong> or
                        <strong> deceive the other players</strong>.
                    </div>

                    <div>
                        There are two main sides:
                        <ul className="list-disc ml-6 mt-2">
                            <li><span className="text-green-600 font-semibold">Green team</span> — the good team</li>
                            <li><span className="text-red-600 font-semibold">Red team</span> — the bad team</li>
                            <li><span className="text-gray-500 font-semibold">Grey cards</span> — neutral</li>
                        </ul>
                    </div>

                    <div>
                        Depending on your role, you may know what's under the cup, or you may have to determine the
                        answer through clues from other players.
                    </div>

                    <div>
                        The <span className="text-red-600 font-bold">red team</span> tries to convince others to vote
                        incorrectly,
                        while the <span className="text-green-600 font-bold">green team</span> works to reveal the
                        correct answer.
                    </div>
                </div>


                <div className="flex justify-center pt-8">
                    <button
                        className="bg-green-500 text-white px-5 py-2 rounded-lg text-xl hover:bg-green-600 transition-colors"
                        onClick={() => handleBegin()}>
                        Back To Game
                    </button>
                </div>

            </div>

        </>
    )

}

export default InstructionPage;