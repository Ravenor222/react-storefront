import React from 'react';



const Item = (props) => {


    return (
        <div style={{backgroundColor:'brown', width:'200px', height:'200px'}}>
            <h3>{props.name}</h3>
            <h4>{props.company}</h4>
            <p>{props.id}</p>
        </div>
    )
}

export default Item