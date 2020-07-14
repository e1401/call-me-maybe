import React from 'react';


export default function Button(props) {

    
    //zašto imam button u buttonu sad?
    

    return (
        <button type="button" value={props.value} className='button'>
            <p>{props.value}</p>
            </button> 
    )
}


