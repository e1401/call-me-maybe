import React from "react";
// import Button from './Button';
import CallButton from './CallButton';
import HangUpButton from './HangUpButton'





export default class Keypad extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {
            value: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '#'],
            newValue: []
            
        };

        
        
    }

  
    handleClick = (event) => {
        console.log('na klik')
    //     const { newValue } = this.state
    //     (newValue.push(event.target.value))
     }


    render () {
        return (
            <div className='keypad'>
            <div className="keyRow">
            <CallButton />
            <HangUpButton />
            
        </div>
        <div className="keyRow">
            <button  className='button' value={this.state.value[1]}onClick={this.handleClick}></button>
            {/* <Button  value={this.state.value[2]}></Button>
            <Button  value={this.state.value[3]}></Button> */}
        </div>
        {/* <div className="keyRow">
            <Button value={this.state.value[4]}></Button>
            <Button value={this.state.value[5]}></Button>
            <Button value={this.state.value[6]}></Button>
        </div>
        <div className="keyRow">
            <Button value={this.state.value[7]}></Button>
            <Button value={this.state.value[8]}></Button>
            <Button value={this.state.value[9]}></Button>
        </div>
        <div className="keyRow">
            <Button value={this.state.value[10]}></Button>
            <Button value={this.state.value[0]}></Button>
            <Button value={this.state.value[11]}></Button>
        </div> */}

        </div>
       

        )
    }

}