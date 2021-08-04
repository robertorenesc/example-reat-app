export interface Character {
    name:string
    height:number
    mass:number
    hair_color:string
    skin_color:string
    eye_color:string
    birth_year:string
    gender:string
    homeworld:string
}

export interface HomeWorld {
    name:string
    rotation_period:string
    orbital_period:string
    diameter:string
    climate:string
    gravity:string
    terrain:string
    surface_water:string
    population:string
}

export interface CharacterResponse {
    count:number
    results:Character[]
}
