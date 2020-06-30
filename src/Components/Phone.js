import React from 'react';
import PhoneScreen from './PhoneScreen'
import Keypad from './Keypad'

export default class Phone extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '#'],
            
        }
    }

    // handleClick(event) {
    //     this.setState({ this.stae.value.map(v =)});
    //     event.preventDefault();
    //   }; NOT GOOD

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