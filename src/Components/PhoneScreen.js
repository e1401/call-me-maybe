import React from 'react';




const PhoneScreen = (props) => {
    
    // let nekiArr = props.value;
    
    let nekiArr = ['7', '9', '6']

    


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