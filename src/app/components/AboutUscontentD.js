'use client';
import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import { motion } from 'framer-motion';
import AboutusBKG from '../../../public/videopageBKG.jpg';
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
function AboutUscontentD(){
    return(
        <>
            <div className="hamlink">
                <HamburgerMenu/>
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
            <motion.div 
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 1.5, delay:0.5, ease: "easeInOut"}}
                className='appcontainer overlay'
            >
                <div className='GroupParallax parallaxgroup'>
                    <div className='parallaxlayer farlayer'>
                        <motion.div 
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 1.5, delay: 1, ease: 'easeInOut'}}
                            className='itemplacementMid flexpaneldisplay mgntop10'
                        >
                            <Image 
                                src="/KTClogoAlphaII.png"
                                alt="wellnessprogram"
                                width={300}
                                height={169}
                                quality={100}
                            />
                            <div className='apptxtTitlesW'>
                                <h2>
                                Keewatin Tribal Council Health Services
                                </h2>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <div className='GroupParallax parallaxgroup'>
                    <div className='parallaxspacer'/>
                </div>
                {/* KTC start */}
                <div className='GroupParallax parallaxgroup'>
                    <div className='parallaxlayer baselayer'>
                        <motion.div 
                            variants={variantstxt}
                            initial={'hidden'}
                            whileInView={'visible'}
                            transition={{duration: 1.2, ease: "easeInOut"}}
                            className='itemplacementMid'
                        >
                            <div className='apptxtTitlesW'>
                                <h2>
                                    WE-PEH-KEH-WEH-MAH-KANA<br/> focuses on the wellness and recovery by indigenous peopole
                                    through cultural traditions and customs.
                                </h2>
                            </div>
                        </motion.div>
                    </div>
                </div> 
                <div className='GroupParallax parallaxgroup'>
                    <div className='parallaxlayer farlayer'>
                        <motion.div 
                            variants={variantstxt}
                            initial={'hidden'}
                            whileInView={'visible'}
                            transition={{duration: 1.2, ease: "easeInOut"}}
                            className='itemplacementMid'
                        >
                            <div className='apptxtTitlesW'>
                                <h2>
                                What works well for indigenous peoples,<br/> but is not offered fluently in our First Nations,
                                is our customary ways of life and cultural knowledge. 
                                </h2>
                            </div>
                        </motion.div>
                    </div>
                </div> 
                <div className='GroupParallax parallaxgroupS'>
                    <div className='parallaxspacer'/>
                </div>
                <div className='GroupParallax parallaxgroup'>
                    <div className='parallaxlayer midlayer'>
                        <motion.div 
                            variants={variantstxt}
                            initial={'hidden'}
                            whileInView={'visible'}
                            transition={{duration: 1.2, ease: "easeInOut"}}
                            className='itemplacementMid'
                        >
                            
                            <div className='apptxtTitlesW'>
                                <h2>
                                The KTC team has worked non-stop to create such a model. <br/>It has been presented to Health Canada 
                                and they are in support of this project to continue.
                                </h2>
                            </div>
                        </motion.div>
                    </div>
                </div> 
                <div className='GroupParallax parallaxgroupS'>
                    <div className='parallaxspacer'/>
                </div>
                <div className='GroupParallax parallaxgroupS'>
                    <div className="parallaxlayer baselayer">
                        <motion.div 
                            variants={variantstxt}
                            initial={'hidden'}
                            whileInView={'visible'}
                            transition={{duration: 1.2, ease: "easeInOut"}}
                            className='contpaneltxtC'
                        >
                            <div className='apptxtTitlesW'>
                                <h2>
                                    Vision/Mission Statement
                                </h2>
                            </div>
                        </motion.div>
                    </div>
                </div> 
                <div className='GroupParallax parallaxgroupS'>
                    <div className='parallaxlayer midlayer'>
                        <motion.div 
                            variants={variantstxt}
                            initial={'hidden'}
                            whileInView={'visible'}
                            transition={{duration: 1.2, ease: "easeInOut"}}
                            className='contpaneltxtC'
                        >
                            <div className='apptxtTitlesW'>
                                <h2>
                                To Enhance and Strengthen the Holistic Well-Being of our 
                                children, families and First Nations by living balanced healthy lifestyles. 
                            
                                </h2>
                            </div>
                        </motion.div>
                    </div>
                </div> 
                <div className='GroupParallax parallaxgroupXS'>
                    <div className='parallaxspacer'/>
                </div>
                <div className='GroupParallax parallaxgroup'>
                    <div className='parallaxlayer startlayer'>
                        <motion.div 
                            variants={variantstxt}
                            initial={'hidden'}
                            whileInView={'visible'}
                            transition={{duration: 1.2, ease: "easeInOut"}}
                            className='contpaneltxtC'
                        >
                        <div className='apptxtTitlesW'>
                            <h2>
                                KTC Health Department values the sacredness of life. 
                            </h2>
                            <h2>
                                As demonstrated by its support of the programs under it. 
                            </h2>
                        </div>
                        </motion.div>
                    </div>
                </div>
                <div className='GroupTop parallaxgroup'>
                    <div className="parallaxlayer caplayer">
                        <div className='flexpaneldisplay' style={{height:"70%"}}>
                            <Image 
                                src="/KTClogoAlphaII.png"
                                alt="wellnessprogram"
                                width={363}
                                height={219}
                                quality={100}
                            />
                            <div className='topLayeritembtn'>
                                <Link href="/KTC_Bridge" 
                                    className="apptext flexpaneldisplay" 
                                    style={{
                                        textDecoration:'none',
                                        width:"100%",
                                    }}
                                >
                                    <h1>Visit KTC</h1>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className='GroupParallax parallaxgroupXS'>
                    <div className='parallaxspacer'/>
                </div>
                <div className='GroupParallax parallaxgroup'>
                    <div className='parallaxlayer midlayer'>
                        <motion.div 
                        variants={variantstxt}
                        initial={'hidden'}
                        whileInView={'visible'}
                        transition={{duration: 1.2, ease: "easeInOut"}}
                        className='itemplacementMid'
                        >
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
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}
export default AboutUscontentD;