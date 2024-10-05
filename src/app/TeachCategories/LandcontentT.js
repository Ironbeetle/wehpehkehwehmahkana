'use client';
import React, {useState, useEffect} from 'react';
import Image from "next/image";
import Link from 'next/link';
import {motion} from "framer-motion";
export default function LandcontentT()  {
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
    let Viewdefault = () => {
        return(
            <div className='flexpaneldisplay' style={{height:"70dvh"}}>
                <div className='apptxtTitles flexpaneldisplay'>
                    <h2>Thank you Creator for the life giving bounty <br/> each of the Seasons bring</h2>
                </div> 
                <div className='objectbottom334 flexpaneldisplay'>     
                    <div className='btn'>                    
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
    let LessonView = () => {
        let [activeTab2, setActiveTab2] = useState(1);
        let FallView = () => {
            return(
                <>
                    <motion.div 
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{duration:1.5, ease:"easeInOut"}}
                        className='tabcontent2'>
                        {/*  */}
                            <div className='teachequal'>
                                <div className='tiletxtE' style={{height:"100%"}}>
                                    <div className='flexpaneldisplay' style={{width:"100%",height:"100%"}}>
                                        <div className='apptxtTitlesW' style={{height:"100%",width:"100%"}}>
                                            <h1>Hháit&apos;áze</h1>
                                            <h1>Fall</h1>
                                            <h1>Tākwākin</h1>
                                        </div>
                                    </div>
                                </div>
                                <Image
                                    src="/Autum.jpg"
                                    alt="Seasonsactivity"
                                    width={1080}
                                    height={1080}                                           
                                    style={{objectFit:"contain",width:"100%",height:"100%"}}
                                    loading='lazy'
                                    quality={90}
                                />
                            </div>
                            <div className='teachequal'>
                              <div className='row1fr1fr' style={{height:"100%",width:"100%"}}>
                                    <div className='flexpaneldisplaytth'>
                                        <div className='apptxtFrontW' style={{width:"100%"}}>
                                            <h2 className='topLayeritemSelect'>Gathering</h2>
                                            <h3>Wood Cutting</h3>
                                            <h3>-</h3>
                                        </div>
                                        <div className='apptxtFrontW' style={{width:"100%"}}>
                                            <h2 className='topLayeritemSelect'>Trapping</h2>
                                            <h3>Mink / Fisher</h3>
                                            <h3>Otter / Beaver</h3>
                                        </div>
                                    </div>
                                    <div className='flexpaneldisplaytth'>
                                        <div className='apptxtFrontW' style={{width:"100%"}}>
                                            <h2 className='topLayeritemSelect'>Fishing</h2>
                                            <h3>Angleing</h3>
                                            <h3>Netting</h3>
                                        </div>
                                        <div className='apptxtFrontW' style={{width:"100%"}}>
                                            <h2 className='topLayeritemSelect'>Hunting</h2>
                                            <h3>Ducks / Geese</h3>
                                            <h3>Moose</h3>
                                        </div>
                                    </div>
                              </div>
                            </div>
                        {/*  */}
                    </motion.div>
                </>
            );
        }
        let FreezeUpView = () => {
            return(
                <>
                    <motion.div 
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{duration:1.5, ease:"easeInOut"}}
                        className='tabcontent2'
                    >
                        <div className='teachequal'>
                            <div className='tiletxtE' style={{height:"100%"}}>
                                <div className='flexpaneldisplay' style={{width:"100%",height:"100%"}}>
                                    <div className='apptxtTitlesW' style={{height:"100%",width:"100%"}}>
                                        <h1>Deten</h1>
                                        <h1>Freeze-Up</h1>
                                        <h1>Migiskāw</h1>
                                    </div>
                                </div>
                            </div>
                            <Image
                                src="/FreezeUp.jpg"
                                alt="Seasonsactivity"
                                width={1080}
                                height={1080}                                           
                                style={{objectFit:"contain",width:"100%",height:"100%"}}
                                loading='lazy'
                                quality={90}
                            />
                        </div>
                        <div className='teachequal'>
                            <div className='row1fr1fr' style={{height:"100%",width:"100%"}}>
                                <div className='flexpaneldisplaytth'>
                                    <div className='apptxtFrontW' style={{width:"100%"}}>
                                        <h2 className='topLayeritemSelect'>Gathering</h2>
                                        <h3>Wood Cutting</h3>
                                        <h3>-</h3>
                                    </div>
                                    <div className='apptxtFrontW' style={{width:"100%"}}>
                                        <h2 className='topLayeritemSelect'>Trapping</h2>
                                        <h3>Muskrat</h3>
                                        <h3>-</h3>
                                    </div>
                                </div>
                                <div className='flexpaneldisplaytth'>
                                    <div className='apptxtFrontW' style={{width:"100%"}}>
                                        <h2 className='topLayeritemSelect'>Fishing</h2>
                                        <h3>Under Ice Netting</h3>
                                        <h3>-</h3>
                                    </div>
                                    <div className='apptxtFrontW' style={{width:"100%"}}>
                                        <h2 className='topLayeritemSelect'>Hunting</h2>
                                        <h3>Caribou</h3>
                                        <h3>-</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                    </motion.div>
                </>
            );
        }
        let WinterView = () => {
            return(
                <>
                    <motion.div 
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{duration:1.5, ease:"easeInOut"}}
                        className='tabcontent2'
                    >
                        <div className='teachequal'>
                            <div className='tiletxtE' style={{height:"100%"}}>
                                <div className='flexpaneldisplay' style={{width:"100%",height:"100%"}}>
                                    <div className='apptxtTitlesW' style={{height:"100%",width:"100%"}}>
                                        <h1>Hháiye</h1>
                                        <h1>Winter</h1>
                                        <h1>Pipon</h1>
                                    </div>
                                </div>
                            </div>
                            <Image
                                src="/Winter.jpg"
                                alt="Seasonsactivity"
                                width={1080}
                                height={1080}                                           
                                style={{objectFit:"contain",width:"100%",height:"100%"}}
                                loading='lazy'
                                quality={90}
                            />
                        </div>
                        <div className='teachequal'>
                            <div className='row1fr1fr' style={{height:"100%",width:"100%"}}>
                                <div className='flexpaneldisplaytth'>
                                    <div className='apptxtFrontW' style={{width:"100%"}}>
                                        <h2 className='topLayeritemSelect'>Gathering</h2>
                                        <h3>Wood-Cutting</h3>
                                        <h3>-</h3>
                                    </div>
                                    <div className='apptxtFrontW' style={{width:"100%"}}>
                                        <h2 className='topLayeritemSelect'>Trapping</h2>
                                        <h3>Mink / Fisher</h3>
                                        <h3>Otter / Beaver</h3>
                                    </div>
                                </div>
                                <div className='flexpaneldisplaytth'>
                                    <div className='apptxtFrontW' style={{width:"100%"}}>
                                        <h2 className='topLayeritemSelect'>Fishing</h2>
                                        <h3>Under Ice Netting</h3>
                                        <h3>-</h3>
                                    </div>
                                    <div className='apptxtFrontW' style={{width:"100%"}}>
                                        <h2 className='topLayeritemSelect'>Hunting</h2>
                                        <h3>Caribou</h3>
                                        <h3>-</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            );
        }
        let BreakUpView = () => {
            return(
                <>
                    <motion.div 
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{duration:1.5, ease:"easeInOut"}}
                        className='tabcontent2'
                    >
                        <div className='teachequal'>
                            <div className='tiletxtE' style={{height:"100%"}}>
                                <div className='flexpaneldisplay' style={{width:"100%",height:"100%"}}>
                                    <div className='apptxtTitlesW' style={{height:"100%",width:"100%"}}>
                                        <h1>Náholghi</h1>
                                        <h1>Break-Up</h1>
                                        <h1>Minoskamin</h1>
                                    </div>
                                </div>
                            </div>
                            <Image
                                src="/BreakUp.jpg"
                                alt="Seasonsactivity"
                                width={1080}
                                height={1080}                                           
                                style={{objectFit:"contain",width:"100%",height:"100%"}}
                                loading='lazy'
                                quality={90}
                            />
                        </div>
                        <div className='teachequal'>
                            <div className='row1fr1fr' style={{height:"100%",width:"100%"}}>
                                <div className='flexpaneldisplaytth'>
                                    <div className='apptxtFrontW' style={{width:"100%"}}>
                                        <h2 className='topLayeritemSelect'>Gathering</h2>
                                        <h3>Wood-Cutting</h3>
                                        <h3>-</h3>
                                    </div>
                                    <div className='apptxtFrontW' style={{width:"100%"}}>
                                        <h2 className='topLayeritemSelect'>Trapping</h2>
                                        <h3>Muskrat</h3>
                                        <h3>Otter / Beaver</h3>
                                    </div>
                                </div>
                                <div className='flexpaneldisplaytth'>
                                    <div className='apptxtFrontW' style={{width:"100%"}}>
                                        <h2 className='topLayeritemSelect'>Fishing</h2>
                                        <h3>-</h3>
                                        <h3>-</h3>
                                    </div>
                                    <div className='apptxtFrontW' style={{width:"100%"}}>
                                        <h2 className='topLayeritemSelect'>Hunting</h2>
                                        <h3>Caribou</h3>
                                        <h3>Moose</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                       
                    </motion.div>
                </>
            );
        }
        let SpringView = () => {
            return(
                <>
                    <motion.div 
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{duration:1.5, ease:"easeInOut"}}
                        className='tabcontent2'
                    >
                        <div className='teachequal'>
                            <div className='tiletxtE' style={{height:"100%"}}>
                                <div className='flexpaneldisplay' style={{width:"100%",height:"100%"}}>
                                    <div className='apptxtTitlesW' style={{height:"100%",width:"100%"}}>
                                        <h1>Łuk&apos;e</h1>
                                        <h1>Spring</h1>
                                        <h1>Sīkwan</h1>
                                    </div>
                                </div>
                            </div>
                            <Image
                                src="/Spring.jpg"
                                alt="Seasonsactivity"
                                width={1080}
                                height={1080}                                           
                                style={{objectFit:"contain",width:"100%",height:"100%"}}
                                loading='lazy'
                                quality={90}
                            />
                        </div>
                        <div className='teachequal'>
                            <div className='row1fr1fr' style={{height:"100%",width:"100%"}}>
                                <div className='flexpaneldisplaytth'>
                                    <div className='apptxtFrontW' style={{width:"100%"}}>
                                        <h2 className='topLayeritemSelect'>Gathering</h2>
                                        <h3>Eggs (Ducks / Gulls)</h3>
                                        <h3>-</h3>
                                    </div>
                                    <div className='apptxtFrontW' style={{width:"100%"}}>
                                        <h2 className='topLayeritemSelect'>Trapping</h2>
                                        <h3>Muskrat</h3>
                                        <h3>-</h3>
                                    </div>
                                </div>
                                <div className='flexpaneldisplaytth'>
                                    <div className='apptxtFrontW' style={{width:"100%"}}>
                                        <h2 className='topLayeritemSelect'>Fishing</h2>
                                        <h3>Angleing</h3>
                                        <h3>Netting</h3>
                                    </div>
                                    <div className='apptxtFrontW' style={{width:"100%"}}>
                                        <h2 className='topLayeritemSelect'>Hunting</h2>
                                        <h3>Ducks & Geese</h3>
                                        <h3></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                      
                       
                    </motion.div>
                </>
            );
        }
        let SummerView = () => {
            return(
                <>
                    <motion.div 
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{duration:1.5, ease:"easeInOut"}}
                        className='tabcontent2'
                    >
                        <div className='teachequal'>
                            <div className='tiletxtE' style={{height:"100%"}}>
                                <div className='flexpaneldisplay' style={{width:"100%",height:"100%"}}>
                                    <div className='apptxtTitlesW' style={{height:"100%",width:"100%"}}>
                                        <h1>Sįne</h1>
                                        <h1>Summer</h1>
                                        <h1>Nīpin</h1>
                                    </div>
                                </div>
                            </div>
                            <Image
                                src="/Summer.jpg"
                                alt="Seasonsactivity"
                                width={1080}
                                height={1080}                                           
                                style={{objectFit:"contain",width:"100%",height:"100%"}}
                                loading='lazy'
                                quality={90}
                            />
                        </div>
                        <div className='teachequal'>
                            <div className='row1fr1fr' style={{height:"100%",width:"100%"}}>
                                <div className='flexpaneldisplaytth'>
                                    <div className='apptxtFrontW' style={{width:"100%"}}>
                                        <h2 className='topLayeritemSelect'>Gathering</h2>
                                        <h3>Berries</h3>
                                        <h3>Plants and Medicines</h3>
                                    </div>
                                    <div className='apptxtFrontW' style={{width:"100%"}}>
                                        <h2 className='topLayeritemSelect'>Trapping</h2>
                                        <h3>-</h3>
                                        <h3>-</h3>
                                    </div>
                                </div>
                                <div className='flexpaneldisplaytth'>
                                    <div className='apptxtFrontW' style={{width:"100%"}}>
                                        <h2 className='topLayeritemSelect'>Fishing</h2>
                                        <h3>Angleing</h3>
                                        <h3>Netting</h3>
                                    </div>
                                    <div className='apptxtFrontW' style={{width:"100%"}}>
                                        <h2 className='topLayeritemSelect'>Hunting</h2>
                                        <h3>-</h3>
                                        <h3>-</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            );
        }
        let tabs = [SummerView(), FallView(), FreezeUpView(), WinterView(), BreakUpView(), SpringView()];
        let handleTabClick = () => {
            setActiveTab2((prevTab) => (prevTab + 1) % tabs.length);
        };
        return(
            <div className='row1fr4fr'>
                <div className='appshell'>
                    <div className='objectbottom flexpaneldisplay'>
                        <div className='flexpaneldisplay' style={{width:"30%"}}>
                            <div className='btnall'>                         
                                <button onClick={() => handleTabClick()}
                                    style={{width: '100%', height: '100%'}}
                                >
                                    <h2>Next</h2>
                                </button>
                            </div>
                        </div>  
                    </div>
                </div>
                <div className="bkgcontainer">
                    <div>{tabs[activeTab2]}</div>
                </div>
            </div>
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
                    <Link href='/pages/TeachHomeT/'>
                        <div className="bkbtn">
                            <p>Back</p>
                        </div>
                    </Link>
                </div>
                <div className="bkgcontainer">
                    <video autoPlay loop className='videobkg'>
                        <source src="/webm/WaterCreatureTablet.webm" type="video/webm; codecs=vp9"/>
                    </video>
                </div>
                {activeTab === 1 && <Viewdefault/>}
                {activeTab === 2 && <LessonView/>}
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
        if(width > 1024){
            return <PageFlipView/>
        }else{
            return <PageView/>
        }
    }
    return <FullPageView/>
}
