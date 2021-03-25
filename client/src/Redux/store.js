import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducerGeneral from './Reducers/reducerGeneral';
import reduceGeneros from './Reducers/reducerGeneros';
import reducerTipos from './Reducers/reducerTipos';
import reducerOrden from './Reducers/reducerOrdenar';
import reducerAlfabetico from './Reducers/reducerAlfabetico';
import reducerEspecifico from './Reducers/reducerEspecifico';
import reducerGenPlat from './Reducers/reducerGenerosPlataformas';
import reducerCreados from './Reducers/reducerCreados';
import reducerPaginado from './Reducers/reducerPaginado'

const reducer = combineReducers({
    reducerGeneral,
    reduceGeneros,
    reducerTipos,
    reducerOrden,
    reducerAlfabetico,
    reducerEspecifico,
    reducerGenPlat,
    reducerCreados,
    reducerPaginado
})

const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(thunk)
));

export default store