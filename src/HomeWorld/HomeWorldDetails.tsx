import { HomeWorld } from "../model/Character"

interface HomeWorldDetailsProps {
    element: HomeWorld
}

export const HomeWorldDetails: React.FC<HomeWorldDetailsProps> = (props) => {

    return <>
        <table>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>{ props.element.name }</td>
                </tr>
                <tr>
                    <td>Population</td>
                    <td>{ props.element.population }</td>
                </tr>
                <tr>
                    <td>Climate</td>
                    <td>{ props.element.climate }</td>
                </tr>
                <tr>
                    <td>Terrain</td>
                    <td>{ props.element.terrain }</td>
                </tr>
            </tbody>
        </table>
    </>
}
