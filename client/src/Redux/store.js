import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducerGeneral from './Reducers/reducerGeneral';
import reduceGeneros from './Reducers/reducerGeneros';
import reducerTipos from './Reducers/reducerTipos';
import reducerOrden from './Reducers/reducerOrdenar';
import reducerAlfabetico from './Reducers/reducerAlfabetico';
import reducerEspecifico from './Reducers/reducerEspecifico'
import reducerGenPlat from './Reducers/reducerGenerosPlataformas'

const reducer = combineReducers({
    reducerGeneral,
    reduceGeneros,
    reducerTipos,
    reducerOrden,
    reducerAlfabetico,
    reducerEspecifico,
    reducerGenPlat
})

const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(thunk)
));

export default store