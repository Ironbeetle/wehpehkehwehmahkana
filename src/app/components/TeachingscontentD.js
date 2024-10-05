'use client';
import React, {useState, useEffect} from 'react';
import Image from "next/image";
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {motion} from "framer-motion";
import { MdCopyright } from "react-icons/md";
const TeachingscontentD = () => {
    const searchParams = useSearchParams();
    const lesson = searchParams.get('keyword');
    const [activeTab, setActiveTab] = useState(1);
    let handleButtonClick = (videoUrl) => {
        const iframe = document.getElementById('iframeId');
        iframe.src = videoUrl;
    };
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
            <div className='row1fr1fr' style={{height:"100dvh"}}>
                 <div></div>
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
            </div>
        );
    }
    let ContentListView = () => {
        return(
            <>
                <div className='listitem'>
                    <div className='apptext'>
                        <h2>Sacred Teachings</h2>
                    </div>
                </div>
                <div className='listitem'>
                    <div className='row1fr2fr'>
                        <Image 
                            src="/thumbnails/Rose.jpg" 
                            alt="medicineIMGHere" 
                            width={150} 
                            height={150}
                        />
                        <button onClick={() => handleButtonClick('https://www.youtube.com/embed/FG1MZ0a5RIs?si=9tnXN-kdS6fTiI3W')}
                            style={{width:'100%', height:'100%'}} id='video1'>
                            <div className='apptext'>
                                <h3>Teachings of the Trees</h3>
                                <p>Rose Hart</p>
                            </div>
                        </button>
                    </div>
                </div>
                <div className='listitem'>
                    <div className='row1fr2fr'>
                        <div>
                            <Image 
                                src="/thumbnails/Rose.jpg" 
                                alt="medicineIMGHere" 
                                width={150} 
                                height={150}
                            />
                        </div>
                        <div className='listhover'>
                            <button onClick={() => handleButtonClick('https://www.youtube.com/embed/j026XLn0ty0?si=FxByEk-IGG7n4EbF')}
                                    style={{width:'100%', height:'100%'}} id='video2'>
                                <div className='apptext'>
                                    <h3>Plants & Medicines</h3>
                                    <p>Rose Hart</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='listitem'>
                    <div className='row1fr2fr'>
                        <Image 
                            src="/thumbnails/Agnes.jpg" 
                            alt="medicineIMGHere" 
                            width={150} 
                            height={150}
                        />
                        <button onClick={() => handleButtonClick('https://www.youtube.com/embed/Pqgw4SoI88Y?si=KL5ueIvL9mMXCEPA')}
                            style={{width:'100%', height:'100%'}} id='video1'>
                            <div className='apptext'>
                                <h3>The Elements</h3>
                                <p>Agnes Carlson</p>
                            </div>
                        </button>
                    </div>
                </div>
                <div className='listitem'>
                    <div className='row1fr2fr'>
                        <div>
                            <Image 
                                src="/thumbnails/Marie.jpg" 
                                alt="medicineIMGHere" 
                                width={150} 
                                height={150}
                            />
                        </div>
                        <div className='listhover'>
                            <button onClick={() => handleButtonClick('https://www.youtube.com/embed/TLU7lwF4-mA?si=4XS8RHGU72h-XiSX')}
                                    style={{width:'100%', height:'100%'}} id='video2'>
                                <div className='apptext'>
                                    <h3>Fasting</h3>
                                    <p>Marie Ballentyne</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='listitem'>
                    <div className='row1fr2fr'>
                        <Image 
                            src="/thumbnails/Agnes.jpg" 
                            alt="medicineIMGHere" 
                            width={150} 
                            height={150}
                        />
                        <button onClick={() => handleButtonClick('https://www.youtube.com/embed/kZhF-ad3-2M?si=KKXGrA3bReiXAw5_')}
                            style={{width:'100%', height:'100%'}} id='video1'>
                            <div className='apptext'>
                                <h3>The Northern Lights</h3>
                                <p>Agnes Carlson</p>
                            </div>
                        </button>
                    </div>
                </div>
            </>
        )
    }
    let ContentView = () => {
        return(
            <>
                <motion.div 
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:1.5, ease:"easeInOut"}}
                    style={{height:"100dvh"}}
                    className="bkgcontainer2"
                >
                    <video autoPlay loop className='videobkg'>
                        <source src="/webm/LessonBKG.webm" type="video/webm; codecs=vp9"/>
                    </video>
                </motion.div>
                <motion.div 
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:1.5, ease:"easeInOut"}}
                    style={{height:"100dvh"}}
                >
                    <div className='row2fr1fr'>
                        <div className='tabcontent55t6'>
                            <div className='flexpaneldisplay' style={{height:"100%"}}>
                                <iframe 
                                    id="iframeId"
                                    src="" 
                                    width="640" 
                                    height="360"
                                    style={{border:'none'}} 
                                />
                                <div className='flexpaneldisplayR copyright'>
                                    <p>Copyright&nbsp;</p> <MdCopyright/><p>&nbsp;2023&nbsp;</p><p>All Rights Reserved</p>
                                </div>
                            </div>
                        </div>
                        <div className='tabcontent appcontainer'>
                            <div className='playlist'>
                                <ContentListView/>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </>
        );
    }
    return(
        <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1, ease:"easeInOut"}}
        >
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
                <video autoPlay className='videobkg'>
                    <source src="/webm/Caribou.webm" type="video/webm; codecs=vp9"/>
                </video>
            </div>
            <ReturnView/>
        </motion.div>
    );
}
export default TeachingscontentD;
