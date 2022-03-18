import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home'
import Navigation from './Navigation'
import LegoCollection from './LegoCollection'
import AddLegoSetForm from './AddLegoSetForm'
import Genre from './Genre'
import Owner from './Owner'

function App() {
  return (
    <Router>
        <div className="App">
            <Navigation />
            <hr/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/lego_collection" component={LegoCollection}/>
                <Route exact path="/lego_collection/new" component={AddLegoSetForm}/>
                <Route exact path="/lego_collection/genres" component={Genre}/>
                <Route exact path="/lego_collection/:id" component={Owner}/>
            </Switch>
        </div>
    </Router>
  );
}

export default App;
