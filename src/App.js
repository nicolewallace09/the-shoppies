import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'materialize-css/dist/css/materialize.min.css';
import Homepage from './pages/Homepage'; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return(
      <Router>
      <>
        <Switch>
          <Route exact path='/the-shoppies' component={Homepage} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
