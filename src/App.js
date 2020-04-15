import React, {useEffect, useState, useLayoutEffect, useCallback} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import Button from '@material-ui/core/Button';
import Search from './Search.js'
import Item from './item'
import Nav from './Nav'

function App() {
const [state, setState] = useState()
const [searchValue, setSearchValue] = useState('');

  useEffect(()=>{
    axios.get('http://localhost:3001/').then((res) => setState(res.data));
  },[])


  const searchHandler = (value) => {
    setSearchValue(value);
  }


  return (
    <div className="App">
      <header className="App-header">
        <Nav style={{backgroundColor:'transparent'}}/>
        <img src={logo} className="App-logo" alt="logo" />
        <Search searchValue={searchValue} searchHandler={searchHandler} styles={{marginBottom:10}}/>

        <div style={{display:'flex',flexWrap:'wrap' ,justifyContent:'space-around', flexDirection:'row',width:'-webkit-fill-available', marginTop:'45px'}}>
        
        {
        state===undefined ? <p>no results</p> : state.filter((item) => {
          return item.name.toLowerCase().includes(searchValue)
        }).map((item)  => {
          return (
            <Item 
            name={item.name}
            id={item.id}
            company={item.company}
            size={item.size}
            picture={item.picture}
            />
          )
        })}

      </div>

      </header>

     
    </div>
  );
}

export default App;


// the back half of the interview was a React exercise where he gave me an API call for best buy data of products and I had to build a live search
//  for it on the spot. so i had to call the API, set the data to state, create a filtering function, create an input, make it a controlled component
//  , and useEffect to tie it all together. It was pretty fun and really glad I did react for Book People and I could use those skills