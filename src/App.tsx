import React, { useEffect, useState } from 'react'
import { Character, CharacterResponse } from './model/Character'
import starWarsService from './services/StarWarsService'

const App: React.FC = () => {

    const[characters, setCharacters] = useState<Character[]>([])

    useEffect(() => {
        (async () => {
            const characters: CharacterResponse = await starWarsService.getAllPeople()
            setCharacters(characters.results)
        })()
    }, [])

    return <>
        <h2>List of Characters</h2>
        <table>
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
            <tbody>
                { characters.map((c: Character) => {
                    return <>
                        <tr>
                            <td>
                                { c.name }
                            </td>
                            <td>
                                { c.height }
                            </td>
                            <td>
                                { c.hair_color }
                            </td>
                            <td>
                                { c.skin_color }
                            </td>
                            <td>
                                { c.eye_color }
                            </td>
                            <td>
                                <a href={c.homeworld}>Go to Homeworkd</a>
                            </td>
                        </tr>
                    </>         
                })}
            </tbody>
        </table>
    </>

}

export default App