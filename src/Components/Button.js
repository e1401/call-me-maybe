import React from 'react';


export default function Button(props) {
    return (
        <button className='button'>
            <p className=''>{props.value}</p>
        </button>
    )
}


// export default class Button extends React.Component {
    
//     // value = () => {
//     //     return this.state.value
//     // }

//     render() {
//         return(
//             <button className='button'>
//                 <p></p>
//             </button>
//         )
//     }
// }
