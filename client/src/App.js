import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PaginaPrincipal from './components/PaginaPrincipal/PaginaPrincipal';
import Home from './components/RutaInicial/Home/Home';
import { Provider } from 'react-redux'
import store from './Redux/store'

function App() {
  return (
    <Provider store={store} >
      <Router>
        <Switch>
          <Route exact path='/' component={PaginaPrincipal} />
          <Route  path='/home' component={Home} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
