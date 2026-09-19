import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SelectionPage() {
    const [numPlayers, setNumPlayer] = useState("");
    const navigate = useNavigate();

    const handleBegin = (numPlayers: string) => {
        navigate(`/cards/${numPlayers}`);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen space-y-8">
            <h2 className="text-4xl font-extrabold text-green-900">
                Select number of players:
            </h2>

            {/* Styled Dropdown */}
            <select
                className="text-xl p-3 rounded-xl border-2 border-gray-300
                           focus:outline-none focus:ring-4 focus:ring-green-200
                           shadow-md cursor-pointer transition-all bg-white"
                value={numPlayers}
                onChange={e => setNumPlayer(e.target.value)}
            >
                <option value="" disabled hidden></option>
                <option value="4">4 Players</option>
                <option value="5">5 Players</option>
                <option value="6">6 Players</option>
                <option value="7">7 Players</option>
            </select>

            {/* Next Button */}
            <button
                disabled={!numPlayers}
                className={`text-2xl px-8 py-2 rounded-xl shadow-lg transition-all
                    ${numPlayers
                    ? "bg-green-600 text-white hover:bg-green-500 hover:scale-110"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                onClick={() => handleBegin(numPlayers)}
            >
                Next
            </button>
        </div>
    );
}

export default SelectionPage;
