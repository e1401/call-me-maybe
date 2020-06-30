import React from 'react';
import PhoneScreen from './PhoneScreen'
import Keypad from './Keypad'

export default class Phone extends React.Component {
    render () {
        return (
            <div className="phoneBase">
            <p className='tagline'>callMeMaybe</p>
            <PhoneScreen></PhoneScreen>
            <div>
                
                <Keypad>
                
                </Keypad>
            </div>
            

        </div>
        )
    }
}