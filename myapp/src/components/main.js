import React from 'react';
import HomePage from './homepage';
import Gallery from './gallery';
import Book from './book';
import Contact from './contact';
import {Switch, Route} from 'react-router-dom';

const Main = () => (

  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/homepage" component={HomePage} />
    <Route exact path="/gallery" component={Gallery} />
    <Route exact path="/book" component={Book} />
    <Route exact path="/contact" component={Contact} />
  </Switch>

  
)

export default Main;
