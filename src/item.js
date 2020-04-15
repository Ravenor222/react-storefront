import React from 'react';



const Item = (props) => {


    return (
        <div style={{backgroundColor:'teal', width:'275px', height:'275px', borderRadius:'25%', margin:10}}>
            <h3>{props.name}</h3>
            <p>{props.company}</p>
            <p>size: {props.size}</p>
            <p>id: {props.id}</p>
        </div>
    )
}

export default Item