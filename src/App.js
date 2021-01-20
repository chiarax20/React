import React from 'react';
import './App.css';
import Header from './components/Header';
import Endbar from './components/Endbar';
import Books from './components/Books';
import BooksCard from './components/BooksCard';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
    

const App = () => {
  return (
/*uso il react ruter per navigare attraverso le pagine*/
/*queste all'interno delle switch sono le pagine che cambiano*/
<Router>
    <div className='App'>
      <Header />
      <Switch>
      <Route exact path="/" component={Books}/>
      <Route exact path="/:id" component={BooksCard}/>
      </Switch>
      <Endbar />
    </div>
  </Router>
  );
}

export default App;