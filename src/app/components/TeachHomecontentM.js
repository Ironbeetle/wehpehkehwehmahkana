'use client';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import HamburgerMenu from '../components/HamburgerMenu';
export default function TeachHomecontentM(){
    const [activeTab, setActiveTab] = useState(1);
    const searchParams = useSearchParams();
    const lesson = searchParams.get('keyword');
    const lesson2 = searchParams.get('keyword2');
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
    let BackLink = () => {
        if (lesson === 'workshop' || lesson2 === 'workshopr') {
            return  <div className="bklink">
                        <Link href='/KTC_WorkShops'>
                            <div className="bkbtn">
                                <p>Back</p>
                            </div>
                        </Link>
                    </div>
        }else {
            return  <div className="hamlink">
                        <HamburgerMenu/>
                    </div> 
        }
    }
    let KeywordSelect = () => {
        if (lesson === 'workshop') 
            {return 'wsreturn';}
        else 
            {return 'webview';}
    }
    let ReturnView = () => {
        if (lesson === 'activeview') {
            return (
                <>
                {activeTab === 3 && <PrayerView/>}
                {activeTab === 1 && <Ininew/>}
                </>
            )
        }
        else {
            return (
                <>
                {activeTab === 1 && <PrayerView/>}
                {activeTab === 3 && <Ininew/>}
                </>
            )
        }
    }
    const PrayerView = () => {
        return (
            <>
                <div className='flexpaneldisplay' style={{height:"90%"}}>
                    <div className='topLayeritemText'>
                        <div className='apptxtTitlesW'>
                            <h3>
                                Thank You Creator<br/>
                                for blessing me with another day to continue,<br/>
                                Walking, Learning and Living The Good Life,<br/>
                            </h3>
                            <h3>
                                Thank you for giving me insight on how <br/>I treat myself, and to see good in others
                            </h3>
                            <h3>
                                In your blessed name Amen
                            </h3>
                        </div> 
                    </div>
                </div>
            </>
        );
    }
    let PrayConvert = () => {
        if (lesson === 'activeview') {
            return (
                <>
                    <button className={activeTab === 3 ? 'active' : ''} onClick={() => setActiveTab(3)}
                        style={{width: '100%', height: '100%', boxSizing: 'border-box'}}
                    >
                        <div className="apptextB">
                            <h3>Prayer</h3>
                        </div>
                    </button>
                </>
            )
        }
        else {
            return (
                <>
                    <button className={activeTab === 1 ? 'active' : ''} onClick={() => setActiveTab(1)}
                        style={{width: '100%', height: '100%', boxSizing: 'border-box'}}
                    >
                        <div className="apptextB">
                            <h3>Prayer</h3>
                        </div>
                    </button>
                </>
            )
        }
    }
    const DocView = () => {
        return (
            <>
                <div className="flexpaneldisplay" style={{height:"100%"}}>
                    <div className='topLayeritemVidM flexpaneldisplay3'>
                        <iframe src="https://player.vimeo.com/video/811032864?h=bb18723052"
                            width="720" 
                            height="405"
                            style={{border:'none'}} 
                        />
                    </div>
                </div>
            </>
        );
    }
    const Ininew = () => {
        return (
            <div style={{height:"100%"}} className='flexpaneldisplay'>
                <div className='circleteachM'>
                    <div className="quarterul">
                        <div className='qulpos'>
                            <Link 
                                href='/pages/TeachingsM'
                                className="apptextB" 
                                style={{textDecoration:'none',width:"100%", height:"100%"}}
                            >
                                <Image
                                    src="/Thunderbirdicon.png"
                                    alt="MenuBKG"
                                    width={60}
                                    height={60}
                                    loading='lazy'
                                    quality={90}
                                    style={{marginLeft: "10%", marginTop: "25%"}}
                                />
                                <h2>Sacred Teachings</h2>
                            </Link>
                        </div>
                    </div>
                    <div className="quarterur">
                        <div className='qurpos'>
                            <Link 
                                href='/pages/SelfCareM'
                                className="apptextB" 
                                style={{textDecoration:'none',width:"100%", height:"100%"}}
                            >
                                <Image
                                    src="/Socialicon.png"
                                    alt="MenuBKG"
                                    width={60}
                                    height={60}
                                    loading='lazy'
                                    quality={90}
                                    style={{marginRight: "10%", marginTop:"25%"}}
                                />
                                <h2>Natural Laws</h2>
                            </Link>
                        </div>
                    </div>
                    <div className="quarterll">
                        <div className='qllpos'>
                            <Link 
                                href='/pages/LanduseM'
                                className="apptextB" 
                                style={{textDecoration:'none',width:"100%", height:"100%"}}
                            >
                                <h2>Our 6 Seasons</h2>
                                <Image
                                    src="/StoriesII.png"
                                    alt="MenuBKG"
                                    width={60}
                                    height={60}
                                    loading='lazy'
                                    quality={90}
                                    style={{marginLeft: "15%",marginBottom:"30%"}}
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="quarterlr">
                        <div className='qlrpos'>
                            <Link 
                                href='/pages/Story'
                                className="apptextB" 
                                style={{textDecoration:'none',width:"100%", height:"100%"}}
                            >
                                <h2>Creation Story</h2>
                                <Image
                                    src="/IslandTurtle.png"
                                    alt="MenuBKG"
                                    width={75}
                                    height={75}
                                    loading='lazy'
                                    quality={90}
                                    style={{marginRight: "8%",marginBottom:"25%"}}
                                />
                            </Link>
                        </div>    
                    </div>   
                </div>
            </div>
        )
    }
    let IninewConvert = () => {
        if (lesson === 'activeview') {
            return (
                <>
                    <button className={activeTab === 1 ? 'active' : ''} onClick={() => setActiveTab(1)}
                        style={{width: '100%', height: '100%'}}
                    >
                        <div className="apptextB">
                            <h3>Fundamentals</h3>
                        </div>
                    </button>
                </>
            )
        }
        else {
            return (
                <>
                    <button className={activeTab === 3 ? 'active' : ''} onClick={() => setActiveTab(3)}
                        style={{width: '100%', height: '100%'}}
                    >
                        <div className="apptextB">
                            <h3>Fundamentals</h3>
                        </div>
                    </button>
                </>
            )
        }
    }
    const SummaryView = () => {
        return (
            <>
                <div className="flexpaneldisplay" style={{height:"100%"}}>
                    <div className='topLayeritemVidM flexpaneldisplay3'>
                        <iframe src="https://player.vimeo.com/video/811032864?h=bb18723052"
                            width="720" 
                            height="405"
                            style={{border:'none'}} 
                        />
                    </div>
                </div>
            </>
        );
    }
    return(
        <>
            <div className="hamlink">
                <BackLink/>
            </div>
            <div className="bkgcontainer">
                <video autoPlay loop className='videobkg'>
                    <source src="/webm/TeachBKGMobile.webm" type="video/webm; codecs=vp9"/>
                </video>
            </div>
            <div className='appshell'>
                <div className='teachpaneltopMT'>
                    <ReturnView/>
                    {activeTab === 2 && <DocView/>} 
                    {activeTab === 4 && <SummaryView/>}
                </div>
                <div className='teachpanelbotMT flexpaneldisplay'>
                    <div className='row1fr1fr flexpaneldisplay' style={{height:"100%",width:"100%"}}>
                        <div className='flexpaneldisplay' style={{height:"100%"}}>
                            <div className='topLayeritemRight'> 
                                <PrayConvert/>
                            </div>
                        </div>
                        <div className='flexpaneldisplay' style={{height:"100%"}}>
                            <div className='topLayeritemRight'> 
                                <button className={activeTab === 2 ? 'active' : ''} onClick={() => setActiveTab(2)}
                                    style={{width: '100%', height: '100%'}}
                                >
                                    <div className="apptextB">
                                        <h3>Introduction</h3>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className='flexpaneldisplay' style={{height:"100%"}}>
                            <div className='topLayeritemRight'> 
                                <IninewConvert/>
                            </div>
                        </div>
                        <div className='flexpaneldisplay' style={{height:"100%"}}>
                            <div className='topLayeritemRight'>
                                <Link 
                                    href={{
                                        pathname: '/pages/MedicineJourneyM',
                                        query: {keyword: KeywordSelect()}
                                    }}
                                    className="apptextB" 
                                    style={{textDecoration:'none',width:"100%", height:"100%"}}
                                >
                                    <h3>Medicine Journey</h3>
                                </Link>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
        </>
    );
}
