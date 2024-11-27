'use client';
import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {useSearchParams} from 'next/navigation';
import {motion} from "framer-motion";
import Teachcarousel from '../components/Teachcarousel';
const SelfCarecontentM = () => {
    const searchParams = useSearchParams();
    let lesson = searchParams.get('keyword');
    let [activeTab, setActiveTab] = useState(1);
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
        }else {
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
                style={{height:"80dvh"}}
            >
                <motion.div 
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:1, delay:1 ,ease:"easeInOut"}}
                    className='flexpaneldisplay tabcontent'>
                    <div className='apptxtFront' style={{height:"fit-content"}}>
                        <h2>
                        Creator<br/> Thank you for the WISDOM<br/> to see the TRUTH<br/> and the COURAGE to change,<br/>
                        so that I can have LOVE<br/> and HUMILITY in my heart,<br/> 
                        from this I live life with HONESTY<br/>
                        and RESPECT.
                        </h2>
                    </div>
                </motion.div>
                <div className='flexpaneldisplay' style={{height:"100%"}}>
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
                <div className='sacreditemTab itemBGgreen'>
                    <Link 
                        href={{
                            pathname: '/pages/LessonDT',
                            query: {
                                keyword: 'natural1'
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
                        <h2>The<br/> Natural Laws</h2>
                        <h3>Marie Ballentyne</h3>
                    </Link>
                    <div style={{height:"100%"}}>
                        <div className='panelgrab grabpanelgreen'/>
                    </div>
                </div>
                <div className='sacreditemTab itemBGgreen'>
                    <Link 
                        href={{
                            pathname: '/pages/LessonDT',
                            query: {
                                keyword: 'natural2'
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
                        <h3>Teachings<br/> of the Bear</h3>
                        <h3>Marie Ballentyne</h3> 
                    </Link>
                    <div style={{height:"100%"}}>
                        <div className='panelgrab grabpanelgreen'/>
                    </div>
                </div>
                <div className='sacreditemTab itemBGgreen'>
                    <Link 
                        href={{
                            pathname: '/pages/LessonDT',
                            query: {
                                keyword: 'natural3'
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
                        <h3>Teachings<br/> of the Beaver</h3>
                        <h3>Marie Ballentyne</h3>
                    </Link>
                    <div style={{height:"100%"}}>
                        <div className='panelgrab grabpanelgreen'/>
                    </div>
                </div>
                <div className='sacreditemTab itemBGgreen'>
                    <Link 
                        href={{
                            pathname: '/pages/LessonDT',
                            query: {
                                keyword: 'natural4'
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
                        <h3>Teachings<br/> of the Wolf</h3>
                        <h3>Marie Ballentyne</h3>
                    </Link>
                    <div style={{height:"100%"}}>
                        <div className='panelgrab grabpanelgreen'/>
                    </div>
                </div>
                <div className='sacreditemTab itemBGgreen'>
                    <Link 
                        href={{
                            pathname: '/pages/LessonDT',
                            query: {
                                keyword: 'natural5'
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
                        <h3>Teachings<br/> of the Caribou</h3>
                        <h3>Agnes Carlson</h3>
                    </Link>
                    <div style={{height:"100%"}}>
                        <div className='panelgrab grabpanelgreen'/>
                    </div>
                </div>
                <div className='sacreditemTab itemBGgreen'>
                    <Link 
                        href={{
                            pathname: '/pages/LessonDT',
                            query: {
                                keyword: 'natural6'
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
                        <h3>Love For<br/> Yourself & Others</h3>
                        <h3>Rita McIvor</h3>
                    </Link>
                    <div style={{height:"100%"}}>
                        <div className='panelgrab grabpanelgreen'/>
                    </div>
                </div>
                <div className='sacreditemTab itemBGgreen'>
                    <Link 
                        href={{
                            pathname: '/pages/LessonDT',
                            query: {
                                keyword: 'natural7'
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
                        <h2>Respecting<br/> Others</h2>
                        <h3>Rita McIvor</h3>
                    </Link>
                    <div style={{height:"100%"}}>
                        <div className='panelgrab grabpanelgreen'/>
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
                        <source src="/webm/TurtleBKGTablet.webm" type="video/webm; codecs=vp9"/>
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
        if (width > 900) {
            return <PageFlipView/>
        }else {
            return <PageView/>
        }
    }
    return <FullPageView/>
}
export default SelfCarecontentM;
