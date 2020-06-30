import React, { useState } from 'react';



export default function ScreenDisplayArea(props) {
    const [screenContent, setScreenContent] = useState(['1','2','3','0' ]);

    return (
        <div className="screenDisplayArea">
                 <div className='displayChar'> +{screenContent[3]}385992550292</div>
                 
        </div>
    )
}
