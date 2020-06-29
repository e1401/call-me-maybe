import React from 'react';


export default function Button(props) {
    return (
        <button className='button'>
            <p className=''>{props.number}</p>
        </button>
    )
}