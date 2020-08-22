import React from "react";
import PhoneScreen from './PhoneScreen';
// import CallButton from './CallButton';
// import HangUpButton from './HangUpButton'


export default class Keypad extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            value: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '#'],
            pressedKeys: [],
            notEntered: false,
            msg: ['Please enter phone number','Numbers limit reached', 'Calling...', 'Invalid number format'],
            tooManyNumbers: false,
            okToDial: false, //for calling
            CallList: []
            
            //state na dobrom mjestu
            
            
        };
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleHangupButton = this.handleHangupButton.bind(this);
        this.handleCallButton = this.handleCallButton.bind(this);
        this.handleDoubleCallButton = this.handleDoubleCallButton.bind(this);
    }
        // console.log(props)
        // const this.state.value = props.val;
         handleButtonClick = (event) => {
            let target = event.currentTarget //via https://stackoverflow.com/questions/42089795/reactjs-cant-set-state-from-an-event-with-event-persist
            event.preventDefault();
            // this.setState({ pressedKeys: [...+ event.currentTarget.value] });
            this.setState(state => {
                
                const pressedKeys = [...state.pressedKeys, target.value]
                const CallList = pressedKeys;
                return {
                    pressedKeys,
                    value: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '#'],
                    CallList  
                }
                
            })
            
            // nekiArr.push(event.currentTarget.value)
            //https://github.com/facebook/react/issues/4745 for event.currentTarget
            // console.log(this.state)

            
        }

        handleHangupButton = (event) => {
            event.preventDefault();
            this.setState({pressedKeys: [], notEntered: false, okToDial: false})
        }

   

        handleCallButton = (event) => {
            
            event.preventDefault();
            
            // this.handleButtonSwitch()
            // console.log(this.state);
            if (this.state.pressedKeys.length === 0 || this.state.okToDial === false) {
                this.setState({notEntered: true, okToDial: true}, () => { console.log('The state has been updated.') });
                
            }

        }
        
        handleDoubleCallButton = (event) => {
            event.preventDefault();
            console.log("This is double click");
            
        }
      

        render() { 
                 return (
                        <div>
                            <PhoneScreen  val={this.state.pressedKeys} msg={this.state.msg} notEntered={this.state.notEntered} tooManyNumbers={this.state.tooManyNumbers} okToDial={this.state.okToDial} callList={this.state.CallList}>


                            </PhoneScreen>

                            <div className='keypad'>

                                <div className="keyRow">
                                    <button className="callButton" onClick={this.handleCallButton} onDoubleClick={this.handleDoubleCallButton}></button>
                                    
                                    <button className="hangUpButton" onClick={this.handleHangupButton}></button>
                                </div>

                                <div className="keyRow">
                                    <button id="1" className='button' value={this.state.value[1]} onClick={this.handleButtonClick}><span className="buttonChar">{this.state.value[1]}</span></button>
                                    <button className='button' value={this.state.value[2]} onClick={this.handleButtonClick}><span className="buttonChar">{this.state.value[2]}</span></button>
                                    <button className='button' value={this.state.value[3]} onClick={this.handleButtonClick}><span className="buttonChar">{this.state.value[3]}</span></button>
                                </div>
                                <div className="keyRow">
                                    <button className='button' value={this.state.value[4]} onClick={this.handleButtonClick}><span className="buttonChar">{this.state.value[4]}</span></button>
                                    <button className='button' value={this.state.value[5]} onClick={this.handleButtonClick}><span className="buttonChar">{this.state.value[5]}</span></button>
                                    <button className='button' value={this.state.value[6]} onClick={this.handleButtonClick}><span className="buttonChar">{this.state.value[6]}</span></button>
                                </div>
                                <div className="keyRow">
                                    <button className='button' value={this.state.value[7]} onClick={this.handleButtonClick}><span className="buttonChar">{this.state.value[7]}</span></button>
                                    <button className='button' value={this.state.value[8]} onClick={this.handleButtonClick}><span className="buttonChar">{this.state.value[8]}</span></button>
                                    <button className='button' value={this.state.value[9]} onClick={this.handleButtonClick}><span className="buttonChar">{this.state.value[9]}</span></button>
                                </div>
                                <div className="keyRow">
                                    <button className='button' value={this.state.value[10]} onClick={this.handleButtonClick}><span className="buttonChar">{this.state.value[10]}</span></button>
                                    <button className='button' value={this.state.value[0]} onClick={this.handleButtonClick}><span className="buttonChar">{this.state.value[0]}</span></button>
                                    <button className='button' value={this.state.value[11]} onClick={this.handleButtonClick}><span className="buttonChar">{this.state.value[11]}</span></button>
                                </div>
                                <div className= "message">
                                    
                                    
                                </div>
                            </div>

                        </div>
            )
        }

    }