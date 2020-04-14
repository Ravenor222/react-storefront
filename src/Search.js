import React, {useState} from 'react';

const Search = (props) => {
const [state, setState] = useState({
    query:'',
    results: {},
    loading: false,
    message: '',
})

const handleOnInputChange = (event) => {
    props.searchHandler(event.target.value)
  }
  
return (
    <div >
        <h2>Live Search</h2>
        <input 
        style={props.styles}
        type="text"
        value={props.searchValue}
        id="search-input"
        placeholder="Search.."
        onChange={handleOnInputChange}
        />
    </div>
)



}


export default Search