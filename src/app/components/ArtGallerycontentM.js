'use client';
import React from "react";
import Image from "next/image";
import BKGAudio from "../components/BKGAudio";
import HamburgerMenu from "../components/HamburgerMenu";
import Teachcarousel from "../components/Teachcarousel"; 
import CarouselItems from "../components/Artcarousel"; 
import GeneralBKGM from "../../../public/GeneralBKGM.jpg";   
const ArtGalleryM = () => {
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
                    src={GeneralBKGM}
                    alt="ArtGallerycontentM"
                    fill
                    style={{objectFit: 'cover'}}
                    loading='eager'
                    priority
                    quality={90}
                />
            </div>
            <div className="appcontainer">
            {/* Carousel start */}
            <div className="carouselwindow">
                <Teachcarousel>
                    <CarouselItems/>
                </Teachcarousel>   
            </div>
            </div>
        </>
    );
}
export default ArtGalleryM;
