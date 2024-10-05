import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import Content from './Workshopcontent';
function page(){
    return(
        <div className='chcontainer'>
            <div className="bkgcontainer">
                <Image
                    src="/Mile20BKGM.jpg"
                    alt="ArtGallerycontentD"
                    fill
                    loading="eager"
                    quality={90}
                />
                <Content/>
            </div>
        </div>
    );
}
export default page;