import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'


function App() {

  useEffect(()=>{
    axios.get('http://localhost:3001/').then((res)=> console.log(res));
  })




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


// the back half of the interview was a React exercise where he gave me an API call for best buy data of products and I had to build a live search
//  for it on the spot. so i had to call the API, set the data to state, create a filtering function, create an input, make it a controlled component
//  , and useEffect to tie it all together. It was pretty fun and really glad I did react for Book People and I could use those skills