import React from 'react';


// if a user clicks the green button while the numbers are not entered, give out an error message "Please enter phone number"

const PhoneScreen = (props) => {
  
    let nekiArr = props.val;
    console.log(nekiArr)
    
    

    


    return (
        <div className="phoneScreen">

            <div className="screenDisplayArea">
            
                <div className='displayChar'>                
                  
                  {nekiArr}
                </div>

            </div>

        </div>
    )

}


export default PhoneScreen