'use client';
import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {useSearchParams} from 'next/navigation';
import {motion} from "framer-motion";
import { MdCopyright } from "react-icons/md";
const SelfCarecontentD = () => {
    const searchParams = useSearchParams();
    let lesson = searchParams.get('keyword');
    let [activeTab, setActiveTab] = useState(1);
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
    let Viewdefault = () => {
        return(
            <motion.div 
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:1, delay:1.5 ,ease:"easeInOut"}}
                className='row1fr1fr' style={{height:"100dvh"}}>
                <div className='flexpaneldisplay' style={{height:"75%"}}>
                    <div className='topLayeritembtn' style={{marginLeft:"5%"}}>                         
                        <button className={activeTab === 2 ? 'active' : ''} onClick={() => setActiveTab(2)}
                            style={{width: '100%', height: '100%'}}
                        >
                            <h1 className='apptextB'>Begin</h1>
                        </button>
                    </div>
                </div> 
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
            </motion.div>
        );
    }
    let ContentListView = () => {
        return(
            <>
                <div className='listitem'>
                    <div className='apptext'>
                        <h2>Natural Laws</h2>
                    </div>
                </div>
                <div className='listitem'>
                    <div className='row1fr2fr'>
                        <Image 
                            src="/thumbnails/Marie.jpg" 
                            alt="medicineIMGHere" 
                            width={150} 
                            height={150}
                        />
                        <button onClick={() => handleButtonClick('https://www.youtube.com/embed/9elzdRQ4J_g?si=QBYGtXMd7hIPJ7lh')}
                            style={{width:'100%', height:'100%'}} id='video1'>
                            <div className='apptext'>
                                <h3>The Natural Laws</h3>
                                <p>Marie Ballentyne</p>
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
                            <button onClick={() => handleButtonClick('https://www.youtube.com/embed/AawBxjEtTZo?si=v72mqF2uZ677Zf4P')}
                                    style={{width:'100%', height:'100%'}} id='video2'>
                                <div className='apptext'>
                                    <h3>Teachings of the Bear</h3>
                                    <p>Marie Ballentyne</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='listitem'>
                    <div className='row1fr2fr'>
                        <Image 
                            src="/thumbnails/Marie.jpg" 
                            alt="medicineIMGHere" 
                            width={150} 
                            height={150}
                        />
                        <button onClick={() => handleButtonClick('https://www.youtube.com/embed/TjtypnD-1Yw?si=zoGbqEloGLV8GadL')}
                            style={{width:'100%', height:'100%'}} id='video1'>
                            <div className='apptext'>
                                <h3>Teachings of the Beaver</h3>
                                <p>Marie Ballentyne</p>
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
                            <button onClick={() => handleButtonClick('https://www.youtube.com/embed/SPeRpIkZpWI?si=KHEb80T8SAZq-PKS')}
                                    style={{width:'100%', height:'100%'}} id='video2'>
                                <div className='apptext'>
                                    <h3>Teachings of the Wolf</h3>
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
                        <button onClick={() => handleButtonClick('https://www.youtube.com/embed/nboyKrOJbPA?si=yUfyDTpiPbqz-JHr')}
                            style={{width:'100%', height:'100%'}} id='video1'>
                            <div className='apptext'>
                                <h3>Teachings of the Caribou</h3>
                                <p>Agnes Carlson</p>
                            </div>
                        </button>
                    </div>
                </div>
                <div className='listitem'>
                    <div className='row1fr2fr'>
                        <Image 
                            src="/thumbnails/Rita.jpg" 
                            alt="medicineIMGHere" 
                            width={150} 
                            height={150}
                        />
                        <button onClick={() => handleButtonClick('https://www.youtube.com/embed/kGr6jtnMB7U?si=NOo0bOhzjb8d2q_2')}
                            style={{width:'100%', height:'100%'}} id='video1'>
                            <div className='apptext'>
                                <h3>Love For Yourself & Others</h3>
                                <p>Rita McIvor</p>
                            </div>
                        </button>
                    </div>
                </div>
                <div className='listitem'>
                    <div className='row1fr2fr'>
                        <div>
                            <Image 
                                src="/thumbnails/Rita.jpg" 
                                alt="medicineIMGHere" 
                                width={150} 
                                height={150}
                            />
                        </div>
                        <div className='listhover'>
                            <button onClick={() => handleButtonClick('https://www.youtube.com/embed/KtQ3clIW1EI?si=agiKITDDfINYq_gA')}
                                    style={{width:'100%', height:'100%'}} id='video2'>
                                <div className='apptext'>
                                <h3>Respecting Others</h3>
                                <p>Rita McIvor</p>
                                </div>
                            </button>
                        </div>
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
                    style={{height:"100dvh",width:"95%"}}
                    className="bkgcontainer2"
                >
                    <video autoPlay loop className='videobkg2'>
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
                        <div>
                            <div className='flexpaneldisplay' style={{height:"100%", width:"100%"}}>
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
                        <div className='tabcontent2 appcontainer'>
                            <div className='playlist'>
                                <ContentListView/>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </>
        );
    }
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
                    <source src="/webm/TurtleVidBKG.webm" type="video/webm; codecs=vp9"/>
                </video>
            </div>
            <ReturnView/>
        </motion.div>
    );
}
export default SelfCarecontentD;
