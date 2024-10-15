'use client';
import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {motion} from 'framer-motion';
import ComehomeBKG from '../../../public/TradTeachingsBKG.jpg';

const GatheringvidsD = () => {
    const [activeTab, setActiveTab] = useState(1);
    const searchParams = useSearchParams();
    const lesson = searchParams.get('keyword');
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
                <div className='row1fr2fr'>
                    <div className='flexpaneldisplay'>
                        <Image 
                            src="/Mile20btnBKG.jpg" 
                            width={350} 
                            height={350}
                            style={{objectFit: "contain"}}
                            loading='lazy'
                            quality={90}
                            alt="SacredIMGHere1"
                        />
                    </div>
                    <div className='flexpaneldisplay' style={{height:"80dvh"}}>
                        <div className='topLayeritemTextD'>
                            <div className='apptxtTitlesW'>
                                <h2>
                                    Braiding Our Medicine Journey
                                </h2>
                                <h2>
                                    Re-Connecting To The Land<br/>
                                    and Ancestral Knowledge of the Ininew and Dene 
                                </h2>
                            </div> 
                        </div>
                    </div>
                </div>
                <div className='flexpaneldisplay' style={{height:"20dvh"}}>
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
                <div className='row1fr1frgap' style={{width:'80vw'}}>
                    <div className="listitemapp">
                        <Link 
                            href={{
                                pathname: '/pages/GatheringGallery',
                                query: {
                                    keyword: 'gather1'
                                }
                            }}
                            className="apptext" 
                            style={{textDecoration:'none',width:"100%", height:"100%"}}
                        >
                            <h1>The Good Life</h1>
                        </Link>
                    </div>
                    <div className="listitemapp">
                        <Link 
                            href={{
                                pathname: '/pages/GatheringGallery',
                                query: {
                                    keyword: 'gather2'
                                }
                            }}
                            className="apptext" 
                            style={{textDecoration:'none',width:"100%", height:"100%"}}
                        >
                            <h1>Finding Our way</h1>
                        </Link>
                    </div>
                    <div className="listitemapp">
                        <Link 
                            href={{
                                pathname: '/pages/GatheringGallery',
                                query: {keyword: 'gather4'}
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
                                query: {keyword: 'gather5'}
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
                <Link 
                    href={{
                        pathname: '/pages/TeachHomeD',
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
                <Image
                    src={ComehomeBKG}
                    alt="ComingHomeBKG"
                    fill
                    loading='eager'
                    quality={90}
                />
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
export default GatheringvidsD;
