'use client';
import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import Image from "next/image";
import {motion} from 'framer-motion';
import Iframe from 'react-iframe';
import BKGAudio from '../components/BKGAudio';
import StorytellerBKG from '../../../public/videopageBKG.jpg';
import StoryTellerBKGM from '../../../public/Mile20BKGM.jpg';
import StoryTellerBKGT from '../../../public/Mile20BKGTT.jpg';
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
function ArtistProfilecontentD(){
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
    function Menualignments() {
        if (width < 720) {
            return 'flexpaneldisplay';
        }else if(width > 721 && width < 900){
            return 'flexpaneldisplayR';
        } else {
            return 'flexpaneldisplayR';
        }
    }
    function FrameWidthSelect(){
        if (width < 720) {
            return 100
        }else if(width > 721 && width < 900){
            return 150
        } else {
            return 225
        }
    }
    function FrameHeightSelect(){
        if (width < 720) {
            return 100
        }else if(width > 721 && width < 900){
            return 150
        } else {
            return 225
        }
    }
    function vidplacement() {
        if (width < 720) {
            return 'vidplayer3';
        }else if(width > 721 && width < 900){
            return 'vidplayer2';
        } else {
            return 'vidplayer2';
        }
    }
    function BKGSelect() {
        if (width < 720) {
            return StoryTellerBKGM;
        }else if(width > 721 && width < 900){
            return StoryTellerBKGT;
        } else {
            return StorytellerBKG;
        }
    }
    return(
        <>
            <div className="audiocontain">
                <BKGAudio/>
            </div>
            <div className="bklink">
                <Link href='/pages/CominghomeD/#artprofileD'>
                    <div className="bkbtn">
                        <p>Back</p>
                    </div>
                </Link>
            </div>
            <div className="bkgcontainer">
                <Image
                    src={BKGSelect()}
                    alt="videobackground67"
                    fill
                    loading='eager'
                    quality={90}
                />
            </div>
            <motion.div 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 2, delay:1.5, ease: "easeInOut"}}
                className='appcontainer overlay'
            >
                <div className={Menualignments()} style={{height:"100%"}}>
                    {/* left side start */}
                    <div className='vidcontainer2'>
                        <div className='vidwrapper'>
                            <Iframe
                                url="https://player.vimeo.com/video/880766122?h=02af9af9d3"
                                width="100%"
                                height="100%"
                                id="Video1"
                                className={vidplacement()}
                                loading='lazy'
                                style={{border: "none"}}    
                            />
                        </div>
                    </div>
                    {/* right side start */} 
                    <div className='topLayercolumn4'>
                        <div className='topLayeritem3'>
                            <Link href="/pages/ArtGalleryD" className="apptext" style={{textDecoration:'none'}}>
                                <Image
                                    src="/thumbnails/Creation.jpg"
                                    alt="MenuBKG"
                                    width={FrameWidthSelect()}
                                    height={FrameHeightSelect()}
                                    quality={90}
                                />
                                <h1>Art Gallery</h1>
                            </Link>
                        </div>
                    </div> 
                </div>
            </motion.div>
        </>
    );
}
export default ArtistProfilecontentD;