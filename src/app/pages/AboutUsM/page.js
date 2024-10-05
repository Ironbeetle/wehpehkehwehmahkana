import React from 'react';
import AboutUscontentM from '../../components/AboutUscontentM';
import SmoothScroll from '../../utility/SmoothScroll';
export default function page(){
    return(
        <div className='chcontainer'>
            <SmoothScroll>
                <AboutUscontentM/>
            </SmoothScroll>
        </div>
    );
}
