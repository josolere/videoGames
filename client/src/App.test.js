
import React from 'react'
import App from './App'
import {render} from 'enzyme';
import { Provider} from 'react-redux'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Home from './components/RutaInicial/Home/Home.jsx'
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import store from './Redux/store'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import RutaDetallada from './components/RutaDeatallada/RutaDetallada'
import Creados from './components/Creados/Creados'
import CardsEspecifico from './components/Cards/CardsEspecifico/CardsEspecifico'

configure({adapter:new Adapter()})



describe('renderizar componentes', () => {
  let home;
 
  it('renderezair un componente <CardsEspecifico/>', () =>{
   shallow(<CardsEspecifico />)
  })


  it('renderiza el componente creados' , ()=>{
    shallow(<Creados />)
  })

})

