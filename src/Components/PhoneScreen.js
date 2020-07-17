import React from 'react';




const PhoneScreen = (props) => {
    
    let nekiArr = props.value;
    console.log(nekiArr)
    // let nekiArr = ['7', '9']

    


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