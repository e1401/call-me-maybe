// import React from 'react';


// export default function Button(props) {


//     //zašto imam button u buttonu sad?


//     return (
//         <button type="button" value={props.value} className='button'>
//             <p>{props.value}</p>
//             </button>
//     )
// }

import React from 'react';
import { useRef } from 'react';
import useDoubleClick from 'use-double-click';

 export default function Button () {
  const buttonRef = useRef();

  useDoubleClick({
    /** A callback function for single click events */
    onSingleClick: e => console.log(e, 'single click'),
    /** A callback function for double click events */
    onDoubleClick: e => console.log(e, 'double click'),
    /** (Required) Dom node to watch for double clicks */
    ref: buttonRef,
    /**
     * The amount of time (in milliseconds) to wait
     * before differentiating a single from a double click
     */
    latency: 250
  });

  return <button ref={buttonRef}>Click Me</button>
}