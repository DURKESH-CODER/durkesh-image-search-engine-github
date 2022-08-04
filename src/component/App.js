

import React from 'react';
import SearchInput from './Searchinput';
import axios from 'axios';
import NavBar from './navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './home';
import Contact from './contact';
import About from './about';
import ImageList from './ImageList';

class App extends React.Component{
constructor(props){
  super(props)
  this.state={images:[]}
  this.onSearchSubmit=this.onSearchSubmit.bind(this)
}


  async onSearchSubmit(entry){
    const response=await axios.get(`https://pixabay.com/api/?key=28342294-9f0dd0c85fc62d199e5c66159&q=${entry}&image_type=photo&pretty=true`)
    console.log(response.data.hits)
    this.setState({images:response.data.hits})
  }
  render(){
    return(
      <div>
        <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        </BrowserRouter>
       <div>
        DURKESH KUMAR SEARCH ENGINE
        </div> 
      <div className='ui container' style={{marginTop:'30px'}}>
        <SearchInput onSearchSubmit={this.onSearchSubmit}/>
        we currently have {this.state.images.length} images
        <ImageList images={this.state.images}/>
        
      </div>
      </div>
    )
  }
}
export default App;