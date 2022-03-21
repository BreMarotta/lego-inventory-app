import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home'
import Navigation from './Navigation'
import LegoCollection from './LegoCollection'
import AddLegoSetForm from './AddLegoSetForm'
import Owner from './Owner'
import GenreLink from './GenreLink';
import Genre from './Genre'

function App() {
  return (
    <Router>
        <div className="App">
            <Navigation />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/lego_collection" component={LegoCollection}/>
                <Route exact path="/lego_collection/new" component={AddLegoSetForm}/>
                <Route exact path="/lego_collection/genres" component={GenreLink}/>
                <Route exact path="/lego_collection/genres/:id" component={Genre}/>
                <Route exact path="/lego_collection/owners/:name" component={Owner}/>
            </Switch>
        </div>
    </Router>
  );
}

export default App;
