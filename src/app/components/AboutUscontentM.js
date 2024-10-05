'use client';
import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import AboutusBKG from '../../../public/GeneralBKGM.jpg';
const variantstxt = {
    hidden: {
        opacity: 0,
        y: 40
    },
    visible: {
        opacity: 1,
        y: 0
    }
};
function AboutUscontentM(){
    return(
        <>
            <div className="bklink">
                <Link href='/pages/CominghomeM'>
                    <div className="bkbtn">
                        <p>Back</p>
                    </div>
                </Link>
            </div>
            <div className="bkgcontainer">
                <Image
                    src={AboutusBKG}
                    alt="ProgramHomeBKG"
                    fill
                    style={{objectFit: 'cover'}}
                    quality={90}
                />
            </div>
            <div className='appcontainer overlay'>
                <div className='GroupParallax parallaxgroup'>
                    <div className='parallaxlayer farlayer'>
                        <div className='itemplacementMid flexpaneldisplay2' style={{height:"100%"}}>
                            <Image 
                            src="/KTClogoAlphaII.png"
                            alt="wellnessprogram"
                            width={200}
                            height={113}
                            quality={100}
                            />
                            <div className='apptxtTitlesW'>
                                <h2>
                                Keewatin Tribal Council Health Services
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='GroupParallax parallaxgroupS'>
                    <div className='parallaxspacer'/>
                </div>
                {/* KTC start */}
                <div className='GroupParallax parallaxgroup'>
                    <div className='parallaxlayer baselayer'>
                        <div className='itemplacementMid'>
                            <div className='apptxtTitlesW'>
                                <h3>
                                WE-PEH-KEH-WEH-MAH-KANA<br/> focuses on the wellness and recovery by indigenous peopole
                                through cultural traditions and customary ways of being.
                                </h3>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className='GroupParallax parallaxgroupS'>
                    <div className='parallaxlayer midlayer'>
                        <div className='contentpanel'>
                        <div className='itemplacementMid'>
                            <div className='apptxtTitlesW'>
                                <h3>
                                what works well for indigenous peoples, but is not offered fluently in our First Nations,
                                is our customary ways of life and cultural knowledge. 
                                </h3>
                            </div>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className='GroupParallax parallaxgroupS'>
                    <div className='parallaxlayer baselayer'>
                        <div className='itemplacementMid'>
                            <div className='apptxtTitlesW'>
                                <h3>
                                The KTC team has worked non-stop to create such a model. It has been presented to Health Canada 
                                and they are in support of this project to continue.
                                </h3>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className='GroupParallax parallaxgroup'>
                    <div className='parallaxspacer'/>
                </div>
                <div className='GroupParallax parallaxgroupS'>
                    <div className="parallaxlayer baselayer">
                        <div className='itemplacementMid'>
                            <div className='apptxtTitlesW'>
                                <h2>
                                    Vision/Mission Statement
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className='parallaxlayer midlayer'>
                        <div className='contentpanel mgntop60'>
                            <div className='itemplacementMid mgntop20'>
                            <div className='apptxtTitlesW'>
                                <h3>
                                To Enhance and Strengthen the Holistic Well-Being of our 
                                children, families and First Nations by living balanced healthy lifestyles. 
                            
                                </h3>
                            </div>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className='GroupParallax parallaxgroupS'>
                    <div className='parallaxspacer'/>
                </div>
                <div className='GroupParallax parallaxgroupS'>
                    <div className='parallaxlayer startlayer'>
                    <div className='contentpanel'>
                        <div className='itemplacementMid'>
                        <div className='apptxtTitlesW'>
                            <h3>
                                KTC Health Department values the sacredness of life. 
                            </h3>
                            <h3>
                                As demonstrated by its support of the programs under it. 
                            </h3>
                        </div>
                        </div>
                    </div>
                    </div>
                </div> 
                <div className='GroupTop parallaxgroup'>
                    <div className="parallaxlayer caplayer">
                        <div className='flexpaneldisplay'>
                        <div className='topLayeritembtn'>
                            <Link href="/KTC_Bridge" 
                                className="apptext" 
                                style={{
                                    paddingTop:"2%",
                                    textDecoration:'none',
                                    width:"100%",
                                }}
                            >
                                <Image 
                                src="/KTClogoAlphaII.png"
                                alt="wellnessprogram"
                                width={300}
                                height={169}
                                quality={100}
                                />
                                <h1>Visit KTC</h1>
                            </Link>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='GroupParallax parallaxgroupS'>
                    <div className='parallaxlayer midlayer'>
                        <div className='itemplacementMid'>
                        <div className='apptxtTitlesW'>
                            <h2>
                                Ekosi
                            </h2>
                        </div>
                        <div className='apptxtTitlesW'>
                            <h2>
                                Masi cho
                            </h2>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default AboutUscontentM;