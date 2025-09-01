import { useNavigate } from 'react-router-dom';

function TitlePage() {

    const navigate = useNavigate();

    const handleBegin = () => {
        navigate(`/selection`);
    }

    const handleHowToPlay = () => {
        // navigate(`/selection`);
    }

    return (
        <>
            <div className="flex flex-col items-end p-5 gap-3">
                <button
                    className="bg-green-500 text-white w-40 py-2 rounded-lg text-2xl hover:bg-green-600 transition-colors"
                    onClick={() => handleHowToPlay()}>
                    How to Play
                </button>

            </div>

            <div className="flex flex-col items-center pt-40">
                <h1 className="text-5xl font-bold"> The Hidden Truth </h1>
                <h2 className="text-lg italic">A scientific mystery</h2>

                <div className="p-5">
                    <button
                        className="bg-green-500 text-white px-8 py-2 rounded-lg text-2xl hover:bg-green-600 transition-colors"
                        onClick={() => handleBegin()}>
                        Begin
                    </button>
                </div>
            </div>
        </>

    )
}

export default TitlePage;