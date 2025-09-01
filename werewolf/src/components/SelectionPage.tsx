import {useState} from "react";
import { useNavigate } from 'react-router-dom';


function SelectionPage() {

    const [numPlayers, setNumPlayer] = useState("");
    const navigate = useNavigate();

    const handleBegin = (numPlayers: string) => {
        navigate(`/cards/${numPlayers}`);
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h2 className="text-4xl font-bold"> Select number of players:</h2>

            <div className="p-4">
                <select
                    value={numPlayers}
                    onChange={e => setNumPlayer(e.target.value)}
                >
                    <option value="" disabled hidden></option>
                    <option value="4">4 Players</option>
                    <option value="5">5 Players</option>
                    <option value="6">6 Players</option>
                    <option value="7">7 Players</option>
                </select>
            </div>


            <div className="p-3">
                <button
                    disabled={!numPlayers}
                    className="bg-green-500 text-white px-8 py-2 rounded-lg text-2xl hover:bg-green-600 transition-colors"
                    onClick={() => handleBegin(numPlayers)}
                >
                    Next
                </button>

            </div>


        </div>
    )
}

export default SelectionPage;