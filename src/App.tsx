import React, { useEffect, useState } from 'react'
import { CharacterTable } from './Home'
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
        <CharacterTable characters={characters} />
    </>

}

export default App