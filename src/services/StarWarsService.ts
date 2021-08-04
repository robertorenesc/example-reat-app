import { CharacterResponse, HomeWorld } from "../model/Character"

class StarWarsService {

    private apiUrl:string

    constructor() {
        this.apiUrl = 'https://swapi.dev/api'
    }

    async getAllPeople():Promise<CharacterResponse> {
        return await fetch(`${this.apiUrl}/people`).then(response => response.json())
    }

    async getHomeWorld(id:string):Promise<HomeWorld> {
        return await fetch(`${this.apiUrl}/planets/${id}`).then(response => response.json())
    }

}

const starWarsService = new StarWarsService()
export default starWarsService