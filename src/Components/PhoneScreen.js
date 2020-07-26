import React from 'react';


// if a user clicks the green button while the numbers are not entered, give out an error message "Please enter phone number"

const PhoneScreen = (props) => {
    let tooManyNumbers = props.tooManyNumbers; //for removal
    let notEnterted = props.notEntered;
    let nekiArr = props.val;
    let nekiMsg = props.msg;

    const powerSwitch =()=> {
        if (nekiArr.length === 0 && notEnterted === true ) {
            return nekiMsg[0]
        } else if (nekiArr.length > 47) {
            return nekiMsg[1]

        } 
        
        else  { return nekiArr};
    }
    
    
    

    


    return (
        <div className="phoneScreen">

            <div className="screenDisplayArea">
            
                <div className='displayChar'>                
                  
                  {powerSwitch()}
                </div>

            </div>

        </div>
    )

}


export default PhoneScreen