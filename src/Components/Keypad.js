import React from 'react';
import Button from './Button';
import CallButton from './CallButton';
import HangUpButton from './HangUpButton'


// export default  function Keypad() {


//     return (
//         <div className='keypad'>
//                 <div className="keyRow">
//                 <CallButton />
//                 <HangUpButton />
                
//             </div>
//             <div className="keyRow">
//                 <Button value={this.state.value}></Button>
//                 <Button number="2"></Button>
//                 <Button number="3"></Button>
//             </div>
//             <div className="keyRow">
//                 <Button number="4"></Button>
//                 <Button number="5"></Button>
//                 <Button number="6"></Button>
//             </div>
//             <div className="keyRow">
//                 <Button number="7"></Button>
//                 <Button number="8"></Button>
//                 <Button number="9"></Button>
//             </div>
//             <div className="keyRow">
//                 <Button number="*"></Button>
//                 <Button number="0"></Button>
//                 <Button number="#"></Button>
//             </div>
//         </div>
//     )
// }


export default class Keypad extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'],
            
        }
    }

    render () {
        return (
            <div className='keypad'>
            <div className="keyRow">
            <CallButton />
            <HangUpButton />
            
        </div>
        <div className="keyRow">
            <Button value={this.state.value[0]}></Button>
            <Button value={this.state.value[1]}></Button>
            <Button value={this.state.value[2]}></Button>
        </div>
        <div className="keyRow">
            <Button value={this.state.value[3]}></Button>
            <Button value={this.state.value[4]}></Button>
            <Button value={this.state.value[5]}></Button>
        </div>
        <div className="keyRow">
            <Button value={this.state.value[6]}></Button>
            <Button value={this.state.value[7]}></Button>
            <Button value={this.state.value[8]}></Button>
        </div>
        <div className="keyRow">
            <Button value={this.state.value[9]}></Button>
            <Button value={this.state.value[10]}></Button>
            <Button value={this.state.value[11]}></Button>
        </div>

        </div>
        )
    }
}