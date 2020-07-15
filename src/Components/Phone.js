import React from 'react';

import Keypad from './Keypad'

export default class Phone extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            value: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '#'],
        

            //state na dobrom mjestu
            //keys-pressed state
            //displayed state
        }
    }


    render () {
        return (
            <div className="phoneBase">
            <p className='tagline'>callMeMaybe</p>
            
            <div>
           
            <Keypad val={this.state.value}>
                
            </Keypad>
            </div>
            

        </div>
        )
    }
}