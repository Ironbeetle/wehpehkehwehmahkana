'use client';
import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import MediaHomeBKG from '../../../public/GeneralBKGM.jpg';
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
export default function LivDoccontentD(){
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
                    src={MediaHomeBKG}
                    alt="LivingDocumentBKG"
                    fill
                    loading='eager'
                    quality={90}
                />
            </div>
            <div className='appcontainer overlay'>
                <div className='GroupParallax parallaxgroup'>
                    <div className='parallaxlayer startlayer'>
                        <div className='contentpanel flexpaneldisplay'>
                            <div>
                                <div className="apptxtFrontW">
                                    <h1>
                                        A Living Document
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="GroupParallax parallaxgroupS">
                    <div className="parallaxspacer"/>
                </div>
                <div className="GroupParallax parallaxgroupS">
                    <div className="parallaxlayer startlayer">
                        <div className="itemplacementMid">
                            <div className='apptxtTitlesW'>
                                <h2>
                                Like all living things, this project has the potential to grow and develop
                                over time.
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="parallaxlayer baselayer">
                        <div className='contpanelimgC mgntop60'>
                            <Image 
                                src="/TreeofLifeicon.png"
                                alt="LivingDocumentBKG" 
                                width={150} 
                                height={150}
                                loading='eager' 
                                quality={90}
                            />
                        </div>
                    </div>
                </div>
                <div className="GroupParallax parallaxgroupS">
                    <div className="parallaxspacer"/>
                </div>
                <div className="GroupParallax parallaxgroup">
                    <div className="parallaxlayer farlayer">
                        <div className='contpanelimgC mgntop80'>
                            <Image 
                                src="/IslandTurtle.png"
                                alt="LivingDocumentBKG" 
                                width={150}
                                height={150}
                                loading='eager' 
                                quality={90}
                            />
                        </div>
                    </div>
                    <div className="parallaxlayer startlayer">
                        <div className="contentpanel">
                            <div className="itemplacementMid">
                                <div className='apptxtTitlesW'>
                                    <h2>
                                        Imagine a data-base where you can explore and re-discover
                                        the knowledge and culture of the Ininew and Dene.
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="GroupParallax parallaxgroup">
                    <div className="parallaxlayer midlayer">
                            <div className="contpaneltxtA">
                                <div className='apptxtTitlesW'>
                                    <h2>
                                        Teachings for guidance
                                    </h2>
                                </div>
                            </div>
                    </div>
                    <div className="parallaxlayer baselayer">
                        <div className='contpanelimgC mgntop80'>
                            <Image 
                                src="/Sasquatchicon.png"
                                alt="LivingDocumentBKG" 
                                width={150}
                                height={150}
                                loading='eager' 
                                quality={90}
                            />
                        </div>
                    </div>
                    <div className="parallaxlayer startlayer">
                        <div className="contentpanel mgntop60">
                            <div className="contpaneltxtB">
                                <div className='apptxtTitlesW'>
                                    <h2>
                                        Stories
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="GroupParallax parallaxgroup">
                    <div className="parallaxlayer midlayer">
                        <div className="contentpanel">
                            <div className="contpaneltxtA">
                                <div className='apptxtTitlesW'>
                                    <h2>
                                        Land Use
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="parallaxlayer farlayer">
                        <div className='contpanelimgC mgntop50'>
                            <Image 
                                src="/MedicinesIcon.png"
                                alt="LivingDocumentBKG" 
                                width={150}
                                height={150}
                                loading='eager' 
                                quality={90}
                            />
                        </div>
                    </div>
                    <div className="parallaxlayer startlayer">
                        <div className="contpaneltxtB mgntop50">
                            <div className='apptxtTitlesW'>
                                <h2>
                                    Medicines on the land
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
               
                <div className='GroupParallax parallaxgroupS'>
                    <div className="parallaxlayer midlayer">
                        <div className="itemplacementMid">
                            <div className='apptxtTitlesW'>
                                <h2>
                                    All available 24 hours a day , 7 days a week.
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="GroupParallax parallaxgroupS">
                    <div className="parallaxlayer baselayer">
                        <div className='contpanelimgC'>
                            <Image 
                                src="/Seasonsicon.png"
                                alt="LivingDocumentBKG" 
                                width={150}
                                height={150}
                                loading='eager' 
                                quality={90}
                            />
                        </div>
                    </div>
                </div> */}
                <div className="GroupParallax parallaxgroup">
                    <div className="parallaxlayer startlayer">
                        <div className="itemplacementMid">
                            <div className='apptxtTitlesW'>
                                <h2>
                                This project will lay the foundation for future story tellers
                                and teachers,
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="parallaxlayer baselayer">
                        <div className='contpanelimgC'>
                            <Image 
                                src="/Seasonsicon.png"
                                alt="LivingDocumentBKG" 
                                width={150}
                                height={150}
                                loading='eager' 
                                quality={90}
                            />
                        </div>
                    </div>
                   
                </div>
                <div className='GroupParallax parallaxgroup'>
                <div className="parallaxlayer midlayer">
                        <div className="itemplacementMid mgntop20">
                            <div className='apptxtTitlesW'>
                                <h2>
                                    who will continue to pass on the traditional knowledge.
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="parallaxlayer baselayer">
                        <div className='contpanelimgC'>
                            <Image 
                                src="/Socialicon.png"
                                alt="LivingDocumentBKG" 
                                width={150}
                                height={150}
                                loading='eager' 
                                quality={90}
                            />
                        </div>
                    </div>
                </div>
                <div className="GroupParallax parallaxgroupS">
                    <div className="parallaxlayer baselayer">
                        <div className="contpaneltxtC">
                            <div className='apptxtTitlesW'>
                                <h2>
                                    EKOSI
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="parallaxlayer midlayer">
                        <div className="contpaneltxtC mgntop20">
                            <div className='apptxtTitlesW'>
                                <h2>
                                    Masi Cho
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
