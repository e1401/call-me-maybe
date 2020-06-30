import React from "react";
import Button from './Button';
import CallButton from './CallButton';
import HangUpButton from './HangUpButton'





export default class Keypad extends React.Component {
   
     
   

    handleChange(event) {
       
        this.props.onKeyPress(event.target.value);
        
    }

    render () {
        return (
            <div className='keypad'>
            <div className="keyRow">
            <CallButton />
            <HangUpButton />
            
        </div>
        <div className="keyRow">
            <Button type="button"  value={this.props.value[0]}></Button>
            <Button value={this.props.value[1]}></Button>
            <Button value={this.props.value[2]}></Button>
        </div>
        <div className="keyRow">
            <Button value={this.props.value[3]}></Button>
            <Button value={this.props.value[4]}></Button>
            <Button value={this.props.value[5]}></Button>
        </div>
        <div className="keyRow">
            <Button value={this.props.value[6]}></Button>
            <Button value={this.props.value[7]}></Button>
            <Button value={this.props.value[8]}></Button>
        </div>
        <div className="keyRow">
            <Button value={this.props.value[9]}></Button>
            <Button value={this.props.value[10]}></Button>
            <Button value={this.props.value[11]}></Button>
        </div>

        </div>
        )
    }

}