import React from 'react';




const PhoneScreen = (props) => {
  
    let nekiArr = props.val;
    console.log(nekiArr)
    
    

    


    return (
        <div className="phoneScreen">

            <div className="screenDisplayArea">
            
                <div className='displayChar'>                
                  {/* {displayedNumbers} */}
                  {nekiArr}
                </div>

            </div>

        </div>
    )

}


export default PhoneScreen