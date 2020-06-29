import React from 'react';
import Button from './Button';
import CallButton from './CallButton';
import HangUpButton from './HangUpButton'


export default function Keypad() {
    return (
        <div className='keypad'>
                <div className="keyRow">
                <CallButton />
                <HangUpButton />
                
            </div>
            <div className="keyRow">
                <Button number="1"></Button>
                <Button number="2"></Button>
                <Button number="3"></Button>
            </div>
            <div className="keyRow">
                <Button number="4"></Button>
                <Button number="5"></Button>
                <Button number="6"></Button>
            </div>
            <div className="keyRow">
                <Button number="7"></Button>
                <Button number="8"></Button>
                <Button number="9"></Button>
            </div>
            <div className="keyRow">
                <Button number="*"></Button>
                <Button number="0"></Button>
                <Button number="#"></Button>
            </div>
        </div>
    )
}