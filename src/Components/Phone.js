import React from 'react';

import Keypad from './Keypad'

export default class Phone extends React.Component {



    render () {
        return (
            <div className="phoneBase">
            <p className='tagline'>callMeMaybe</p>
            
            <div>
           
            <Keypad>
                
            </Keypad>
            </div>
            

        </div>
        )
    }
}