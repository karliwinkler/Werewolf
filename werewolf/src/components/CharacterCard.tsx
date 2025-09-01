interface Props {
    name: string;
}

function CharacterCard({name}: Props) {

    return (
        <div className={`border-4 rounded-lg w-44 flex flex-col items-center justify-center text-center`}>
            <div className="h-56">
                <h3 className="p-5 text-xl/6">{name}</h3>
            </div>
        </div>
    )
}

export default CharacterCard