import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import CreatePost from './Components/CreatePost';
import EditPost from './Components/EditPost';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import PostDetails from './Components/PostDetails';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="container">
        <NavBar/>
        <Route path="/" exact component={Home}></Route>
        <Route path="/add" exact component={CreatePost}></Route>
        <Route path="/edit/:id" component={EditPost}></Route>
        <Route path="/post/:id" component={PostDetails}></Route>
      </div>
      </BrowserRouter>
    )
  }
}