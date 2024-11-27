'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import HamburgerMenu from '../components/HamburgerMenu';
export default function TeachHomecontentD(){
    const [activeTab, setActiveTab] = useState(1);
    const searchParams = useSearchParams();
    const lesson = searchParams.get('keyword');
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
                    <div className='apptxtFrontW' style={{height:"fit-content"}}>
                        <h2>
                        Creator<br/> Thank you for the WISDOM<br/> to see the TRUTH<br/> and the COURAGE to change,<br/>
                        so that I can have LOVE<br/> and HUMILITY in my heart,<br/> 
                        from this I live life with HONESTY<br/>
                        and RESPECT.
                        </h2>
                    </div>
                    </div>
                </motion.div>
            </>
        );
    }
    const Viewdefault = () => {
        return (
            <>
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1, ease: 'easeInOut'}}
                    className='row1fr2fr44r4'
                >
                    <div className='flexpaneldisplay' style={{height:"100dvh"}}>
                        <div className='topLayeritemTextD'>

                            <div className='apptxtTitlesW'>
                                <h2>
                                    Medicine Bundle
                                </h2>                               
                                <h2>
                                    Re-Connecting To The Land<br/>
                                    and<br/> Ancestral Knowledge<br/> of the<br/>
                                    Ininew and Dene 
                                </h2>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </>
        );
    }
    const IntroView = () => {
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
    const Category = () => {
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
                                    <h2>The Land</h2>
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
                                    <h2>Creation</h2>
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
                <div className='splitpanelTeachLeft2'>
                <div className='flexpaneldisplay' style={{height:"100dvh"}}>
                        <div className='topLayeritemRight'> 
                            <button className={activeTab === 4 ? 'active' : ''} onClick={() => setActiveTab(4)}
                                style={{width: '100%', height: '100%'}}
                            >
                                <Image
                                        src="/Thunderbirdicon.png"
                                        alt="MenuBKG"
                                        width={125}
                                        height={125}
                                        loading='lazy'
                                        quality={90}
                                    />
                                <div className="apptextB">
                                    <h3>Introduction</h3>
                                </div>
                            </button>
                        </div>
                        <div className='topLayeritemRight'> 
                            <button className={activeTab === 3 ? 'active' : ''} onClick={() => setActiveTab(3)}
                                style={{width: '100%', height: '100%'}}
                            >
                                <Image
                                        src="/Teachingsicon.png"
                                        alt="MenuBKG"
                                        width={125}
                                        height={125}
                                        loading='lazy'
                                        quality={90}
                                    />
                                <div className="apptextB">
                                    <h3>Prayer</h3>
                                </div>
                            </button>
                        </div>
                        <div className='topLayeritemRight'> 
                            <button className={activeTab === 2 ? 'active' : ''} onClick={() => setActiveTab(2)}
                                style={{width: '100%', height: '100%'}}
                            >
                                <Image
                                        src="/Sasquatchicon.png"
                                        alt="MenuBKG"
                                        width={125}
                                        height={125}
                                        loading='lazy'
                                        quality={90}
                                    />
                                <div className="apptextB">
                                    <h3>Teachings</h3>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='splitpanelTeachRight2'>
                    {activeTab === 1 && <Viewdefault/>}
                    {activeTab === 4 && <IntroView/>}
                    {activeTab === 3 && <PrayerView/>} 
                    {activeTab === 2 && <Category/>}  
               </div>
            </motion.div>
        </motion.div>
    );
}
