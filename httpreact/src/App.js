import React,{ Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import Post from './Components/Postlist'
import PostForm from './Components/PostForm';

class App extends Component {
  render(){
    return (
      <div className="App">
        <PostForm />
        {/*<Post />*/}
      </div>
    );
  }
  }
  

export default App;
