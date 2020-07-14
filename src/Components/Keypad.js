import React from "react";
// import Button from './Button';
import CallButton from './CallButton';
import HangUpButton from './HangUpButton'





const Keypad = (props) => {
    // console.log(props)
    const stateValues = props.val
    console.log(stateValues[1])








    return (
        <div className='keypad'>

            <div className="keyRow">
                <CallButton />
                <HangUpButton />
            </div>

            <div className="keyRow">
                <button  className='button' value={stateValues[1]} onClick="">{stateValues[1]}</button>
                <button  className='button' value={stateValues[2]}onClick="">{stateValues[2]}</button>
                <button  className='button' value={stateValues[3]} onClick="">{stateValues[3]}</button>
            </div>
            <div className="keyRow">
                <button  className='button' value=""onClick=""></button>
                <button  className='button' value=""onClick=""></button>
                <button  className='button' value=""onClick=""></button>
            </div>
            <div className="keyRow">
                <button  className='button' value=""onClick=""></button>
                <button  className='button' value=""onClick=""></button>
                <button  className='button' value=""onClick=""></button>
            </div>
            <div className="keyRow">
                <button  className='button' value=""onClick=""></button>
                <button  className='button' value=""onClick=""></button>
                <button  className='button' value=""onClick=""></button>
            </div>
        </div>

    )


}


export default Keypad