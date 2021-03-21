import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PaginaPrincipal from './components/PaginaPrincipal/PaginaPrincipal';
import Home from './components/RutaInicial/Home/Home';
import { Provider } from 'react-redux'
import store from './Redux/store'
import RutaDetallada from './components/RutaDeatallada/RutaDetallada';
import Creados from './components/Creados/Creados';

function App() {
  return (
    <Provider store={store} >
      <Router>
        <Switch>
          <Route exact path='/' component={PaginaPrincipal} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/home/detalles' component={RutaDetallada} />
          <Route exact path='/home/crear' component={Creados} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
