import { Character } from "../model/Character"

export const CharacterTableHeader : React.FC = () => {

    return <>
        <thead>
            <tr>
                <td>
                    Name
                </td>
                <td>
                    Height
                </td>
                <td>
                    Hair Color
                </td>
                <td>
                    Skin Color
                </td>
                <td>
                    Eye Color
                </td>
                <td>
                    
                </td>
            </tr>
        </thead>
    </>
}

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
                <a href={props.character.homeworld}>Go to Homeworkd</a>
            </td>
        </tr>
    </>  
}
