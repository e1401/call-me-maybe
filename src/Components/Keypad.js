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
            msg: 'Enter number'
            
            //state na dobrom mjestu
            //keys-pressed state
            
        };
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleHangupButton = this.handleHangupButton.bind(this);
        this.handleCallButton = this.handleCallButton.bind(this);
    }
        // console.log(props)
        // const this.state.value = props.val;
         handleButtonClick = (event) => {
            let target = event.currentTarget //via https://stackoverflow.com/questions/42089795/reactjs-cant-set-state-from-an-event-with-event-persist
            event.preventDefault();
            // this.setState({ pressedKeys: [...+ event.currentTarget.value] });
            this.setState(state => {
                const pressedKeys = [...state.pressedKeys, target.value]
                return {
                    pressedKeys,
                    value: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '#'],
                    
                    
                }
            })
            // nekiArr.push(event.currentTarget.value)
            //https://github.com/facebook/react/issues/4745 for event.currentTarget
            console.log(this.state)

            
        }

        handleHangupButton = (event) => {
            event.preventDefault();
            this.setState({pressedKeys: []})
        }

   

        handleCallButton = (event) => {
            // console.log('some')
            event.preventDefault();
            
            // this.handleButtonSwitch()
            // console.log(this.state);
            if (this.state.pressedKeys.length === 0) {
                this.setState({notEntered: true}, () => { console.log('The state has been updated.') });
                console.log('Blank screen')
            }

        }
        
      

        render() { 
                 return (
                        <div>
                            <PhoneScreen  val={this.state.pressedKeys} msg={this.state.msg} >


                            </PhoneScreen>

                            <div className='keypad'>

                                <div className="keyRow">
                                    <button className="callButton" onClick={this.handleCallButton}></button>
                                    
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
                            </div>

                        </div>
            )
        }

    }