import "../index.css";

interface Props {
    name: string;
    image_path: string;
    isSelected: boolean;
    onClick: () => void;
}

function CharacterCard({name, image_path, isSelected, onClick}: Props) {

    return (
        <button
            onClick={onClick}
            className={`relative w-28 md:w-40 flex flex-col items-center justify-center text-center 
            ${isSelected
                ? "border-4 border-white scale-105 shadow-md"
                : ""
            }`}
        >
            <img
                src={image_path}
                alt={name}
                className={`w-full h-full object-cover transition-opacity ${
                    isSelected ? "opacity-100" : "opacity-70"
                }`}
            />

            <div className={`absolute bottom-0.5 left-1/2 -translate-x-1/2 ${name == "Conspiracy Theorist" ? "" : "whitespace-nowrap "}`}>
                <h3 className={`leading-none text-customBrown md:text-[1.15rem] text-xs font-bold ${isSelected ? "opacity-100" : "opacity-70"}
                `}>
                    {name}
                </h3>
            </div>

        </button>
    )
}

export default CharacterCard