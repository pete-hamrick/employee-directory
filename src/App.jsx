import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/Home';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/profile/edit"></Route>
          <Route path="/profile"></Route>
          <Route path="/login"></Route>
          <Route path="/signup"></Route>
          <Route path="/confirm-email"></Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
