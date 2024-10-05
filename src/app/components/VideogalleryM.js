'use client';
import React from 'react';
import Image from 'next/image';
import BKGAudio from '../components/BKGAudio';
import HamburgerMenu from '../components/HamburgerMenu';
import Teachcarousel from '../components/Teachcarousel';
import ComehomeBKG from '../../../public/ComehomeBKG.jpg';
const VideogalleryM = () => {
    const handleButtonClick = (videoUrl) => {
        const iframe = document.getElementById('iframeId');
        iframe.src = videoUrl;
    };
    function VidMenuList() {
        let Items = [
            {
                click: "https://player.vimeo.com/video/306814037?h=910c1e5f5f&portrait=0",
                thumbnail: "/thumbnails/Jeffbrightnose.jpg",
                title: "We Peh Keh Weh Mah Kana",
                subtitle: "PART 1 English, 59 minutes"
            },
            {
                click: "https://player.vimeo.com/video/811032864?h=bb18723052",
                thumbnail: "/thumbnails/Projectvision.jpg",
                title: "We Peh Keh Weh Mah Kana",
                subtitle: "PART 2 English, 40 minutes"
            },
            {
                click: "https://player.vimeo.com/video/883426175?h=92595cd4e0",
                thumbnail: "/thumbnails/DocumentaryC.jpg",
                title: "We Peh Keh Weh Mah Kana",
                subtitle: "Ininew Part 1, 100 minutes"
            },
            {
                click: "https://player.vimeo.com/video/887120200?h=94d60b0bf7&portrait=0",
                thumbnail: "/thumbnails/sharonmckay.jpg",
                title: "We Peh Keh Weh Mah Kana",
                subtitle: "Ininew Part 2, 65 minutes"
            },
            {
                click: "https://player.vimeo.com/video/999498610?badge=0",
                thumbnail: "/thumbnails/Victor2017B.jpg",
                title: "We Peh Keh Weh Mah Kana",
                subtitle: "Dene Part 1, 72 minutes"
            },
            {
                click: "https://player.vimeo.com/video/999924532?h=a0d5f82360&portrait=0",
                thumbnail: "/thumbnails/SarahSamuel.jpg",
                title: "We Peh Keh Weh Mah Kana",
                subtitle: "Dene Part 2, 50 minutes"
            },
            {
                click: "https://player.vimeo.com/video/880766122?h=02af9af9d3",
                thumbnail: "/thumbnails/Artist.jpg" ,
                title: "Jasyn Lucas",
                subtitle: "English"
            },
            {
                click: "https://player.vimeo.com/video/880765308?h=bf8670ba81",
                thumbnail: "/thumbnails/Buffalo.jpg" ,
                title: "Buffalo",
                subtitle: "Jasyn Lucas"
            },
            {
                click: "https://player.vimeo.com/video/880766951?h=87dafdc6aa",
                thumbnail: "/thumbnails/TreeofLife.jpg" ,
                title: "Tree of Life",
                subtitle: "Jasyn Lucas"
            },
            {
                click: "https://player.vimeo.com/video/880765219?h=c5e90e2e7f",
                thumbnail: "/thumbnails/Wind.jpg" ,
                title: "Wind",
                subtitle: "Jasyn Lucas"
            },
            {
                click: "https://player.vimeo.com/video/880766791?h=f56899034e",
                thumbnail: "/thumbnails/Tobacco.jpg" ,
                title: "Tobacco",
                subtitle: "Jasyn Lucas"
            },
            {
                click: "https://player.vimeo.com/video/880766695?h=c4561f640b",
                thumbnail: "/thumbnails/Sasquatch.jpg" ,
                title: "Sasquatch",
                subtitle: "Jasyn Lucas"
            },
            {
                click: "https://player.vimeo.com/video/880766607?h=1b6017d7de",
                thumbnail: "/thumbnails/Cedar.jpg" ,
                title: "Cedar",
                subtitle: "Jasyn Lucas"
            },
            {
                click: "https://player.vimeo.com/video/880766559?h=27a8fa2f61",
                thumbnail: "/thumbnails/Loon.jpg" ,
                title: "Loon",
                subtitle: "Jasyn Lucas"
            },
            {
                click: "https://player.vimeo.com/video/880765514?h=5da08630de",
                thumbnail: "/thumbnails/Fire.jpg" ,
                title: "Fire",
                subtitle: "Jasyn Lucas"
            },
            {
                click: "https://player.vimeo.com/video/880765360?h=12e7d48248",
                thumbnail: "/thumbnails/Butterfly.jpg" ,
                title: "Butterfly",
                subtitle: "Jasyn Lucas"
            },
            {
                click: "https://player.vimeo.com/video/880764909?h=19af316879",
                thumbnail: "/thumbnails/Creation.jpg",
                title: "Creation",
                subtitle: "Jasyn Lucas"
            },
            {
                click: "https://player.vimeo.com/video/880766004?h=29fab3210c",
                thumbnail: "/thumbnails/Allnations.jpg" ,
                title: "All Nations",
                subtitle: "Jasyn Lucas"
            },
            {
                click: "https://player.vimeo.com/video/880765771?h=0d20c6c4fc",
                thumbnail: "/thumbnails/Eagle.jpg" ,
                title: "Eagle",
                subtitle: "Jasyn Lucas"
            },
            {
                click: "https://player.vimeo.com/video/880765098?h=40a8288926",
                thumbnail: "/thumbnails/Beaver.jpg" ,
                title: "Beaver",
                subtitle: "Jasyn Lucas"
            },
            {
                click: "https://player.vimeo.com/video/880764998?h=220a0ef97d",
                thumbnail: "/thumbnails/PolarBear.jpg" ,
                title: "Polar Bear",
                subtitle: "Jasyn Lucas"
            },            
        ]
        return(
            <>
                {Items.map((item, index) => (
                    <div className='listitemM' key={index}>
                        <div className='listhover'>
                            <button onClick={() => handleButtonClick(item.click)}
                                    style={{width:'100%', height:'100%'}} id='video2'
                            >
                                <div>
                                    <Image 
                                        src={item.thumbnail} 
                                        alt="medicineIMGHere" 
                                        width={150} 
                                        height={150}
                                    />
                                </div>
                                <div className='apptext'>
                                    <h2>{item.title}</h2>
                                    <p>{item.subtitle}</p>
                                </div>
                            </button>
                        </div>
                    </div>
                ))}
            </>
        );
    }
    return (    
        <>
            <div className="audiocontain">
                <BKGAudio/>
            </div>
            <div className="hamlink">
                <HamburgerMenu/>
            </div>
            <div className="bkgcontainer">
                <Image
                    src={ComehomeBKG}
                    alt="ComingHomeBKG"
                    fill
                    style={{objectFit: 'cover'}}
                    quality={100}
                    loading='eager'
                />
            </div>
            <div className='vidgallerycontainer tabcontent2'>
                <div className='splitpaneltop'>
                    <div className='teachpanelMM' style={{height:'100%'}}>
                        <iframe 
                            id="iframeId"
                            src="" 
                            width="100%" 
                            height="100%"
                            style={{border:'none'}} 
                        >
                        </iframe>
                    </div>
                </div>
                <div className='splitpanelbot'>
                    <Teachcarousel>
                        <VidMenuList/>
                    </Teachcarousel>
                </div>
            </div>
        </>
    )
};
export default VideogalleryM;