import { DATOS__ESPECIFICOS } from '../constants/constant';


const initialState = {
    name: '',
    image: '',
    genres: [],
    description: '',
    releaseDate: '',
    rating: '',
    platforms: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case DATOS__ESPECIFICOS:
            const datos = action.payload[0]
            return {
                ...state,
                name: datos.name,
                genres: datos.genres,
                image: datos.image,
                description: datos.description,
                releaseDate: datos.releaseDate,
                rating: datos.rating,
                platforms: datos.platforms,
            }
        default: return state;
    }
}


