'use client';
import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import {motion} from 'framer-motion';
import { MdCopyright } from "react-icons/md";
import Teachcarousel from '../components/Teachcarousel';
const Gatheringsgallery = () => {
    let searchParams = useSearchParams();
    let lesson = searchParams.get('keyword');
    let lesson2 = searchParams.get('keyword2');
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
    let BKGSelector = () => {
        if (width < 479) {
            return "/webm/TeachBKGMobile.webm"
        }else if (width > 480 && width < 1023){
            return "/webm/TeachBKGTablet.webm"
        }else {
            return "/TradTeachBKG.webm"
        }
    }
    let Listtype = () => {
        if (width < 479) {
            return 'listitemT'
        }else if (width > 480 && width < 1023){
            return 'listitemT'
        }else {
            return 'listitem'
        }
    }
    let Listdirection = () => {
        if (width < 479) {
            return 'flexpaneldisplay'
        }else if (width > 480 && width < 1023){
            return 'flexpaneldisplay'
        }else {
            return 'row1fr2fr'
        }
    }
    let Section1 = () => {
        return(
            <>
                <div className={Listtype()}>
                    <div className='apptext'>
                        <h2>The Good Life Through the Teachings</h2>
                    </div>
                </div>
                <div className={Listtype()}>
                    <div className={Listdirection()}>
                        <Image 
                            src="/thumbnails/Rita.jpg" 
                            alt="medicineIMGHere" 
                            width={150} 
                            height={150}
                        />
                        <button onClick={() => handleButtonClick('https://www.youtube.com/embed/QRT8oazvZQ8?si=2IYE42PH0jKrbo-W')}
                            style={{width:'100%', height:'100%'}} id='video1'>
                            <div className='apptext'>
                                <h3>Lessons for Men & Women</h3>
                                <p>Rita McIvor</p>
                            </div>
                        </button>
                    </div>
                </div>
                <div className={Listtype()}>
                    <div className={Listdirection()}>
                        <div>
                            <Image 
                                src="/thumbnails/Rita.jpg" 
                                alt="medicineIMGHere" 
                                width={150} 
                                height={150}
                            />
                        </div>
                        <div className='listhover'>
                            <button onClick={() => handleButtonClick('https://www.youtube.com/embed/2gc8sVp0Vew?si=4uKrTwyfK6W-IhY6')}
                                    style={{width:'100%', height:'100%'}} id='video2'>
                                <div className='apptext'>
                                    <h3>Our Children</h3>
                                    <p>Rita McIvor</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={Listtype()}>
                    <div className={Listdirection()}>
                        <div>
                            <Image 
                                src="/thumbnails/Rose.jpg" 
                                alt="medicineIMGHere" 
                                width={150} 
                                height={150}
                            />
                        </div>
                        <div className='listhover'>
                            <button onClick={() => handleButtonClick('https://www.youtube.com/embed/HTYZLyzoHSc?si=t_80PkXkYdUW19gL')}
                                    style={{width:'100%', height:'100%'}} id='video2'>
                                <div className='apptext'>
                                    <h3>Learning the Teachings</h3>
                                    <p>Rose Hart</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={Listtype()}>
                    <div className={Listdirection()}>
                        <div>
                            <Image 
                                src="/thumbnails/Rita.jpg" 
                                alt="medicineIMGHere" 
                                width={150} 
                                height={150}
                            />
                        </div>
                        <div className='listhover'>
                            <button onClick={() => handleButtonClick('https://www.youtube.com/embed/gnsTHhXtR1E?si=0uzSlbHzXyMVV_2C')}
                                    style={{width:'100%', height:'100%'}} id='video2'>
                                <div className='apptext'>
                                    <h3>Importance of the Teachings</h3>
                                    <p>Rita McIvor</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </>

        )
    }
    let Section2 = () => {
        return(
            <>
                <div className={Listtype()}>
                    <div className='apptext'>
                        <h2>Finding Our Way</h2>
                    </div>
                </div>
                <div className={Listtype()}>
                    <div className={Listdirection()}>
                        <Image 
                            src="/thumbnails/MervinMckay.jpg" 
                            alt="medicineIMGHere" 
                            width={150} 
                            height={150}
                        />
                        <button onClick={() => handleButtonClick('https://www.youtube.com/embed/fwuWyMEufHw?si=0X2UOq0wOerWolib')}
                            style={{width:'100%', height:'100%'}} id='video1'>
                            <div className='apptext'>
                                <h3>Mervin McKay</h3>
                                <p>2022</p>
                            </div>
                        </button>
                    </div>
                </div>
                <div className={Listtype()}>
                    <div className={Listdirection()}>
                        <Image 
                            src="/thumbnails/ChristinaKitch.jpg" 
                            alt="medicineIMGHere" 
                            width={150} 
                            height={150}
                        />
                        <button onClick={() => handleButtonClick('https://www.youtube.com/embed/ECsF9Y-hAVY?si=7rTLu-anKAt3x8q0')}
                            style={{width:'100%', height:'100%'}} id='video1'>
                            <div className='apptext'>
                                <h3>Christina Kirchekeesik</h3>
                                <p>2022</p>
                            </div>
                        </button>
                    </div>
                </div>
                <div className={Listtype()}>
                    <div className={Listdirection()}>
                        <div>
                            <Image 
                                src="/thumbnails/ChristinaKitch.jpg" 
                                alt="medicineIMGHere" 
                                width={150} 
                                height={150}
                            />
                        </div>
                        <div className='listhover'>
                            <button onClick={() => handleButtonClick('https://www.youtube.com/embed/YyQzga_MgPs?si=k6YdwN61wCuhC_og')}
                                    style={{width:'100%', height:'100%'}} id='video2'>
                                <div className='apptext'>
                                    <h3>Christina Kitchekeesik</h3>
                                    <p>2022</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={Listtype()}>
                    <div className={Listdirection()}>
                        <div>
                            <Image 
                                src="/thumbnails/maureenbrown.jpg" 
                                alt="medicineIMGHere" 
                                width={150} 
                                height={150}
                            />
                        </div>
                        <div className='listhover'>
                            <button onClick={() => handleButtonClick('https://www.youtube.com/embed/AuXLyt2-Hjw?si=kBE9XgSKQxB8FYY-')}
                                    style={{width:'100%', height:'100%'}} id='video2'>
                                <div className='apptext'>
                                    <h3>Maureen Brown</h3>
                                    <p>2022</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={Listtype()}>
                    <div className={Listdirection()}>
                        
                            <Image 
                                src="/thumbnails/sharonmckay.jpg" 
                                alt="medicineIMGHere" 
                                width={150} 
                                height={150}
                            />
                        <button onClick={() => handleButtonClick('https://www.youtube.com/embed/RhnaljJLRNs?si=sAonQIqMNfisc10g')}
                                style={{width:'100%', height:'100%'}} id='video3'>
                            <div className='apptext'>
                                <h3>Sharon McKay</h3>
                                <p>2022</p>
                            </div>
                        </button>
                    </div>
                </div>
            </>
        )
    }
    let Section4 = () => {
        return(
            <>
                <div className={Listtype()}>
                    <div className='apptext'>
                        <h2>Dene People Perspective</h2>
                    </div>
                </div>
                <div className={Listtype()}>
                    <div className={Listdirection()}>
                        <Image 
                            src="/thumbnails/Victor2017.jpg" 
                            alt="medicineIMGHere" 
                            width={150} 
                            height={150}
                        />
                        <button onClick={() => handleButtonClick('https://www.youtube.com/embed/rw4HtO3l7jE?si=-2l0sG-2O94EWT9g')}
                            style={{width:'100%', height:'100%'}} id='video1'>
                            <div className='apptext'>
                                <h3>Victor Tssessaze</h3>
                                <p>2017</p>
                            </div>
                        </button>
                    </div>
                </div>
                <div className={Listtype()}>
                    <div className={Listdirection()}>
                        <div>
                            <Image 
                                src="/thumbnails/Victor2017.jpg" 
                                alt="medicineIMGHere" 
                                width={150} 
                                height={150}
                            />
                        </div>
                        <div className='listhover'>
                            <button onClick={() => handleButtonClick('https://www.youtube.com/embed/3s6hCxi0ujQ?si=C36ABfbns9bO7z4J')}
                                    style={{width:'100%', height:'100%'}} id='video2'>
                                <div className='apptext'>
                                    <h3>Victor Tssessaze</h3>
                                    <p>2017</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={Listtype()}>
                    <div className={Listdirection()}>
                        <div>
                            <Image 
                                src="/thumbnails/Victor2017B.jpg" 
                                alt="medicineIMGHere" 
                                width={150} 
                                height={150}
                            />
                        </div>
                        <div className='listhover'>
                            <button onClick={() => handleButtonClick('https://www.youtube.com/embed/nCZQ_k_fuTw?si=qmYMyvLEKtg1nnmq')}
                                    style={{width:'100%', height:'100%'}} id='video2'>
                                <div className='apptext'>
                                    <h3>Victor Tssessaze</h3>
                                    <p>2017</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={Listtype()}>
                    <div className={Listdirection()}>
                        <div>
                            <Image 
                                src="/thumbnails/Agnes.jpg" 
                                alt="medicineIMGHere" 
                                width={150} 
                                height={150}
                            />
                        </div>
                        <div className='listhover'>
                            <button onClick={() => handleButtonClick('https://www.youtube.com/embed/8puqPDbz5SE?si=DFd8VvOwB8kE1Oqo')}
                                    style={{width:'100%', height:'100%'}} id='video2'>
                                <div className='apptext'>
                                    <h3>Agnes Carlson</h3>
                                    <p>2024</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    let Section5 = () => {
        return(
            <>
                <div className={Listtype()}>
                    <div className='apptext'>
                        <h2>Turning To The Language</h2>
                    </div>
                </div>
                <div className={Listtype()}>
                    <div className={Listdirection()}>
                        <Image 
                            src="/thumbnails/Jeffbrightnose.jpg" 
                            alt="medicineIMGHere" 
                            width={150} 
                            height={150}
                        />
                        <button onClick={() => handleButtonClick('https://www.youtube.com/embed/ZRVcG19fpUU?si=uaY3QeSq3HLJ5nmz')}
                            style={{width:'100%', height:'100%'}} id='video1'>
                            <div className='apptext'>
                                <h3>Jeff Wastesicoot</h3>
                                <p>2022</p>
                            </div>
                        </button>
                    </div>
                </div>
                <div className={Listtype()}>
                    <div className={Listdirection()}>
                        <div>
                            <Image 
                                src="/thumbnails/Jeffbrightnose2017A.jpg" 
                                alt="medicineIMGHere" 
                                width={150} 
                                height={150}
                            />
                        </div>
                        <div className='listhover'>
                            <button onClick={() => handleButtonClick('https://www.youtube.com/embed/7h8s1L8yKmk?si=KJyytxORTNguSt7Z')}
                                    style={{width:'100%', height:'100%'}} id='video2'>
                                <div className='apptext'>
                                <h3>Jeff Wastesicoot</h3>
                                <p>2017</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={Listtype()}>
                    <div className={Listdirection()}>
                        
                            <Image 
                                src="/thumbnails/Jeffbrightnose2017B.jpg" 
                                alt="medicineIMGHere" 
                                width={150} 
                                height={150}
                            />
                        <button onClick={() => handleButtonClick('https://www.youtube.com/embed/jRsY6mj1axo?si=iC_-7LRIQZAiSrBE')}
                                style={{width:'100%', height:'100%'}} id='video3'>
                            <div className='apptext'>
                            <h3>Jeff Wastesicoot</h3>
                            <p>2017</p>
                            </div>
                        </button>
                    </div>
                </div>
                <div className={Listtype()}>
                    <div className={Listdirection()}>
                        
                            <Image 
                                src="/thumbnails/Agnes.jpg" 
                                alt="medicineIMGHere" 
                                width={150} 
                                height={150}
                            />
                        <button onClick={() => handleButtonClick('https://www.youtube.com/embed/lkqpJVab9EA?si=gKZ3le8FJP8dlcF0')}
                                style={{width:'100%', height:'100%'}} id='video3'>
                            <div className='apptext'>
                            <h3>Agnes Carlson</h3>
                            <p>2024</p>
                            </div>
                        </button>
                    </div>
                </div>
            </>
        )
    }
    let ViewSelect = () => {
        switch (lesson) {
            case 'gather1':
                return <Section1/>;
            case 'gather2':
                return <Section2/>;
            case 'gather4':
                return <Section4/>;
            case 'gather5':
                return <Section5/>;
            default:
                return <Section1/>;
        }
    }
    let ContentM = () => {
        return(
            <div className='tabcontent'>
                <div className='splitpaneltop'>
                    <div className='teachpanelMM' style={{height:'100%'}}>
                        <iframe 
                            id="iframeId"
                            src="" 
                            width="100%" 
                            height="100%"
                            style={{border:'none'}} 
                        />
                    </div>
                </div>
                <div className='splitpanelbot'>
                    <Teachcarousel>
                        <ViewSelect/>
                    </Teachcarousel>
                </div>
            </div>
            );
    }
    let ContentT = () => {
        return(
            <div className='tabcontent'>
                <div className='splitpaneltopB'>
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
                <div className='splitpanelbotB'>
                    <Teachcarousel>
                        <ViewSelect/>
                    </Teachcarousel>
                </div>
            </div>
        );
    }
    let ContentD = () => {
        return(
        <>
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
                <div className='appcontainer tabcontent'>
                    <div className='playlist'>
                        <ViewSelect/>
                    </div>
                </div>
            </div>
        </>
        );
    }
    let ContentView = () => {
        if (width < 480) {
            return <ContentM/>
        }else if (width > 481 && width < 1023){
            return <ContentT/>
        }else {
            return <ContentD/>
        }
    }
    let BackSelect = () => {
        if (width < 480) {
            return '/pages/MedicineJourneyM'
        }else if (width > 481 && width < 1023){
            return '/pages/MedicineJourneyT'
        }else {
            return '/pages/MedicineJourneyD'
        }
    }
    return (
        <>
            <div className="bklink">
                <Link 
                    href={{
                        pathname: BackSelect(),
                        query: {
                            keyword: 'activeview',
                            keyword2: 'wsplayr'
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
                    <source src="/webm/GalleryversionD.webm" type="video/webm; codecs=vp9"/>
                </video>
            </div>
            <motion.div 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1.5, delay: 0.5, ease: 'easeInOut'}}
                className='vidgallerycontainer'
            >
                <ContentView/>
            </motion.div>
        </>
    )
};
export default Gatheringsgallery;
