'use client';
import React, {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {useSearchParams} from 'next/navigation';
import {motion} from "framer-motion";
import Teachcarousel from '../components/Teachcarousel';
const SelfCarecontentM = () => {
    const searchParams = useSearchParams();
    let lesson = searchParams.get('keyword');
    let [activeTab, setActiveTab] = useState(1);
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
                            <h1 className='apptextwB'>Begin</h1>
                        </button>
                    </div>
                </div> 
              
            </motion.div>
        );
    }
    let ContentListView = () => {
        return(
            <>
                <div className='sacreditemMob itemBGgreen'>
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
                <div className='sacreditemMob itemBGgreen'>
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
                <div className='sacreditemMob itemBGgreen'>
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
                <div className='sacreditemMob itemBGgreen'>
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
                <div className='sacreditemMob itemBGgreen'>
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
                <div className='sacreditemMob itemBGgreen'>
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
                <div className='sacreditemMob itemBGgreen'>
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
                className='tabcontent2'
                style={{height:"100dvh"}}
            >
                <div className='mgntop30' style={{height:"fit-content"}}>
                    <Teachcarousel>
                        <ContentListView/>
                    </Teachcarousel>
                </div>
            </motion.div>
        );
    }
    return(
        <>
            <div className="bklink">
                <Link 
                    href={{
                        pathname: '/pages/TeachHomeM',
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
                    <source src="/webm/TurtleBKGMobile.webm" type="video/webm; codecs=vp9"/>
                </video>
            </div>
            <div className="appcontainer">
                <ReturnView/>
            </div>
        </>
    );
}
export default SelfCarecontentM;
