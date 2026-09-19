interface Props {
    name: string;
    image_path: string;
}

function CharacterCard({name, image_path}: Props) {

    return (
        <div className={`border-4 rounded-lg w-44 flex flex-col items-center justify-center text-center`}>
            <div className="h-56 overflow-hidden" >
                <img src={image_path} alt={name} className="w-full h-full object-cover"/>
            </div>
        </div>
    )
}

export default CharacterCard