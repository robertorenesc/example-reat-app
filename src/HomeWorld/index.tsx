import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { HomeWorld } from "../model/Character"
import starWarsService from "../services/StarWarsService"
import { HomeWorldDetails } from "./HomeWorldDetails"

export const HomeWorldWiew: React.FC = () => {

    const params:any = useParams()

    const history = useHistory()

    const [homeworld, setHomeworld] = useState<HomeWorld>()

    useEffect(() => {
        (async () => {
            const homeworld: HomeWorld = await starWarsService.getHomeWorld(params.id)
            setHomeworld(homeworld)
        })()
    }, [params.id])

    return <>
        <h2>Homeworld Details</h2>
        { homeworld && <HomeWorldDetails element={homeworld} /> }
        <br/>
        <a href="/" onClick={() => history.goBack()}>Back</a>
    </>
}