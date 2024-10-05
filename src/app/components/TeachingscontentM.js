'use client';
import React, {useState} from 'react';
import Image from "next/image";
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {motion} from "framer-motion";
import Teachcarousel from '../components/Teachcarousel';
const TeachingscontentM = () => {
    const searchParams = useSearchParams();
    const lesson = searchParams.get('keyword');
    const [activeTab, setActiveTab] = useState(1);
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
            <div className='flexpaneldisplay' style={{height:"100dvh"}}>
                <div className='flexpaneldisplay' style={{height:"100%"}}>
                    <div className='apptxtFrontW'>
                        <h1>Sacred Teachings</h1>
                    </div>
                    <div className='objectbottom flexpaneldisplay'>
                    <div className='topLayeritembtn'>                         
                        <button className={activeTab === 2 ? 'active' : ''} onClick={() => setActiveTab(2)}
                            style={{width: '100%', height: '100%'}}
                        >
                            <h1 className='apptextB'>Begin</h1>
                        </button>
                    </div>
                    </div>
                </div> 
            </div>
        );
    }
    let ContentListView = () => {
        return(
            <>
                <div className='sacreditemMob itemBGbrown'>
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
                <div className='sacreditemMob itemBGbrown'>
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
                <div className='sacreditemMob itemBGbrown'>
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
                <div className='sacreditemMob itemBGbrown'>
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
                <div className='sacreditemMob itemBGbrown'>
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
                    <source src="/webm/CaribouMobile.webm" type="video/webm; codecs=vp9"/>
                </video>
            </div>
            <ReturnView/>
        </>
    );
}
export default TeachingscontentM;
