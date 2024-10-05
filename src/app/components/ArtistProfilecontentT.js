'use client';
import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import Image from "next/image";
import {motion} from 'framer-motion';
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
function ArtistProfilecontentT(){
    const [width, setWidth] = useState(0);
    useEffect(() => {
        setWidth(window.innerWidth);
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    let PageView = () => {
        return(
            <>
                <div className="audiocontain">
                    <BKGAudio/>
                </div>
                <div className="bklink">
                    <Link href='/pages/CominghomeT/#artprofileT'>
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
                    <div className='teachequal flexpaneldisplay'>
                        <div className="vidcontainerG2">
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
                    </div>
                    <div className='teachequal flexpaneldisplay'>
                        <div className='topLayeritem2'>
                            <Link href="/pages/ArtGalleryT" className="apptextB" style={{textDecoration:'none'}}>
                                <Image
                                    src="/Turtleicon.png"
                                    alt="MenuBKG"
                                    width={150}
                                    height={150}
                                    loading='lazy'
                                    quality={90}
                                />
                                <h1>Art Gallery</h1>
                            </Link>
                        </div>
                    </div> 
                </div>
            </>
            
        );
    }
    let PageFlipView = () => {
        return(
            <>
                <div className="logobox">
                    <div className='flexpaneldisplay'>
                        <div className="apptextL">
                            <h1>Please Turn To Portrait</h1>
                        </div>
                    </div>
                </div>
            </>
        );
    }
    let FullPageView = () => {
        if(width > 1024){
            return <PageFlipView/>
        }else{
            return <PageView/>
        }
    }
    return <FullPageView/>
}
export default ArtistProfilecontentT;