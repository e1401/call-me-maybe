import React from 'react';


// if a user clicks the green button while the numbers are not entered, give out an error message "Please enter phone number"

const PhoneScreen = (props) => {
    let tooManyNumbers = props.tooManyNumbers; //for removal
    let notEnterted = props.notEntered;
    let nekiArr = props.val;
    let nekiMsg = props.msg;
    let okToDial = props.okToDial;
    

    const powerSwitch =()=> {
        let regCheck = /^09(?:[0-9]){7,8}$/;
        let toString = nekiArr.toString();
        var result = toString.replace(/,/g, ""); //remove commas from string eg. 1,2, => 12
        let regResult = regCheck.test(result) //checks regex pattern if true
         console.log(regResult)  
        if (result.length === 0 && notEnterted === true ) {
            return nekiMsg[0]
        } else if (result.length > 15) {
            return nekiMsg[1]
        }  else if (okToDial === true && regResult === true) {
            return nekiMsg[2]
        }  else if (result.length > 0 && okToDial === true && regResult !== true) {
            return nekiMsg[3]
        }
       
        else  { return result};
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