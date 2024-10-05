'use client';
import React from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';
import MediaHomeBKG from '../../../public/videopageBKG.jpg';
import HamburgerMenu from '../components/HamburgerMenu';
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
            <div className="hamlink">
                <HamburgerMenu/>
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
            <motion.div 
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 1.5, delay:0.5, ease: "easeInOut"}}
                className='appcontainer overlay'
            >
                <div className='GroupParallax parallaxgroup'>
                    <div className='parallaxlayer startlayer'>
                        <div className='flexpaneldisplay' style={{height:"100%"}}>
                            <motion.div 
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{duration: 1.5, delay: 1, ease: 'easeInOut'}}
                            >
                                <div className="apptxtFrontW">
                                    <h1>
                                        A Living Document
                                    </h1>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
                <div className="GroupParallax parallaxgroupS">
                   <div className="parallaxspacer"/>
                </div>
                <div className="GroupParallax parallaxgroup">
                    <div className="parallaxlayer startlayer">
                        <motion.div 
                            variants={variantstxt}
                            initial={'hidden'}
                            whileInView={'visible'}
                            transition={{duration: 1.2, ease: "easeInOut"}}
                            className="contpaneltxtA"
                        >
                            <div className='apptxtTitlesW'>
                                <h2>
                                Like all living things, this project has the potential to grow and develop
                                over time.
                                </h2>
                            </div>
                        </motion.div>
                    </div>
                    <div className="parallaxlayer farlayer">
                        <div className='contpanelimgB'>
                            <Image 
                                src="/TreeofLifeicon.png"
                                alt="LivingDocumentBKG" 
                                width={300}
                                height={300}
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
                    <div className="parallaxlayer startlayer">
                        <div className='contpanelimgC mgntop20'>
                            <Image 
                                src="/IslandTurtle.png"
                                alt="LivingDocumentBKG" 
                                width={300}
                                height={300}
                                loading='eager' 
                                quality={90}
                            />
                        </div>
                    </div>
                    <div className="parallaxlayer midlayer">
                        <motion.div 
                            variants={variantstxt}
                            initial={'hidden'}
                            whileInView={'visible'}
                            transition={{duration: 1.2, ease: "easeInOut"}}
                            className="contpaneltxtC"
                        >
                            <div className='apptxtTitlesW'>
                                <h2>
                                    Imagine a data-base where you can explore and re-discover
                                    the knowledge and culture of the Ininew and Dene people.
                                </h2>
                            </div>
                        </motion.div>
                    </div>
                    
                </div>
                <div className="GroupParallax parallaxgroup">
                   <div className="parallaxspacer"/>
                </div>
                <div className="GroupParallax parallaxgroup">
                    <div className="parallaxlayer farlayer">
                        <motion.div 
                            variants={variantstxt}
                            initial={'hidden'}
                            whileInView={'visible'}
                            transition={{duration: 1.2, ease: "easeInOut"}}
                            className="contpaneltxtA"
                        >
                            <div className='apptxtTitlesW'>
                                <h2>
                                    Teachings for guidance
                                </h2>
                            </div>
                        </motion.div>
                    </div>
                    <div className="parallaxlayer baselayer">
                        <div className='contpanelimgC mgntop10'>
                            <Image 
                                src="/Sasquatchicon.png"
                                alt="LivingDocumentBKG" 
                                width={300}
                                height={300}
                                loading='eager' 
                                quality={90}
                            />
                        </div>
                    </div>
                    <div className="parallaxlayer startlayer">
                        <motion.div 
                            variants={variantstxt}
                            initial={'hidden'}
                            whileInView={'visible'}
                            transition={{duration: 1.2, ease: "easeInOut"}}
                            className="contpaneltxtB"
                        >
                            <div className='apptxtTitlesW'>
                                <h2>
                                    Stories
                                </h2>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <div className="GroupParallax parallaxgroupS">
                    <div className="parallaxspacer"/>
                </div>
                <div className="GroupParallax parallaxgroup">
                    <div className="parallaxlayer farlayer">
                        <motion.div 
                            variants={variantstxt}
                            initial={'hidden'}
                            whileInView={'visible'}
                            transition={{duration: 1.2, ease: "easeInOut"}}
                            className="contpaneltxtA"
                        >
                            <div className='apptxtTitlesW'>
                                <h2>
                                    Land Use
                                </h2>
                            </div>
                        </motion.div>
                    </div>
                    <div className="parallaxlayer midlayer">
                        <div className='contpanelimgC mgntop20'>
                            <Image 
                                src="/MedicinesIcon.png"
                                alt="LivingDocumentBKG" 
                                width={300}
                                height={300}
                                loading='eager' 
                                quality={90}
                            />
                        </div>
                    </div>
                    <div className="parallaxlayer startlayer">
                        <motion.div 
                            variants={variantstxt}
                            initial={'hidden'}
                            whileInView={'visible'}
                            transition={{duration: 1.2, ease: "easeInOut"}}
                            className="contpaneltxtB"
                        >
                            <div className='apptxtTitlesW'>
                                <h2>
                                    Medicines on the land
                                </h2>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <div className="GroupParallax parallaxgroupS">
                    <div className='parallaxspacer'/>
                </div>
                <div className='GroupParallax parallaxgroup'>
                    <div className="parallaxlayer farlayer">
                        <motion.div 
                            variants={variantstxt}
                            initial={'hidden'}
                            whileInView={'visible'}
                            transition={{duration: 1.2, ease: "easeInOut"}}
                            className="contpaneltxtC"
                        >
                            <div className='apptxtTitlesW'>
                                <h2>
                                    All available 24 hours a day , 7 days a week.
                                </h2>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <div className="GroupParallax parallaxgroup">
                    <div className="parallaxlayer midlayer">
                        <motion.div 
                            variants={variantstxt}
                            initial={'hidden'}
                            whileInView={'visible'}
                            transition={{duration: 1.2, ease: "easeInOut"}}
                            className="contpaneltxtA"
                        >
                            <div className='apptxtTitlesW'>
                                <h2>
                                This project will lay the foundation for future story tellers
                                and teachers,
                                </h2>
                            </div>
                        </motion.div>
                    </div>
                    <div className="parallaxlayer baselayer">
                        <div className='contpanelimgB'>
                            <Image 
                                src="/Seasonsicon.png"
                                alt="LivingDocumentBKG" 
                                width={300}
                                height={300}
                                loading='eager' 
                                quality={90}
                            />
                        </div>
                    </div>
                </div>
                <div className="GroupParallax parallaxgroupS">
                    <div className="parallaxlayer startlayer">
                        <motion.div 
                            variants={variantstxt}
                            initial={'hidden'}
                            whileInView={'visible'}
                            transition={{duration: 1.2, ease: "easeInOut"}}
                            className="contpaneltxtB"
                        >
                            <div className='apptxtTitlesW'>
                                <h2>
                                    who will continue to pass on the traditional knowledge.
                                </h2>
                            </div>
                        </motion.div>
                    </div>
                    <div className="parallaxlayer baselayer">
                        <div className='contpanelimgA'>
                            <Image 
                                src="/Socialicon.png"
                                alt="LivingDocumentBKG" 
                                width={300}
                                height={300}
                                loading='eager' 
                                quality={90}
                            />
                        </div>
                    </div>
                </div>
                <div className='GroupParallax parallaxgroupS'>
                    <div className="parallaxspacer"/>
                </div>
                <div className="GroupParallax parallaxgroup">
                    <div className="parallaxlayer farlayer">
                        <motion.div 
                            variants={variantstxt}
                            initial={'hidden'}
                            whileInView={'visible'}
                            transition={{duration: 1.2, ease: "easeInOut"}}
                            className="contpaneltxtC"
                        >
                            <div className='apptxtTitlesW'>
                                <h2>
                                    EKOSI
                                </h2>
                            </div>
                        </motion.div>
                    </div>
                    <div className="parallaxlayer startlayer">
                        <motion.div 
                            variants={variantstxt}
                            initial={'hidden'}
                            whileInView={'visible'}
                            transition={{duration: 1.2, ease: "easeInOut"}}
                            className="contpaneltxtC mgntop10"
                        >
                            <div className='apptxtTitlesW'>
                                <h2>
                                    Masi cho
                                </h2>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}