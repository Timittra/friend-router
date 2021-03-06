/* eslint-disable no-unused-vars */
// step 5, import react-router-dom
//step 6, create new component named Home/Home.js
// step 7, cut step 1 and paste in the Home.js 
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';


function App() {
  

  // step 2 creating components, 1st component = Friend and passing data by map function
  // step 8, calling <Home/> component
  // step 9, setup Router
  // step 12, creating dynamic path for FriendDetail
  return (
    <Router>
      <Switch>
        <Route path="/home">
        <Home/>
        </Route>
        <Route path="/friend/:friendId">
          <FriendDetail></FriendDetail>
        </Route>
        <Route exact path="/">
        <Home/>
        </Route>
        <Route path="*">
         <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
