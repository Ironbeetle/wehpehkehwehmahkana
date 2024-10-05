'use client';
import React, {useState, useEffect}from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import HamburgerMenu from "../components/HamburgerMenu";
import BKGAudio from "../components/BKGAudio";
import Teachcarousel from "../components/Teachcarousel"; 
import CarouselItems from "../components/Artcarousel";
import KTCpageBKG from "../../../public/PrayerBKGTT.jpg";
export default function ArtGallerycontentT(){
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
                <div className="hamlink">
                    <HamburgerMenu/>
                </div>
                <div className="audiocontain">
                    <BKGAudio/>
                </div>
                <div className="bkgcontainer">
                    <Image
                        src={KTCpageBKG}
                        alt="ArtGallerycontentT"
                        fill
                        style={{objectFit:'cover'}}
                        loading='eager'
                        priority
                        quality={90}
                    />
                </div>
                <motion.div 
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:1, delay:1, ease:"easeInOut"}}
                    className="appcontainer"
                >
                    <div>
                        <div className="carouselwindow">
                            <Teachcarousel>
                                <CarouselItems/>
                            </Teachcarousel>   
                        </div>
                    </div>
                </motion.div>
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
