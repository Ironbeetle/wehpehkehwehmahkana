'use client';
import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {motion} from 'framer-motion';
import TeachHomeDBKG from "../../../public/TradTeachingsBKG.jpg";
const GatheringvidsM = () => {
    const [activeTab, setActiveTab] = useState(1);
    const searchParams = useSearchParams();
    let lesson = searchParams.get('keyword');
    let lesson2 = searchParams.get('keyword2');
    console.log(lesson);
    let ReturnID = () => {
        if (lesson === 'wsreturn' || lesson2 === 'wsplayr') {
            return <Link 
                        href={{
                            pathname: '/pages/TeachHomeM',
                            query: {
                                keyword: 'activeview',
                                keyword2: 'workshopr'
                            }
                        }}
                    >
                        <div className="bkbtn">
                            <p>Back</p>   
                        </div>
                    </Link>
        }
        else {
            return <Link 
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
        }
    }
    let ReturnView = () => {
        if (lesson === 'activeview') {
            return (
                <>
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
            <>
                <div className='flexpaneldisplay' style={{height:"100dvh"}}>
                    <div>
                        <Image 
                            src="/Mile20btnBKG.jpg" 
                            width={200} 
                            height={200}
                            style={{objectFit: "contain"}}
                            loading='lazy'
                            quality={90}
                            alt="SacredIMGHere1"
                        />
                    </div>
                    <div className='topLayeritemTextD'>
                        <div className='apptxtFrontW' style={{padding:"2%"}}>
                            <h2>
                                Braiding Our Medicine Journey
                            </h2>
                            <h2>
                                Re-Connecting To The Land<br/>
                                and Ancestral Knowledge of the Ininew and Dene 
                            </h2>
                        </div>
                    </div>
                    <div className='topLayeritembtn'> 
                        <button className={activeTab === 2 ? 'active' : ''} onClick={() => setActiveTab(2)}
                            style={{width: '100%', height: '100%'}}
                        >
                            <div className="apptextB">
                                <h3>Begin</h3>
                            </div>
                        </button>
                    </div>
                </div>
                
            </>
        );
    }
    let ContentView = () => {
        return(
            <div className='flexpaneldisplay tabcontent2' style={{width:"100vw", height:'100dvh'}}>
                <div className='flexpaneldisplay' style={{width:'80vw', height:"100%"}}>
                    <div className="listitemapp">
                            <Link 
                                href={{
                                    pathname: '/pages/GatheringGallery',
                                    query: {
                                        keyword: 'gather1',
                                        keyword2: 'wsplay'
                                    }
                                }}
                                className="apptext" 
                                style={{textDecoration:'none',width:"100%", height:"100%"}}
                            >
                                <h1>The Importance Of The Teachings</h1>
                            </Link>
                    </div>
                    <div className="listitemapp">
                            <Link 
                                href={{
                                    pathname: '/pages/GatheringGallery',
                                    query: {
                                        keyword: 'gather2',
                                        keyword2: 'wsplay'
                                    }
                                }}
                                className="apptext" 
                                style={{textDecoration:'none',width:"100%", height:"100%"}}
                            >
                                <h1>Finding Our Way</h1>
                            </Link>
                    </div>
                    <div className="listitemapp">
                            <Link 
                                href={{
                                    pathname: '/pages/GatheringGallery',
                                    query: {
                                        keyword: 'gather4',
                                        keyword2: 'wsplay'
                                    }
                                }}
                                className="apptext" 
                                style={{textDecoration:'none',width:"100%", height:"100%"}}
                            >
                                <h1>Dene Perspective</h1>
                            </Link>
                    </div>
                    <div className="listitemapp">
                        <Link 
                            href={{
                                pathname: '/pages/GatheringGallery',
                                query: {
                                    keyword: 'gather5', 
                                    keyword2: 'wsplay'
                                }
                            }}
                            className="apptext" 
                            style={{textDecoration:'none',width:"100%", height:"100%"}}
                        >
                            <h1>Turning To The Language</h1>
                        </Link>
                    </div>      
                </div>
            </div>
        );
    }
    return (
        <>
            <div className="bklink">
                <ReturnID/>
            </div>
            <div className="bkgcontainer">
                <video autoPlay className='videobkg'>
                    <source src="/webm/TeachBKGMobile.webm" type="video/webm; codecs=vp9"/>
                </video>
            </div>
            <motion.div 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1.5, delay: 0.5, ease: 'easeInOut'}}
            >
                <ReturnView/>
            </motion.div>
        </>
    )
};
export default GatheringvidsM;
