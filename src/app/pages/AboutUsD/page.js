import React from 'react';
import AboutUscontentD from '../../components/AboutUscontentD';
import SmoothScroll from '../../utility/SmoothScroll';
export default function page(){
    return(
    <div className='chcontainer'>
        <SmoothScroll>
            <AboutUscontentD/>
        </SmoothScroll>
    </div>
    );
}
