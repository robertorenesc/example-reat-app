import { Character } from "../model/Character"
import { CharacterTableBody } from "./CharacterTableBody"
import { CharacterTableHeader } from "./CharacterTableHeader"


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