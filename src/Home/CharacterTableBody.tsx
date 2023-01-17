import { Character } from "../model/Character"


interface CharacterTableBodyProps {
    characters: Character[]
}

export const CharacterTableBody: React.FC<CharacterTableBodyProps> = (props) => {

    return <>
        <tbody>
            { props.characters.map((c: Character) => <CharacterTableRow character={c} />) }
        </tbody>
    </>
}

interface CharacterTableRowProps {
    character: Character
}

export const CharacterTableRow: React.FC<CharacterTableRowProps> = (props) => {

    const getHomeWorldLink = (c: string) => {
        const parts = c.split("/")
        return parts[parts.length - 2]
    }

    return <>
        <tr>
            <td>
                { props.character.name }
            </td>
            <td>
                { props.character.height }
            </td>
            <td>
                { props.character.hair_color }
            </td>
            <td>
                { props.character.skin_color }
            </td>
            <td>
                { props.character.eye_color }
            </td>
            <td>
                <a href={`/homeworld/${getHomeWorldLink(props.character.homeworld)}`}>Go to Homeworkd</a>
            </td>
        </tr>
    </>  
}
