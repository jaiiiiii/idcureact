import React, { Component } from 'react';
import 'bulma/css/bulma.css'

import FollowerBtn from './Components/FollowerBtn'
//router
import {BrowserRouter, Route} from 'react-router-dom'
//import page component
import Menu from './Components/Menu'
import NewsFeed from './Pages/NewsFeed'
import Photos from './Pages/Photos'
import Profile from './Pages/Profile'
//end of page components
class App extends Component {


  state = { //data model of this component
   
    followerCount:0
  }

  componentDidMount(){ //behavior
    

  }

  addFollower() { //behavior
    this.setState({
      followerCount:this.state.followerCount +10
    })
    }

  unFollower() { //behavior
      this.setState({
        followerCount:this.state.followerCount -5
      })
      }

  render() { //presentational 
    return (
  
  <div>
    <BrowserRouter>
    <div>
      <Menu/>
    <Route component={NewsFeed} path="/" exact/> 
    <Route component={Photos} path="/photos" />
    <Route component={Profile} path="/profile" />
  </div>
  </BrowserRouter>
  </div>


       //{/*<button onClick={() =>this.addFollower()}>Happy </button>
        //<button onClick={() =>this.unFollower()}>so so </button>
       // <button onClick={() =>this.unFollower()}>Sad</button>*/}
      //</div>
    );
  }





}

export default App;
