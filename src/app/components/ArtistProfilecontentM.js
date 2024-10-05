'use client';
import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import Iframe from 'react-iframe';
import BKGAudio from '../components/BKGAudio';
import videopageBKG from '../../../public/MedBundleBKGTT.jpg';
const variantstxt = {
    hidden: {
        opacity: 0,
        y: 40
    },
    visible: {
        opacity: 1,
        y: 0
    }
};
const variantsimg = {
    hidden: {
        opacity: 0,
      
    },
    visible: {
       opacity: 1,
    }
};
function ArtistProfilecontentM(){
    return(
        <>
            <div className="audiocontain">
                <BKGAudio/>
            </div>
            <div className="bklink">
                <Link href='/pages/CominghomeM'>
                    <div className="bkbtn">
                        <p>Back</p>
                    </div>
                </Link>
            </div>
            <div className="bkgcontainer">
                <Image
                    src={videopageBKG}
                    alt="videobackground67"
                    fill
                    priority
                    quality={90}
                />
            </div>
            <div className='appcontainer'>
            <div>
                <div style={{height:"100%",backgroundColor:"red"}}>
                    <div className="vidcontainer22 mgntop30">
                        <div className="vidwrapper">
                            <Iframe
                                url="https://player.vimeo.com/video/880766122?h=02af9af9d3"
                                width="100%"
                                height="100%"
                                id="Video1"
                                className="vidplayer"
                                loading='lazy'
                                style={{border: "none"}}
                            />
                        </div>
                    </div>
              
                    <div className='topLayeritem2 mgntop5'>
                        <Link href="/pages/ArtGalleryT" className="apptextB" style={{textDecoration:'none'}}>
                            <Image
                                src="/Turtleicon.png"
                                alt="MenuBKG"
                                width={125}
                                height={125}
                                loading='lazy'
                                quality={90}
                            />
                            <h1>Art Gallery</h1>
                        </Link>
                    </div>
                </div> 
            </div>
            </div>
        </>
    );
}
export default ArtistProfilecontentM;