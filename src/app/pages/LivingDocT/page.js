import React from 'react';
import Content from '../../components/LivDoccontentT'; 
import SmoothScroll from '../../utility/SmoothScroll';
export default function page(){
    return(
    <div className='chcontainer'>
    <SmoothScroll>
        <Content/>
    </SmoothScroll>
    </div>
    );
}
