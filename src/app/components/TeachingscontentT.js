'use client';
import React, {useState, useEffect} from 'react';
import Image from "next/image";
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {motion} from "framer-motion";
import Teachcarousel from '../components/Teachcarousel';
const TeachingscontentT = () => {
    const searchParams = useSearchParams();
    const lesson = searchParams.get('keyword');
    const [activeTab, setActiveTab] = useState(1);
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
    let ReturnView = () => {
        if (lesson === 'activeview') {
            return (
                <>
                {activeTab === 2 && <Viewdefault/>}
                {activeTab === 1 && <ContentView/>}
                </>
            )
        }
        else {
            return (
                <>
                {activeTab === 1 && <Viewdefault/>}
                {activeTab === 2 && <ContentView/>}
                </>
            )
        }
    }
    let Viewdefault = () => {
        return(
            <motion.div 
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:1, delay:1.5 ,ease:"easeInOut"}}
                className='flexpaneldisplay'
                style={{height:"100dvh"}}
            >
               
                <div className='flexpaneldisplay' style={{height:"100%"}}>
                    <div className='apptxtFrontW'>
                        <h1>Sacred Teachings</h1>
                    </div>
                    <div className='topLayeritembtn' style={{marginLeft:"5%"}}>                         
                        <button className={activeTab === 2 ? 'active' : ''} onClick={() => setActiveTab(2)}
                            style={{width: '100%', height: '100%'}}
                        >
                            <h1 className='apptextB'>Begin</h1>
                        </button>
                    </div>
                </div> 
              
            </motion.div>
        );
    }
    let ContentListView = () => {
        return(
            <>
                <div className='sacreditemTab itemBGbrown'>
                    <Link 
                        href={{
                            pathname: '/pages/LessonDT',
                            query: {
                                keyword: 'sacred1'
                            }
                        }}
                        className="apptxtFront flexpaneldisplay" 
                        style={{textDecoration:'none', height:"80%"}}
                    >
                        <Image
                            src="/Beavericon.png"
                            alt="MenuBKG"
                            width={150}
                            height={150}
                            loading='lazy'
                            quality={90}
                        />
                        <h2>Teachings of the Trees</h2>
                        <h3>Rose Hart</h3>    
                    </Link>
                    <div style={{height:"100%"}}>
                        <div className='panelgrab grabpanelbrown'/>
                    </div>
                </div>
                <div className='sacreditemTab itemBGbrown'>
                    <Link 
                        href={{
                            pathname: '/pages/LessonDT',
                            query: {
                                keyword: 'sacred2'
                            }
                        }}
                        className="apptxtFront flexpaneldisplay" 
                        style={{textDecoration:'none', height:"80%"}}
                    >
                        <Image
                            src="/Beavericon.png"
                            alt="MenuBKG"
                            width={150}
                            height={150}
                            loading='lazy'
                            quality={90}
                        />
                        <h2>Plants & Medicines</h2>
                        <h3>Rose Hart</h3>   
                    </Link>
                    <div style={{height:"100%"}}>
                        <div className='panelgrab grabpanelbrown'/>
                    </div>
                </div>
                <div className='sacreditemTab itemBGbrown'>
                    <Link 
                        href={{
                            pathname: '/pages/LessonDT',
                            query: {
                                keyword: 'sacred3'
                            }
                        }}
                        className="apptxtFront flexpaneldisplay" 
                        style={{textDecoration:'none', height:"80%"}}
                    >
                        <Image
                            src="/Beavericon.png"
                            alt="MenuBKG"
                            width={150}
                            height={150}
                            loading='lazy'
                            quality={90}
                        />
                        <h2>The<br/> Elements</h2>
                        <h3>Agnes Carlson</h3>  
                    </Link>
                    <div style={{height:"100%"}}>
                        <div className='panelgrab grabpanelbrown'/>
                    </div>
                </div>
                <div className='sacreditemTab itemBGbrown'>
                    <Link 
                        href={{
                            pathname: '/pages/LessonDT',
                            query: {
                                keyword: 'sacred4'
                            }
                        }}
                        className="apptxtFront flexpaneldisplay" 
                        style={{textDecoration:'none', height:"80%"}}
                    >
                        <Image
                            src="/Beavericon.png"
                            alt="MenuBKG"
                            width={150}
                            height={150}
                            loading='lazy'
                            quality={90}
                        />
                        <h2>Fasting<br/>Ceremony</h2>
                        <h3>Marie Ballentyne</h3> 
                    </Link>
                    <div style={{height:"100%"}}>
                        <div className='panelgrab grabpanelbrown'/>
                    </div>
                </div>
                <div className='sacreditemTab itemBGbrown'>
                    <Link 
                        href={{
                            pathname: '/pages/LessonDT',
                            query: {
                                keyword: 'sacred5'
                            }
                        }}
                        className="apptxtFront flexpaneldisplay" 
                        style={{textDecoration:'none', height:"80%"}}
                    >
                        <Image
                            src="/Beavericon.png"
                            alt="MenuBKG"
                            width={150}
                            height={150}
                            loading='lazy'
                            quality={90}
                        />
                        <h2>The Northern Lights</h2>
                        <h3>Agnes Carlson</h3>
                    </Link>
                    <div style={{height:"100%"}}>
                        <div className='panelgrab grabpanelbrown'/>
                    </div>
                </div>
            </>
        );
    }
    let ContentView = () => {
        return(
            <motion.div 
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:1, ease:"easeInOut"}}
                className='tabcontent mgntop30'
                style={{height:"100dvh"}}
            >
                <div style={{height:"fit-content"}}>
                    <Teachcarousel>
                        <ContentListView/>
                    </Teachcarousel>
                </div>
            </motion.div>

        );
    }
    let PageView = () => {
        return(
            <motion.div
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:1, ease:"easeInOut"}}
            >
                <div className="bklink">
                    <Link 
                        href={{
                            pathname: '/pages/TeachHomeT',
                            query: {
                                keyword: 'activeview'
                            }
                        }}
                    >
                        <div className="bkbtn">
                            <p>Back</p>   
                        </div>
                    </Link>
                </div>
                <div className="bkgcontainer">
                    <video autoPlay loop className='videobkg'>
                        <source src="/webm/CaribouTablet.webm" type="video/webm; codecs=vp9"/>
                    </video>
                </div>
                <ReturnView/>
            </motion.div>
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
    return(
        <FullPageView/>
    );
}
export default TeachingscontentT;
