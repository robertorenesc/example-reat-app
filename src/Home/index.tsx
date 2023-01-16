import { Character } from "../model/Character"
import { CharacterTableHeader, CharacterTableBody } from "./CharacterTable"

interface CharacterTableProps {
    characters: Character[]
}

export const CharacterTable: React.FC<CharacterTableProps> = (props) => {

    return <>
        <table>
            <CharacterTableHeader />
            <CharacterTableBody {...props} />
        </table>
    </>
}