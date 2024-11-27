'use client';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import HamburgerMenu from '../components/HamburgerMenu';
export default function TeachHomecontentT(){
    const [activeTab, setActiveTab] = useState(1);
    const searchParams = useSearchParams();
    const lesson = searchParams.get('keyword');
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
    
    const PrayerView = () => {
        return (
            <>
                <div className='flexpaneldisplay' style={{height:"100%"}}>
                    <div className='topLayeritemTextD'>
                        <div className='apptxtTitlesW'>
                            <h2>
                            Creator<br/> Thank you for the WISDOM<br/> to see the TRUTH<br/> and the COURAGE to change,<br/>
                            so that I can have LOVE<br/> and HUMILITY in my heart,<br/> 
                            from this I live life with HONESTY<br/>
                            and RESPECT.
                            </h2>
                        </div> 
                    </div>
                </div>
            </>
        );
    }
    let PrayConvert = () => {
        if (lesson === 'activeview') {
            return (
                <>
                    <button className={activeTab === 3 ? 'active' : ''} onClick={() => setActiveTab(3)}
                        style={{width: '100%', height: '100%', boxSizing: 'border-box'}}
                    >
                        <div className="apptextB">
                            <h3>Prayer</h3>
                        </div>
                    </button>
                </>
            )
        }
        else {
            return (
                <>
                    <button className={activeTab === 1 ? 'active' : ''} onClick={() => setActiveTab(1)}
                        style={{width: '100%', height: '100%', boxSizing: 'border-box'}}
                    >
                        <div className="apptextB">
                            <h3>Prayer</h3>
                        </div>
                    </button>
                </>
            )
        }
    }
    const DocView = () => {
        return (
            <>
                <div className="flexpaneldisplay" style={{height:"100%"}}>
                    <div className='topLayeritemVid flexpaneldisplay3'>
                        <iframe src="https://player.vimeo.com/video/811032864?h=bb18723052"
                            width="720" 
                            height="405"
                            style={{border:'none'}} 
                        />
                    </div>
                </div>
            </>
        );
    }
    const Ininew = () => {
        return (
            <div style={{height:"100%"}}>
                <div className='circleteachtablet'>
                    <div className="quarterul">
                        <div className='qulpos'>
                            <Link 
                                href='/pages/TeachingsT'
                                className="apptextB" 
                                style={{textDecoration:'none',width:"100%", height:"100%"}}
                            >
                                <Image
                                    src="/Thunderbirdicon.png"
                                    alt="MenuBKG"
                                    width={125}
                                    height={125}
                                    loading='lazy'
                                    quality={90}
                                    style={{marginLeft: "10%", marginTop: "25%"}}
                                />
                                <h1>Sacred Teachings</h1>
                            </Link>
                        </div>
                    </div>
                    <div className="quarterur">
                        <div className='qurpos'>
                            <Link 
                                href='/pages/SelfCareT'
                                className="apptextB" 
                                style={{textDecoration:'none',width:"100%", height:"100%"}}
                            >
                                <Image
                                    src="/Socialicon.png"
                                    alt="MenuBKG"
                                    width={125}
                                    height={125}
                                    loading='lazy'
                                    quality={90}
                                    style={{marginRight: "10%", marginTop:"25%"}}
                                />
                                <h1>Natural Laws</h1>
                            </Link>
                        </div>
                    </div>
                    <div className="quarterll">
                        <div className='qllpos'>
                            <Link 
                                href='/pages/LanduseT'
                                className="apptextB" 
                                style={{textDecoration:'none',width:"100%", height:"100%"}}
                            >
                                <h1>Our 6 Seasons</h1>
                                <Image
                                    src="/StoriesII.png"
                                    alt="MenuBKG"
                                    width={125}
                                    height={125}
                                    loading='lazy'
                                    quality={90}
                                    style={{marginLeft: "15%",marginBottom:"30%"}}
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="quarterlr">
                        <div className='qlrpos'>
                            <Link 
                                href='/pages/Story'
                                className="apptextB" 
                                style={{textDecoration:'none',width:"100%", height:"100%"}}
                            >
                                <h1 style={{left:"1%"}}>Creation Story</h1>
                                <Image
                                    src="/IslandTurtle.png"
                                    alt="MenuBKG"
                                    width={150}
                                    height={150}
                                    loading='lazy'
                                    quality={90}
                                    style={{marginRight: "8%",marginBottom:"25%"}}
                                />
                            </Link>
                        </div>    
                    </div>   
                </div>
            </div>
        )
    }
    let IninewConvert = () => {
        if (lesson === 'activeview') {
            return (
                <>
                    <button className={activeTab === 1 ? 'active' : ''} onClick={() => setActiveTab(1)}
                        style={{width: '100%', height: '100%'}}
                    >
                        <div className="apptextB">
                            <h3>Teachings</h3>
                        </div>
                    </button>
                </>
            )
        }
        else {
            return (
                <>
                    <button className={activeTab === 3 ? 'active' : ''} onClick={() => setActiveTab(3)}
                        style={{width: '100%', height: '100%'}}
                    >
                        <div className="apptextB">
                            <h3>Teachings</h3>
                        </div>
                    </button>
                </>
            )
        }
    }
    let ReturnView = () => {
        if (lesson === 'activeview') {
            return (
                <>
                {activeTab === 3 && <PrayerView/>}
                {activeTab === 1 && <Ininew/>}
                </>
            )
        }
        else {
            return (
                <>
                {activeTab === 1 && <PrayerView/>}
                {activeTab === 3 && <Ininew/>}
                </>
            )
        }
    }
    let PageView = () => {
        return(
            <div>
                <div className="hamlink">
                    <HamburgerMenu/>
                </div>
                <div className="bkgcontainer">
                    <video autoPlay loop className='videobkg'>
                        <source src="/webm/TeachBKGTablet.webm" type="video/webm; codecs=vp9"/>
                    </video>
                </div>
                <motion.div 
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1, ease: 'easeInOut'}}
                >
                    <div className='teachpaneltop'>
                        <ReturnView/>
                        {activeTab === 2 && <DocView/>} 
                    </div>
                    <div className='teachpanelbot'>
                        <div className='row1fr1fr1fr flexpaneldisplay' style={{height:"100%"}}>
                            <div className='flexpaneldisplay' style={{height:"100%"}}>
                                <div className='topLayeritemRight'> 
                                    <PrayConvert/>
                                </div>
                            </div>
                            <div className='flexpaneldisplay' style={{height:"100%"}}>
                                <div className='topLayeritemRight'> 
                                    <button className={activeTab === 2 ? 'active' : ''} onClick={() => setActiveTab(2)}
                                        style={{width: '100%', height: '100%'}}
                                    >
                                        <div className="apptextB">
                                            <h3>Introduction</h3>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className='flexpaneldisplay' style={{height:"100%"}}>
                                <div className='topLayeritemRight'> 
                                    <IninewConvert/>
                                </div>
                            </div>
                        </div>
                   </div>
                </motion.div>
            </div>
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
