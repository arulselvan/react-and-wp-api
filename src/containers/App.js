import React, { Component } from 'react';
import Post from '../components/Posts/Post/Post';
import Header from '../components/Header/Header';
import Layout from '../components/Layout/Layout';
import Blog from './Blog/Blog';
import SideBar from '../components/SideBar/SideBar';
import Footer from '../components/Footer/Footer'; 
import { BrowserRouter, Route } from 'react-router-dom'
class App extends Component {
  render(){
    return (
      <BrowserRouter>
      <div>
        <SideBar/>
        <Layout>
          <Route path="/" exact component={Blog}/>
          <Route path="/about" exact render= { () => "<h1>page place holder</h1>"}/>
        </Layout>
        <Footer/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
