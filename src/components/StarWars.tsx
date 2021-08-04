import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Character } from '../model/Character'
import starWarsService from '../services/StarWarsService'

const StarWars: React.FC = () => {

    const [characters, setCharacters] = useState<Character[]>()

    useEffect(() => {
        starWarsService.getAllPeople()
            .then(response => {
                setCharacters(response.results)
            })
    }, [])

    const getWorldId = (character:Character) => {
        let position:number = character.homeworld.lastIndexOf('s/')
        return character.homeworld.substring(position + 2, character.homeworld.length - 1)
    }

    const getCharacterRow = (character:Character) => {
        return <tr key={character.name}>
            <td>{character.name}</td>
            <td>{character.height}</td>
            <td>{character.mass}</td>
            <td>{character.hair_color}</td>
            <td>{character.skin_color}</td>
            <td>{character.eye_color}</td>
            <td>{character.birth_year}</td>
            <td>{character.gender}</td>
            <td><Link to={`/homeworld/${getWorldId(character)}`}>Go to homeworld</Link></td>
        </tr>
    }

    return <>
        <div>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Height</td>
                        <td>Mass</td>
                        <td>Hair_color</td>
                        <td>Skin_color</td>
                        <td>Eye_color</td>
                        <td>Birth_year</td>
                        <td>Gender</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {characters?.map(c => getCharacterRow(c))}
                </tbody>
            </table>
        </div>
    </>

}

export default StarWars