import React from 'react';
import PhoneScreen from './PhoneScreen'
import Keypad from './Keypad'

export default class Phone extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         value: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '#'],
            
    //     }
    // }


    render () {
        return (
            <div className="phoneBase">
            <p className='tagline'>callMeMaybe</p>
            
            <div>
            <PhoneScreen>

            </PhoneScreen>
            <Keypad>
                
            </Keypad>
            </div>
            

        </div>
        )
    }
}