import { NUEVA__PLATAFORMA, NUEVO__GENERO, RESET } from '../constants/constant';


const initialState = {
    genres: [],
    platforms: [],
    id:[]

}


export default (state = initialState, action) => {
    switch (action.type) {
        case NUEVO__GENERO:
            return {
                ...state,
                genres: state.genres.concat(action.payload),
                id: state.id.concat(action.payload[0].id)
            }

        case NUEVA__PLATAFORMA:
            return {
                ...state,
                platforms: state.platforms.concat([action.payload])
            }

            case RESET:
                return {
                    ...state,
                    genres: [],
                    platforms: [],
                    id:[]
                }

        default: return state
    }
}