import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { HomeWorld as World } from '../model/Character'
import starWarsService from '../services/StarWarsService'

interface HomeWorldParams {
    id:string
}

const HomeWorld: React.FC = () => {

    const [world, setWorld] = useState<World>()

    const params = useParams<HomeWorldParams>()

    useEffect(() => {
        starWarsService.getHomeWorld(params.id)
            .then(response => {
                setWorld(response)
            })
    }, [params])

    return <>
        <div>
            <table>
                <thead>
                    <tr>
                        <td>{"Property"}</td>
                        <td>{"Value"}</td>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>{"name"}</td><td>{world?.name}</td></tr>
                    <tr><td>{"rotation_period"}</td><td>{world?.rotation_period}</td></tr>
                    <tr><td>{"orbital_period"}</td><td>{world?.orbital_period}</td></tr>
                    <tr><td>{"diameter"}</td><td>{world?.diameter}</td></tr>
                    <tr><td>{"climate"}</td><td>{world?.climate}</td></tr>
                    <tr><td>{"gravity"}</td><td>{world?.gravity}</td></tr>
                    <tr><td>{"terrain"}</td><td>{world?.terrain}</td></tr>
                    <tr><td>{"surface_water"}</td><td>{world?.surface_water}</td></tr>
                    <tr><td>{"population"}</td><td>{world?.population}</td></tr>
                </tbody>
            </table>
            <Link to="/">Go Back</Link>
        </div>
    </>

}

export default HomeWorld