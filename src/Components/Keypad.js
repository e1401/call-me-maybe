import React from "react";
import PhoneScreen from './PhoneScreen';
import CallButton from './CallButton';
import HangUpButton from './HangUpButton'





export default function Keypad(props) {
    // console.log(props)
    const stateValues = props.val;
    const nekiArr = []
    function handleButtonClick(event) {
        event.preventDefault();

        if (event.currentTarget.value === undefined) {
            console.log('undefined')
        }
        // 
        nekiArr.push(event.currentTarget.value)
        //https://github.com/facebook/react/issues/4745 for event.currentTarget
        console.log(nekiArr)
        // return nekiArr
        // buttonClick()
    }

    // let displayedKeys = nekiArr



    return (
        <div>
            <PhoneScreen value={nekiArr}>


            </PhoneScreen>

            <div className='keypad'>

                <div className="keyRow">
                    <CallButton />
                    <HangUpButton />
                </div>

                <div className="keyRow">
                    <button id="1" className='button' value={stateValues[1]} onClick={handleButtonClick}><span className="buttonChar">{stateValues[1]}</span></button>
                    <button className='button' value={stateValues[2]} onClick={handleButtonClick}><span className="buttonChar">{stateValues[2]}</span></button>
                    <button className='button' value={stateValues[3]} onClick={handleButtonClick}><span className="buttonChar">{stateValues[3]}</span></button>
                </div>
                <div className="keyRow">
                    <button className='button' value={stateValues[4]} onClick={handleButtonClick}><span className="buttonChar">{stateValues[4]}</span></button>
                    <button className='button' value={stateValues[5]} onClick={handleButtonClick}><span className="buttonChar">{stateValues[5]}</span></button>
                    <button className='button' value={stateValues[6]} onClick={handleButtonClick}><span className="buttonChar">{stateValues[6]}</span></button>
                </div>
                <div className="keyRow">
                    <button className='button' value={stateValues[7]} onClick={handleButtonClick}><span className="buttonChar">{stateValues[7]}</span></button>
                    <button className='button' value={stateValues[8]} onClick={handleButtonClick}><span className="buttonChar">{stateValues[8]}</span></button>
                    <button className='button' value={stateValues[9]} onClick={handleButtonClick}><span className="buttonChar">{stateValues[9]}</span></button>
                </div>
                <div className="keyRow">
                    <button className='button' value={stateValues[10]} onClick={handleButtonClick}><span className="buttonChar">{stateValues[10]}</span></button>
                    <button className='button' value={stateValues[0]} onClick={handleButtonClick}><span className="buttonChar">{stateValues[0]}</span></button>
                    <button className='button' value={stateValues[11]} onClick={handleButtonClick}><span className="buttonChar">{stateValues[11]}</span></button>
                </div>
            </div>

        </div>
    )


}
