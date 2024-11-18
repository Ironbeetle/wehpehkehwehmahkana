'use client';
import React, {useState, useEffect} from 'react';
import Image from "next/image";
import Link from 'next/link';
import {motion} from "framer-motion";
const Storycontent = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [width, setWidth ] = useState(0);
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
   
    let backSelect = () => {
        if (width < 480) {
            return "/pages/TeachHomeM"
        }else if (width > 481 && width < 1024){
            return "/pages/TeachHomeT"
        }else {
            return "/pages/TeachHomeD"
        }
    }
    let columnSelect = () => {
        if (width < 480) {
            return "flexpaneldisplay"
        }else if (width > 481 && width < 1024){
            return "flexpaneldisplay"
        }else {
            return "flexpaneldisplay"
        }
    }
    let imgwidth = () => {
        if (width < 480) {
            return 200
        }else if (width > 481 && width < 1024){
            return 400
        }else {
            return 600
        }
    }
    let imgheight = () => {
        if (width < 480) {
            return 200
        }else if (width > 481 && width < 1024){
            return 400
        }else {
            return 600
        }
    }
  
    let DesktopView = () => {
        return(
            <div className='tabcontent2'>
                <div className='flexpaneldisplay' style={{height:"100dvh"}}>
                    <iframe 
                        id="iframeId"
                        src="https://player.vimeo.com/video/992901339?"
                        width="720" 
                        height="405"
                        style={{border:'solid', borderColor:'black', borderWidth:'3px'}} 
                    ></iframe>
                    <div className='topLayeritembtn'>                         
                        <button className={activeTab === 1 ? 'active' : ''} onClick={() => setActiveTab(1)}
                            style={{width: '100%', height: '100%'}}
                        ><h1 className='apptextB'>Back</h1></button>
                    </div>
                </div> 
            </div>
        );
    }
   
   
    let ContentView = () => {
        return(
                <div className={columnSelect()} style={{height:"100dvh"}}>
                   
                    <div className='flexpaneldisplay' style={{height:"100%"}}>
                        <div className='apptxtFrontW' style={{width:"100%"}}>
                            <h2>
                                munto ka-kee-osi-tat
                            </h2>
                            <h2>
                                Creation    
                            </h2>
                            <h2>
                                ta-tuho-lee
                            </h2>
                        </div>
                        <div style={{width:"100%", marginTop:"4rem"}}>
                            <div className='flexpaneldisplay'>                         
                                <Image
                                    src="/thumbnails/Jeff.jpg" 
                                    alt="MenuBKG"
                                    width={150}
                                    height={150}
                                    quality={90}
                                />
                                <div className='topLayeritembtn' style={{marginTop:"5px"}}>                         
                                    <button className={activeTab === 2 ? 'active' : ''} onClick={() => setActiveTab(2)}
                                        style={{width: '100%', height: '100%'}}
                                    >
                                        <h1 className='apptextB'>Jeff Wastesicoot</h1>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
        );
    }
    return(
        <div>
            <div className="bklink">
                <Link 
                    href={{
                        pathname: backSelect(),
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
                    <source src="/webm/CreationVidbkg.webm" type="video/webm; codecs=vp9"/>
                </video>
            </div>
          
            {activeTab === 1 && <ContentView/>}
            {activeTab === 2 && <DesktopView/>}
        </div>
    );
}
export default Storycontent;
