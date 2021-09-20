import './App.css'
import {Route,Switch} from 'react-router-dom'
import Main from './pages/Main'
import Search from './pages/Search'
function App() {
  
  return (
    <Switch>
        <Route exact path='/' component={Main}/>
        <Route path='/search/:query' component={Search} />
    </Switch>
  );
}

export default App;
