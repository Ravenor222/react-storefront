import React, {useState} from 'react';

const Search = () => {
const [state, useState] = useState({
    query:'',
    results: {},
    loading: false,
    message: '',
})

return (
    <div >
        <h2>Live Search</h2>
        <input 
        type="text"
        value=""
        id="search-input"
        placeholder="Search.."
        />
    </div>
)



}


export default Search