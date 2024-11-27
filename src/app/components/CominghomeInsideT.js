'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Homebkkg from '../../../public/CominghomeTT.jpg';
import WellnessProgram from '../../../public/WellnessProgram.svg';
import TheGoodLifeI from '../../../public/TheGoodLifeI.svg';
import DrummingWide from '../../../public/DrummingWide.svg';
import MedicineBundle from '../../../public/MedicineBundle.svg';
import SweetgrassPrep from '../../../public/SweetgrassPrep.svg';
import BundlePrep from '../../../public/BundlePrep.svg';
import Teacher from '../../../public/Teacher.svg';
import PassKnwldgeBKG from '../../../public/PassKnwldgeBKG.svg';
import Landgathering from '../../../public/Landgathering.svg';
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
const variantsimg = {
    hidden: {
        opacity: 0,
    },
    visible: {
       opacity: 1,
    }
};
export const ComingHomePage = () =>{
    return(
        <>
        <div className="hamlink">
            <HamburgerMenu/>
        </div>
        <div className="bkgcontainer">
            <Image
                src={Homebkkg}
                alt="ComingHomeBKGT"
                fill
                loading='eager'
                quality={90}
            />
        </div>
        <div className='appcontainer'>
            {/* intro */}
            <div className='GroupParallax parallaxgroup'>
                <div className="parallaxlayer farlayer">
                    <div className="flexpaneldisplay" style={{height:"75%"}}>
                        <motion.div 
                            initial={{opacity: 0, y: 10}}
                            whileInView={{opacity: 1, y: 1}}
                            transition={{duration: 2, delay: 0.5,ease: "easeInOut"}}
                            className="apptxtTitlesW"
                        >
                            <h1>
                                WE-PEH-KEH-WEH-MAH-KANA
                            </h1>
                        </motion.div>   
                    </div>
                </div>
                <div className="parallaxlayer midlayer">
                    <div className='flexpaneldisplay' style={{height:"100%"}}>
                        <motion.div 
                            initial={{opacity: 0, y: 10}}
                            whileInView={{opacity: 1, y: 1}}
                            transition={{duration: 2, delay:1, ease: "easeInOut"}}
                            className="apptxtTitlesW"
                        >
                            <h1>
                                They Are Coming Home
                            </h1>
                        </motion.div>
                    </div>        
                </div>
                <div className="parallaxlayer startlayer">
                    <motion.div 
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 2, delay:1, ease: "easeInOut"}}
                        className='objectbottom'>
                        <div className="arrow-down">
                            <div className="left"></div>
                            <div className="right"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
           <div className='GroupParallax parallaxgroupS'>
                <div className="parallaxspacer"/>
           </div>
            {/* Top segment */}            
            <div className="GroupParallax parallaxgroupS">
                <div className="parallaxlayer startlayer">
                    <div className="itemplacementMid">
                        <div className="apptxtTitlesW">
                            <h1>
                                A Wellness Model
                            </h1>
                            <h1>
                                
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='GroupParallax parallaxgroup'>
                <div className="parallaxlayer startlayer">
                    <div className="contpaneltxtC">
                        <div className='apptxtFrontW'>
                            <h1>
                                Building on the Resiliency<br/> of our
                            </h1>
                        </div>
                        <div className='apptxtFrontW'>
                            <h1>
                                Children,
                            </h1>
                            <h1>
                                Families 
                            </h1>
                            <h1>
                                & Nations
                            </h1>
                        </div>
                    </div>
                </div>
            </div> 
            <div className='GroupParallax parallaxgroupS'>
                <div className="parallaxlayer baselayer">
                    <Image
                        src={WellnessProgram}
                        alt="WellnessProgramImage"
                        fill
                        style={{objectFit: "contain"}}
                        loading='lazy'
                        quality={90}
                        className="imgshadow"
                    />
                </div>
            </div>
            <div className='GroupParallax parallaxgroup'>
                <div className="parallaxspacer"/>
            </div>
            {/* circle menu start */}
            <div className='GroupTop parallaxgroup'>
               <div className='circlecontainteachTab'>
                    <div className="quarterul">
                        <div className='qulpos' style={{height:"100%"}}>
                            <Link 
                                href="/pages/AboutUsT" 
                                className="apptextB" 
                                style={{textDecoration:'none',width:"100%", height:"100%"}}
                            >
                                <Image
                                    src="/Eaglemenuicon.png"
                                    alt="MenuBKG"
                                    width={150}
                                    height={150}
                                    loading='lazy'
                                    quality={90}
                                    style={{marginLeft: "20%", marginTop: "15%"}}
                                />
                                <h2>About Program</h2>
                            </Link>
                        </div>
                    </div>
                    <div className="quarterur">
                        <div className='qurpos' style={{height:"100%"}}>
                            <Link 
                                href="/pages/LivingDocT" 
                                className="apptextB" 
                                style={{textDecoration:'none',width:"100%", height:"100%"}}
                            >
                                <Image
                                    src="/TreeofLifeicon.png"
                                    alt="MenuBKG"
                                    width={150}
                                    height={150}
                                    loading='lazy'
                                    quality={90}
                                    style={{marginRight: "20%", marginTop:"15%"}}
                                />
                                <h2>Living Document</h2>
                            </Link>
                        </div>
                    </div>
                    <div className="quarterll">
                        <div className='qllpos' style={{height:"100%"}}>
                            <Link 
                                href="/pages/TeachHomeT" 
                                className="apptextB" 
                                style={{textDecoration:'none',width:"100%", height:"100%"}}
                            >
                                <h2>Teachings</h2>
                                <Image
                                    src="/Teachingsicon.png"
                                    alt="MenuBKG"
                                    width={150}
                                    height={150}
                                    loading='lazy'
                                    quality={90}
                                    style={{marginLeft: "20%",marginBottom:"20%"}}
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="quarterlr">
                        <div className='qlrpos' style={{height:"100%"}}>
                            <Link 
                                href="/pages/MediaHomeD" 
                                className="apptextB" 
                                style={{textDecoration:'none',width:"100%", height:"100%"}}
                            >
                                <h2>Media Library</h2>
                                <Image
                                    src="/Wolficon.png"
                                    alt="MenuBKG"
                                    width={150}
                                    height={150}
                                    loading='lazy'
                                    quality={90}
                                    style={{marginRight: "20%", marginBottom:"20%"}}
                                />
                            </Link>
                        </div>    
                    </div>   
               </div>
            </div>
            <div className='GroupParallax parallaxgroupS'>
                <div className="parallaxlayer midlayer">
                    <div className='contpaneltxtC'>
                        <div className="apptxtFrontW">
                            <h1>
                                Colonization had a devastating effect on our people.
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='GroupParallax parallaxgroupS'>
                <div className="parallaxlayer startlayer">
                 
                        <div className='contpaneltxtC'>
                            <div className="apptxtFrontW">
                                <h1>
                                    This initiative was born from the dilemma of our people
                                    who are suffering on the streets of the cities and our 
                                    communities.
                                </h1>
                            </div>
                        </div>
                  
                </div>
            </div>
            <div className='GroupParallax parallaxgroupS'>
                <div className="parallaxlayer startlayer">
                    <div className='contpaneltxtC'>
                        <div className="apptxtFrontW">
                            <h1>
                                Missing and Murdered Indigenous Women
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='GroupParallax parallaxgroup'>
                <div className="parallaxlayer midlayer">
                    <div className='contpaneltxtA'>
                        <div className="apptxtFrontW">
                            <h1>
                                Indian Act
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="parallaxlayer startlayer">
                    <div className='contpaneltxtB mgntop20'>
                        <div className="apptxtFrontW">
                            <h1>
                                Residential Schools
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="parallaxlayer farlayer">
                    <div className='contpaneltxtA mgntop40'>
                        <div className="apptxtFrontW">
                            <h1>
                                Day Schools
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='GroupParallax parallaxgroupS'>
                <div className="parallaxlayer startlayer">
                    <div className='contpaneltxtC'>
                        <div className="apptxtFrontW">
                            <h1>
                                Loss of language, culture and spirituality is the primary result of
                                the imposed assimilation process.
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="GroupParallax parallaxgroup">
                <div className="parallaxlayer startlayer">
                    <div className='contpaneltxtB'>
                        <div className="apptxtFrontW">
                            <h1>
                                Child Welfare Act
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="parallaxlayer midlayer">
                    <div className='contpaneltxtA'>
                        <div className="apptxtFrontW">
                            <h1>
                                60’s Scoop
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="GroupParallax parallaxgroupS">
                <div className="parallaxlayer startlayer">
                    <div className="contpaneltxtC">
                        <div className="apptxtFrontW">
                            <h1>
                                This project’s intent is to leave a legacy,
                                of hope, strength and resilience for our people.
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="parallaxlayer baselayer">
                    <Image 
                        src={TheGoodLifeI}
                        alt="the_good_life"
                        fill
                        style={{objectFit: "contain"}}
                        loading='lazy'
                        quality={90}
                        className="imgshadow"
                    />
                </div>
            </div>
            <div className='GroupTop parallaxgroup'>
                <div className="parallaxlayer startlayer flexpaneldisplay">
                    <div className='topLayeritemVid'>
                        <motion.div 
                            initial={{opacity: 0 }}
                            animate={{opacity: 1 }}
                            transition={{duration: 1.5, delay:1, ease: "easeInOut"}}
                        >
                                <iframe src="https://player.vimeo.com/video/811032864?h=bb18723052"
                                    width="720" 
                                    height="405"
                                    id="VideoD"
                                    style={{border: "none"}}
                                />
                        </motion.div>
                    </div>
                </div>
            </div>
            {/* trad knowledge works  */}
            <div className='GroupParallax parallaxgroupS'>
                <div className="parallaxlayer midlayer">
                    <motion.div 
                        variants={variantstxt}
                        initial={'hidden'}
                        whileInView={'visible'}
                        transition={{duration: 1.2, ease: "easeInOut"}}
                        className="itemplacementMid"
                    >
                        <div className="apptxtTitlesW">
                            <h1>
                                Teachings
                            </h1>
                        </div>
                    </motion.div>
                </div>
            </div>
            {/* changeIn start */}
            <div className='GroupParallax parallaxgroup'>
                <div className="parallaxlayer baselayer">
                    <Image 
                        src={DrummingWide}
                        alt="turmoil"
                        fill
                        style={{objectFit: "contain"}}
                        loading='lazy'
                        quality={90}
                        className="imgshadow"
                    />
                </div>
                <div className="parallaxlayer midlayer">
                    <motion.div 
                        variants={variantstxt}
                        initial={'hidden'}
                        whileInView={'visible'}
                        transition={{duration: 1.2, ease: "easeInOut"}}
                        className='contpaneltxtC'
                    >
                        <div className="apptxtFrontW mgntop60">  
                            <h1>
                                Mounting evidence shows a high success rate in the
                                rehabilitation and healing of our 
                                people, when we use our customary 
                                ways of life.
                            </h1>
                        </div>
                    </motion.div>
                </div>
            </div>
            {/* bundle origins */}
            <div className='GroupParallax parallaxgroup'>
                <div className="parallaxlayer midlayer">
                    <div className="contentpanel mgntop20">
                        <motion.div 
                            variants={variantstxt}
                            initial={'hidden'}
                            whileInView={'visible'}
                            transition={{duration: 1.2, ease: "easeInOut"}}
                            className="itemplacementMid"
                        >
                            <div className="apptxtFrontW">
                                <h1>
                                    It was deemed necessary to create something to
                                    help reconnect to the teachings <br/>
                                    for future generations. 
                                </h1>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div> 
            {/* intro medicine bundle */}
            <div className='GroupParallax parallaxgroup'>
                <div className="parallaxlayer baselayer">
                <Image
                    src={MedicineBundle}
                    alt="bundle"
                    fill
                    style={{objectFit: "contain"}}
                    loading='lazy'
                    quality={90}
                    className="imgshadow"
                    />
                </div>
                <div className="parallaxlayer midlayer" id="medicinebundle">
                    <motion.div 
                        variants={variantstxt}
                        initial={'hidden'}
                        whileInView={'visible'}
                        transition={{duration: 1.2, ease: "easeInOut"}}
                        className="itemplacementMid"
                    >
                        <div className="apptxtTitlesW">
                            <h1>
                                Medicine Bundle
                            </h1>
                            
                        </div>
                    </motion.div>
                </div>
                <div className="parallaxlayer startlayer">
                    <div>
                        <motion.div 
                            variants={variantstxt}
                            initial={'hidden'}
                            whileInView={'visible'}
                            transition={{duration: 1.2, ease: "easeInOut"}}
                            className="contpaneltxtC"
                        >
                            <div className="apptxtFrontW mgntop40">
                                <h1>
                                    The Medicine Bundle we are creating
                                    represents the wealth of knowledge obtained from our deep connection 
                                    to the land, and our sense of kinship with
                                    all living things.
                                </h1> 
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className="`GroupParallax parallaxgroupS">
                <div className="parallaxspacer"/>
            </div>
            {/* bkg change end */}
            <div className='GroupParallax parallaxgroup'>
                <div className="parallaxlayer baselayer">
                    <Image 
                        src={SweetgrassPrep}
                        alt="turmoil"
                        fill
                        style={{objectFit: "contain"}}
                        loading='lazy'
                        quality={90}
                        className="imgshadow"
                    />
                </div>
                <div className="parallaxlayer startlayer">
                    <motion.div 
                        variants={variantstxt}
                        initial={'hidden'}
                        whileInView={'visible'}
                        transition={{duration: 1.2, ease: "easeInOut"}}
                        className="contpaneltxtC"
                    >
                        <div className="apptxtFrontW">
                            <h1>
                                Each of the items in this bundle has a specific purpose.
                            </h1> 
                            <h1>
                                Together they bring to life the essence of who we are as a people.
                            </h1> 
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className='GroupParallax parallaxgroup'>
                <div className="parallaxlayer midlayer">
                    <motion.div 
                        variants={variantstxt}
                        initial={'hidden'}
                        whileInView={'visible'}
                        transition={{duration: 1.2, ease: "easeInOut"}}
                        className="contpaneltxtC"
                    >
                        <div className="apptxtFrontW">
                            <h1>
                                Teachings,
                            </h1>
                                
                            <h1 className="mgntop10">
                                Ceremonies & Songs,
                            </h1>

                            <h1 className="mgntop10">
                                Language, 
                            </h1>

                            <h1 className="mgntop10">
                                Self- Identity, 
                            </h1>
                            
                            <h1 className="mgntop10">
                                History of Our People ,
                            </h1>
                            
                            <h1 className="mgntop10">
                                Medicines on the Land
                            </h1>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className='GroupParallax parallaxgroupS'>
                <div className="parallaxlayer farlayer">
                    <motion.div 
                        variants={variantsimg} 
                        initial={'hidden'}
                        whileInView={'visible'}
                        transition={{duration: 1.2, ease: "easeInOut"}}
                        className="contpanelimgC"
                    >
                        <Image 
                            src="/PrayerMile20II.jpg" 
                            width={540} 
                            height={360}
                            style={{objectFit: "cover"}}
                            loading='lazy'
                            quality={90}
                            alt="Artist"
                        />
                    </motion.div>
                </div>
            </div>
            <div className='GroupParallax parallaxgroupS'>
                <div className="parallaxspacer"/>
            </div>
            <div className='GroupParallax parallaxgroupS'>
                <div className="parallaxlayer baselayer">
                    <Image
                        src={BundlePrep}
                        alt="bundle"
                        fill
                        style={{objectFit: "contain"}}
                        loading='lazy'
                        quality={90}
                        className="imgshadow"
                    />
                </div>
                <div className="parallaxlayer farlayer">
                        <motion.div
                            variants={variantstxt}
                            initial={'hidden'}
                            whileInView={'visible'}
                            transition={{duration: 1, ease: "easeInOut"}}
                            className="contpaneltxtC"
                        >
                            <div className="apptxtFrontW">
                                <h1>
                                    Now The Work Begins
                                </h1>
                            </div>
                        </motion.div>
                </div>
            </div>
            {/* changeOut */}
            <div className='GroupParallax parallaxgroupS'>
                <div className="parallaxspacer"/>
            </div>
            <div className="GroupParallax parallaxgroupS">
                <div className="parallaxlayer startlayer">
                        <motion.div 
                        variants={variantstxt}
                        initial={'hidden'}
                        whileInView={'visible'}
                        transition={{duration: 1.2, ease: "easeInOut"}}
                            className="itemplacementMid"
                        >
                            <div className="apptxtFrontW">
                                <h1>
                                    Right from the onset in the later part of April 2016,
                                    <br/>
                                    this project was considered a 
                                    living document.
                                </h1>
                            
                                <h1>
                                    Its development has undergone many changes, 
                                    <br/>bringing forth fruitful learnings. 
                                </h1>
                            </div>
                        </motion.div>
                </div>
            </div>
            {/* artist and pics */}
            <div className='GroupParallax parallaxgroupS'>
                <div className="parallaxlayer startlayer">
                    <motion.div 
                        variants={variantstxt}
                        initial={'hidden'}
                        whileInView={'visible'}
                        transition={{duration: 1.2, ease: "easeInOut"}}
                        className="contpaneltxtA"
                    >
                        <div className="apptxtFrontW">
                            <h1>
                                The primary focus of the project<br/> involves
                                <br/> a series of paintings<br/> that bring the 
                                teachings to life
                            </h1>  
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className='GroupTop parallaxgroupS'>
                <div className="parallaxlayer caplayer">
                    <div className='flexpaneldisplay'>
                        <div className='topLayeritembtn' id='artprofileT'>
                            <Link href="/pages/ArtistProfileT" className="apptextB" style={{textDecoration:'none'}}>
                                <Image
                                    src="/jasonLucasART.jpg"
                                    alt="MenuBKG"
                                    width={150}
                                    height={150}
                                    quality={90}
                                    style={{paddingTop:"12%"}}
                                />
                                <h1>Artist Profile</h1>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="GroupParallax parallaxgroupXS">
                <div className="parallaxspacer"/>
            </div>
            {/* project name today */}
            <div className="GroupParallax parallaxgroupS">
                <div className="parallaxlayer midlayer">
                    <motion.div 
                        variants={variantstxt}
                        initial={'hidden'}
                        whileInView={'visible'}
                        transition={{duration: 1.2, ease: "easeInOut"}}
                        className="itemplacementMid"
                    >
                        <div className="apptxtFrontW">
                            <h1>
                                Today the project is known as 
                            </h1>
                        </div>
                        <div className="apptxtFrontW">
                            <h1>
                                WE-PEH-KEH-WEH-MAH-KANA
                            </h1>
                        </div>

                        <div className="apptxtFrontW">
                            <h1>
                                They Are Coming Home 
                            </h1>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className='GroupTop parallaxgroupS'>
                <div className="parallaxlayer startlayer flexpaneldisplay">
                    <div className="topLayeritemVid">
                        <div className="vidcontainer33">
                            <iframe src="https://player.vimeo.com/video/306814037?h=910c1e5f5f"
                                width="720" 
                                height="405"
                                id="Video2"
                                style={{border: "none"}}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* sharing the knowledge */}
            <div className="GroupParallax parallaxgroupXS">
                <div className="parallaxspacer"/>
            </div>
            <div className='GroupParallax parallaxgroup'>
                <div className="parallaxlayer baselayer">
                    <Image
                        src={Teacher}
                        alt="sharing"
                        fill
                        style={{objectFit: "contain"}}
                        loading='lazy'
                        quality={90}
                        className="imgshadow"
                    />
                </div>
                <div className="parallaxlayer startlayer flexpaneldisplay">
                    <div className="apptxtTitlesW">
                        <h1>
                            Sharing the Knowledge 
                        </h1>
                    </div>
                </div>
            </div>
            {/* collect knoledge keepers  */}
            <div className="GroupParallax parallaxgroupS">
                <div className="parallaxlayer startlayer">
                    <div className="contentpanel">
                        <motion.div 
                            variants={variantstxt}
                            initial={'hidden'}
                            whileInView={'visible'}
                            transition={{duration: 1.2, ease: "easeInOut"}}
                            className="contpaneltxtC"
                        >
                            <div className="apptxtFrontW">
                                <h1>
                                    Gatherings were held to capture the essence of the
                                    teachings project and all that it entails. 
                                </h1>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className="GroupParallax parallaxgroup">
                <div className="parallaxlayer baselayer">
                    <Image
                        src={PassKnwldgeBKG}
                        alt="GatheringOpen"
                        fill
                        style={{objectFit: "contain"}}
                        loading='lazy'
                        quality={90}
                        className="imgshadow"
                    />
                </div>
                <div className="parallaxlayer startlayer">
                        <motion.div 
                            variants={variantstxt}
                            initial={'hidden'}
                            whileInView={'visible'}
                            transition={{duration: 1.2, ease: "easeInOut"}}
                            className="contpaneltxtB mgntop10"
                        >
                            <div className="apptxtFrontW">
                                <h1>
                                    The invited guests shared their life/work 
                                    experiences and life stories, 
                                    pertaining specifically to culture, and customary ways.
                                </h1>
                            </div>
                        </motion.div>
                </div>
            </div>
            <div className='GroupParallax parallaxgroup'>
                <div className="parallaxlayer startlayer">
                    <div className="flexpaneldisplay">
                        <div className="apptxtFrontW">
                            <h1>
                                Gathering the Knowledge Keepers 
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="GroupParallax parallaxgroup">
                <div className="parallaxlayer baselayer">
                    <motion.div 
                        variants={variantsimg} 
                        initial={'hidden'}
                        whileInView={'visible'}
                        transition={{duration: 1.2, ease: "easeInOut"}}
                        className="contpanelimgA"
                    >
                        <Image 
                            src="/Drummersong.jpg" 
                            width={405} 
                            height={270}
                            style={{objectFit: "contain"}}
                            alt="GatheringOpen"
                        />
                    </motion.div>
                </div>
                <div className="parallaxlayer midlayer">
                    <motion.div 
                        variants={variantsimg} 
                        initial={'hidden'}
                        whileInView={'visible'}
                        transition={{duration: 1.2, ease: "easeInOut"}}
                        className="contpanelimgB"
                    >
                        <Image 
                            src="/KnwdgeKeeperI.jpg" 
                            width={405} 
                            height={270}
                            style={{objectFit: "contain"}}
                            alt="GatheringOpen"
                        />
                    </motion.div>
                </div>
            </div>
            <div className="GroupParallax parallaxgroup">
                <div className="parallaxlayer farlayer">
                    <motion.div 
                        variants={variantsimg} 
                        initial={'hidden'}
                        whileInView={'visible'}
                        transition={{duration: 1.2, ease: "easeInOut"}}
                        className="contpanelimgA"
                    >
                        <Image 
                            src="/KnwdgeKeeperIII.jpg" 
                            width={405} 
                            height={270}
                            style={{objectFit: "contain"}}
                            alt="GatheringOpen"
                        />
                    </motion.div>
                </div>
                <div className="parallaxlayer startlayer">
                    <motion.div 
                        variants={variantsimg} 
                        initial={'hidden'}
                        whileInView={'visible'}
                        transition={{duration: 1.2, ease: "easeInOut"}}
                        className="contpanelimgB"
                    >
                        <Image 
                            src="/honorkeepersII.jpg" 
                            width={405} 
                            height={270}
                            style={{objectFit: "contain"}}
                            alt="Gatheringthompson"
                        />
                    </motion.div>
                </div>
            </div>
            <div className="GroupParallax parallaxgroupS">
                <div className="parallaxspacer"/>
            </div>
            <div className="GroupParallax parallaxgroupS">
                <div className="parallaxlayer farlayer">
                    <motion.div 
                        variants={variantsimg} 
                        initial={'hidden'}
                        whileInView={'visible'}
                        transition={{duration: 1.2, ease: "easeInOut"}}
                        className="contpanelimgC"
                    >
                        <Image 
                            src="/thompson11.jpg" 
                            width={405} 
                            height={270}
                            style={{objectFit: "contain"}}
                            alt="GatheringOpen"
                        />
                    </motion.div>
                </div>
            </div>
            {/* gathering on the land */}
            <div className="GroupParallax parallaxgroup">
                <div className="parallaxlayer startlayer">
                    <motion.div 
                        variants={variantstxt}
                        initial={'hidden'}
                        whileInView={'visible'}
                        transition={{duration: 1.2, ease: "easeInOut"}}
                        className="contpaneltxtB"
                        style={{marginTop: "20%"}}
                    >
                        <div className="apptxtFrontW">
                            <h1>
                                Gatherings On the Land
                            </h1>
                        </div>
                    </motion.div>
                </div>
                <div className="parallaxlayer baselayer">
                    <Image
                        src={Landgathering}
                        alt="GatheringOpen"
                        fill
                        style={{objectFit: "contain"}}
                        loading='lazy'
                        quality={90}
                        className="imgshadow"
                    />
                </div>
            </div>
           <div className="GroupParallax parallaxgroupS">
                <div className="parallaxspacer"/>
           </div>
           <div className="GroupParallax parallaxgroup">
                <div className="parallaxlayer baselayer">
                    <motion.div 
                        variants={variantsimg} 
                        initial={'hidden'}
                        whileInView={'visible'}
                        transition={{duration: 1.2, ease: "easeInOut"}}
                        className="contpanelimgA"
                    >
                        <Image 
                            src="/Mile20open.jpg" 
                            width={405} 
                            height={270}
                            style={{objectFit: "cover"}}
                            loading='lazy'
                            alt="GatheringOpen"
                        />
                    </motion.div>
                </div>
                <div className="parallaxlayer startlayer">
                    <motion.div 
                        variants={variantsimg} 
                        initial={'hidden'}
                        whileInView={'visible'}
                        transition={{duration: 1.2, ease: "easeInOut"}}
                        className="contpanelimgB"
                    >
                        <Image 
                            src="/Mile20II.jpg" 
                            width={405} 
                            height={270}
                            style={{pbjectFit: "cover"}}    
                            loading='lazy'
                            alt="GatheringOpen"
                        />
                    </motion.div>
                </div>
            </div>
           <div className="GroupParallax parallaxgroup">
                <div className="parallaxlayer midlayer">
                    <div className="contpaneltxtC">
                        <div className='apptxtFrontW'>
                            <h1>
                                Braiding Our Medicine Journey 
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="GroupParallax parallaxgroupS">
                <div className="parallaxlayer baselayer">
                    <motion.div 
                        variants={variantsimg} 
                        initial={'hidden'}
                        whileInView={'visible'}
                        transition={{duration: 1.2, ease: "easeInOut"}}
                        className="contpanelimgC"
                    >
                        <Image 
                            src="/GatheringsIIBKG.jpg" 
                            width={510} 
                            height={360}
                            style={{objectFit: "cover"}} 
                            loading='lazy'   
                            alt="GatheringOpen"
                        />
                    </motion.div>
                </div>
            </div>
            <div className="GroupParallax parallaxgroupS">
                <div className="parallaxlayer startlayer">
                    <div className="contpaneltxtC">
                        <div className='apptxtFrontW'>
                            <h1>
                                Building and cementing relationships with nature<br/> 
                                and its counterparts,<br/> and with the different 
                                <br/>races 
                                of humanity,<br/>is key to the natural laws of living 
                                the good life.
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='GroupTop parallaxgroup'>
                <div className="parallaxlayer caplayer">
                    <div className='flexpaneldisplay'>
                        <div className='topLayeritembtn'>
                            <Link href="/pages/MedicineJourneyT" className="apptextB" style={{textDecoration:'none'}}>
                                <Image
                                    src="/Mile20IV.jpg"
                                    alt="MenuBKG"
                                    width={300}
                                    height={200}
                                    quality={90}
                                    style={{paddingTop:"12%"}}
                                />
                                <h1>Braiding Our Medicine Journey</h1>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="GroupParallax parallaxgroupS">
                <div className="parallaxlayer farlayer">
                    <motion.div 
                        variants={variantstxt}
                        initial={'hidden'}
                        whileInView={'visible'}
                        transition={{duration: 1.2, ease: "easeInOut"}}
                        className="contpaneltxtC"
                    >
                        <div className="apptxtTitlesW">
                            <h1>
                                EKOSI
                            </h1>
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
                        <div className="apptxtTitlesW">
                            <h1>
                                Masi cho
                            </h1>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
        </>
    )
}




