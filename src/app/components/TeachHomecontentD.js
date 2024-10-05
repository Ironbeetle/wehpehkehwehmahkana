'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import HamburgerMenu from '../components/HamburgerMenu';
const BKGAudio = dynamic(() => import('./BKGAudio'), { ssr: false });
export default function TeachHomecontentD(){
    const [activeTab, setActiveTab] = useState(1);
    const searchParams = useSearchParams();
    const lesson = searchParams.get('keyword');
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
    const PrayerView = () => {
        return (
            <>
                <motion.div 
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1, ease: 'easeInOut'}}
                    className='flexpaneldisplay' 
                    style={{height:"100%"}}
                >
                    <div className='topLayeritemTextD'>
                        <div className='apptxtTitlesW'>
                            <h2>
                                Thank You Creator<br/>
                                for blessing me with another day to continue,<br/>
                                Walking, Learning and Living The Good Life,<br/>
                            </h2>
                            <h2>
                                Thank you for giving me insight on how <br/>I treat myself, and to see good in others
                            </h2>
                            <h2>
                                In your blessed name Amen
                            </h2>
                        </div> 
                    </div>
                </motion.div>
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
                <motion.div 
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1, ease: 'easeInOut'}}
                    className="flexpaneldisplay" 
                    style={{height:"100%"}}
                >
                    <div className='topLayeritemVid flexpaneldisplay3'>
                        <iframe src="https://player.vimeo.com/video/811032864?h=bb18723052"
                            width="720" 
                            height="405"
                            style={{border:'none'}} 
                        />
                    </div>
                </motion.div>
            </>
        );
    }
    const Ininew = () => {
        return (
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1, ease: 'easeInOut'}}
            >
                <div className='GroupTop parallaxgroup'>
                   <div className='circlecontainteach'>
                        <div className="quarterul">
                            <div className='qulpos' style={{height:"100%"}}>
                                <Link 
                                    href='/pages/TeachingsD'
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
                                    <h2>Sacred Teachings</h2>
                                </Link>
                            </div>
                        </div>
                        <div className="quarterur">
                            <div className='qurpos' style={{height:"100%"}}>
                                <Link 
                                    href='/pages/SelfCareD'
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
                                    <h2>Natural Laws</h2>
                                </Link>
                            </div>
                        </div>
                        <div className="quarterll">
                            <div className='qllpos' style={{height:"100%"}}>
                                <Link 
                                    href='/pages/LanduseD'
                                    className="apptextB" 
                                    style={{textDecoration:'none',width:"100%", height:"100%"}}
                                >
                                    <h2>Our 6 Seasons</h2>
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
                            <div className='qlrpos' style={{height:"100%"}}>
                                <Link 
                                    href='/pages/Story'
                                    className="apptextB" 
                                    style={{textDecoration:'none',width:"100%", height:"100%"}}
                                >
                                    <h2>Creation Story</h2>
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
            </motion.div>
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
                            <h3>Fundamentals</h3>
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
                            <h3>Fundamentals</h3>
                        </div>
                    </button>
                </>
            )
        }
    }
    return(
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1, ease: 'easeInOut'}}
        >
            <div className="hamlink">
                <HamburgerMenu/>
            </div>
            <div className="bkgcontainer">
                <video autoPlay loop className='videobkg'>
                    <source src="/TradTeachBKG.webm" type="video/webm; codecs=vp9"/>
                </video>
            </div>
            <motion.div 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1.5, delay: 1, ease: 'easeInOut'}}
            >
                <div className='splitpanelTeachLeft'>
                    <ReturnView/>
                    {activeTab === 2 && <DocView/>} 
                </div>
                <div className='splitpanelTeachRight'>
                    <div className='flexpaneldisplay' style={{height:"100dvh"}}>
                        <div className='topLayeritemRight'> 
                            <PrayConvert/>
                        </div>
                        <div className='topLayeritemRight'> 
                            <button className={activeTab === 2 ? 'active' : ''} onClick={() => setActiveTab(2)}
                                style={{width: '100%', height: '100%'}}
                            >
                                <div className="apptextB">
                                    <h3>Introduction</h3>
                                </div>
                            </button>
                        </div>
                        <div className='topLayeritemRight'> 
                            <IninewConvert/>
                        </div>
                        <div className='topLayeritemRight'>
                            <Link 
                                href='/pages/MedicineJourneyD'
                                style={{textDecoration:'none',width:"100%", height:"100%"}}
                            >
                                <div className="apptextB">
                                    <h3>Medicine Journey</h3>
                                </div>
                            </Link>
                        </div>
                    </div>
               </div>
            </motion.div>
        </motion.div>
    );
}
