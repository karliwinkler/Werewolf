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
            className={` w-24 md:w-44 flex flex-col items-center justify-center text-center 
            ${isSelected
                ? "border-4 rounded-lg border-white bg-blue-50 scale-105 shadow-md"
                : "bg-white hover:border-gray-300"
            }`}
        >
            <img
                src={image_path}
                alt={name}
                className={`w-full h-full object-cover transition-opacity ${
                    isSelected ? "opacity-100" : "opacity-70"
                }`}
            />

        </button>
    )
}

export default CharacterCard