import React, { Component} from 'react';



// export default class HangUpButton extends Component {
//     render() {
//         return (
            
//         )
//     }
// }


export default function HangUpButton (props) {
    
    return (
        <button className="hangUpButton" onClick={() => {console.log('click')}}></button>
    )
}



// if a user clicks the red button clear cellphone screen