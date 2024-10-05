'use client';
import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import Image from "next/image";
import Hamburgermenu from './HamburgerMenuApp';
const Workshopcontent = () =>{
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
    let Page = () => {
        return(
            <>
                <div className="hamlink">
                    <Hamburgermenu/>
                </div>
                <div className='appcontainer'>
                    <div className='GroupParallax parallaxgroupS'>
                        <div className="parallaxlayer farlayer">
                            <div className='itemplacementMid flexpaneldisplay' style={{height:"100%"}}>
                                <Image 
                                src="/KTClogoAlphaII.png"
                                alt="wellnessprogram"
                                width={300}
                                height={169}
                                quality={100}
                                />
                                <div className='apptxtTitlesW'>
                                    <h2>
                                    Keewatin Tribal Council<br/> Health Services
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='GroupParallax parallaxgroupS'>
                        <div className="parallaxspacer"/>
                    </div>
                    {/* Top segment */}            
                    <div className="GroupParallax parallaxgroupS">
                        <div className="parallaxlayer baselayer">
                            <div className="itemplacementMid flexpaneldisplay">
                                <div className="apptxtFrontW">
                                    <h1>
                                        Workshop Assistant
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='GroupTop parallaxgroupS' id='returnsection'>
                        <div className='parallaxlayer caplayer'>
                            <div className='flexpaneldisplay'>
                                <div className='apptxtFront'>
                                    <h1>
                                        WorkShop Title
                                    </h1>
                                </div>
                                <div className='topLayeritem1M'>
                                    <Link href="/KTC_WorkShops/WorkShopAgenda" className="apptextB" style={{textDecoration:'none'}}>
                                        <Image
                                            src="/Mouseicon.png"
                                            alt="MenuBKG"
                                            width={175}
                                            height={175}
                                            loading='lazy'
                                            quality={90}
                                        />
                                        <h1>Agenda</h1>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    <div className='GroupTop parallaxgroup'>
                        <div className="parallaxlayer caplayer">
                            <div className='flexpaneldisplay'>
                                <div className='apptxtFront'>
                                    <h1>
                                        Wellness Toolkits
                                    </h1>
                                </div>
                                <div className='topLayeritem1M'>
                                    <Link href="/KTC_WorkShops/WellnessPage1" className="apptextB" style={{textDecoration:'none'}}>
                                        <Image
                                            src="/Butterflyicon.png"
                                            alt="MenuBKG"
                                            width={150}
                                            height={150}
                                            loading='lazy'
                                            quality={90}
                                        />
                                        <h1>Self Care Tips</h1>
                                    </Link>
                                </div>
                                <div className='topLayeritem1M' style={{marginTop:"2%"}}>
                                    <Link 
                                        href={{
                                            pathname:"/pages/TeachHomeM" ,
                                            query: {
                                                keyword: 'workshop'
                                            }
                                        }}
                                        className="apptextB" 
                                        style={{textDecoration:'none'}}>
                                        <Image
                                            src="/Teachingsicon.png"
                                            alt="MenuBKG"
                                            width={150}
                                            height={150}
                                            loading='lazy'
                                            quality={90}
                                        />
                                        <h1>Sacred Teachings</h1>
                                    </Link>
                                </div>
                                <div className='topLayeritem1M' style={{marginTop:"2%"}}>
                                    <Link href="/KTC_WorkShops/WellnessPage3" className="apptextB" style={{textDecoration:'none'}}>
                                        <Image
                                            src="/Caribouicon.png"
                                            alt="MenuBKG"
                                            width={150}
                                            height={150}
                                            loading='lazy'
                                            quality={90}
                                        />
                                        <h1>Traditional Foods</h1>
                                    </Link>
                                </div>
                                <div className='topLayeritem1M' style={{marginTop:"2%"}}>
                                    <Link href="/KTC_WorkShops/WellnessPage4" className="apptextB" style={{textDecoration:'none'}}>
                                        <Image
                                            src="/Wolficon.png"
                                            alt="MenuBKG"
                                            width={150}
                                            height={150}
                                            loading='lazy'
                                            quality={90}
                                        />
                                        <h1>Other Resources</h1>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='GroupParallax parallaxgroupS'>
                        <div className="parallaxspacer"/>
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
                            <h1>This is a mobile only screen</h1>
                        </div>
                    </div>
                </div>
            </>
        );
    }
    let FullPageView = () => {
        if(width > 800){
            return <PageFlipView/>
        }else{
            return <Page/>
        }
    }
    return <FullPageView/>
}
export default Workshopcontent;