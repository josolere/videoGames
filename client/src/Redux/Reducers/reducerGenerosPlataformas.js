import { NUEVA__PLATAFORMA, NUEVO__GENERO } from '../constants/constant';


const initialState = {
    genres: [],
    platforms: []
}


export default (state = initialState, action) => {
    switch (action.type) {
        case NUEVO__GENERO:
            return {
                ...state,
                genres: state.genres.concat([action.payload])
            }

        case NUEVA__PLATAFORMA:
            return {
                ...state,
                platforms: state.platforms.concat([action.payload])
            }

        default: return state
    }
}