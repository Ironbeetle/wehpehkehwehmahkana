import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Content from '../Wellness2'; 
function page(){
    return(
        <div className='chcontainer'>
            <div className="bklink">
                <Link href='/KTC_WorkShops'>
                    <div className="bkbtn">
                        <p>Back</p>
                    </div>
                </Link>
            </div>
            <div className="bkgcontainer">
            <Image
                    src="/Mile20BKGM.jpg"
                    alt="ArtGallerycontentD"
                    fill
                    loading="eager"
                    quality={90}
                />
            </div>
            <Content/>
        </div>
    );
}
export default page;