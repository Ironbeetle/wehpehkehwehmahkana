import React from 'react';
import Image from "next/image";
import ArtGallery from '../../components/ArtGallerycontentD'; 
function page(){
    return(
        <div className='chcontainer'>
                <ArtGallery/>
        </div>
    );
}
export default page;
