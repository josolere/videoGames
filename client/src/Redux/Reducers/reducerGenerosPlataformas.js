import { NUEVA__PLATAFORMA, NUEVO__GENERO, RESET, RESET__GENEROS, RESET__PLATAFORMA } from '../constants/constant';


const initialState = {
    genres: [],
    platforms: [],
    id: []
}


export default (state = initialState, action) => {
    switch (action.type) {
        case NUEVO__GENERO:
            return {
                ...state,
                genres: state.genres.concat(action.payload),
                id: state.id.concat(action.payload.map(mapeo => mapeo.id))
            }

        case NUEVA__PLATAFORMA:
            return {
                ...state,
                platforms: state.platforms.concat(action.payload)
            }

        case RESET:
            return {
                ...state,
                genres: [],
                platforms: [],
                id: []
            }

        case RESET__GENEROS:
            return {
                ...state,
                genres: [],
                id:[]
            }

        case RESET__PLATAFORMA:
            return {
                ...state,
                platforms: [],
            }

        default: return state
    }
}