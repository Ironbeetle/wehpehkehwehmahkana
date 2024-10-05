import React from 'react';
import AboutUsT from '../../components/AboutUscontentT';
import SmoothScroll from '../../utility/SmoothScroll';
export default function page(){
    return(
        <div className='chcontainer'>
            <SmoothScroll>
                <AboutUsT/>
            </SmoothScroll>
        </div>
    );
}
