import React from 'react';
import dynamic from 'next/dynamic';
import Content from '../../components/CominghomecontentM'; 
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
