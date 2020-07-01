import React from "react";
import Button from './Button';
import CallButton from './CallButton';
import HangUpButton from './HangUpButton'





export default class Keypad extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {
            value: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '#'],
            
        };
        // this.onThatClick = this.onThatClick.bind(this);
        // this.helloThere = this.helloThere.bind(this);
    }

  
    
   onThatClick() {
        alert('Red Alert')
    };

    // helloThere() {
    //     alert('Hi! Admin');
    //   }
    
    

    render () {
        return (
            <div className='keypad'>
            <div className="keyRow">
            <CallButton />
            <HangUpButton />
            
        </div>
        <div className="keyRow">
            <Button type="button" value={this.state.value[0]}></Button>
            <Button type="button" value={this.state.value[1]}></Button>
            <Button type="button" value={this.state.value[2]}></Button>
        </div>
        <div className="keyRow">
            <Button type="button" value={this.state.value[3]}></Button>
            <Button type="button" value={this.state.value[4]}></Button>
            <Button type="button" value={this.state.value[5]}></Button>
        </div>
        <div className="keyRow">
            <Button type="button" value={this.state.value[6]}></Button>
            <Button type="button" value={this.state.value[7]}></Button>
            <Button type="button" value={this.state.value[8]}></Button>
        </div>
        <div className="keyRow">
            <Button type="button" value={this.state.value[9]}></Button>
            <Button type="button" value={this.state.value[10]}></Button>
            <Button type="button" value={this.state.value[11]}></Button>
        </div>

        </div>
        )
    }

}