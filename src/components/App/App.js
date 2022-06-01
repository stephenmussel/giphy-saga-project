import React from 'react';
import Search from '../Search/Search';
import Favorites from '../Favorites/Favorites';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

function App(props) {
  return (
    <div>
      <h1>Giphy Search!</h1>
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
        <Route exact path="/" component={Search} />
        <Route exact path="/favorites" component={Favorites} />
      </Router>
      {/* <Search /> */}
    </div>
  );
}

export default App;
