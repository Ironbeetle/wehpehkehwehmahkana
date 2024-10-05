import React from 'react';
import Link from 'next/link';
import StoryContent from '../../stories/Storycontent'; 
function page(){
    return(
        <div className='chcontainer'>
            <div className="bkgcontainer">
                <video autoPlay loop className='videobkg'>
                    <source src="/CreationVidbkgMobile.webm" type="video/webm; codecs=vp9"/>
                </video>
            </div>
            <StoryContent/>
        </div>
    );
}
export default page;