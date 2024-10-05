'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import Image from "next/image";
import Link from "next/link";
import Iframe from 'react-iframe';
import ComehomeBKG from '../../../public/CominghomeM.jpg';
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
const BKGAudio = dynamic(() => import('./BKGAudio'), { ssr: false });
function CominghomecontentM(){
    return(
        <>
        {/* header start */}
        <div className="audiocontain">
            <BKGAudio/>
        </div>
        <div className="hamlink">
            <HamburgerMenu/>
        </div>
        <div className="bkgcontainer">
            <Image
                src={ComehomeBKG}
                alt="ComingHomeBKG"
                fill
                priority
                quality={90}
            />
        </div>
        {/* header end */}
        <div className='appcontainer'>
            {/* intro */}
            <div className='GroupParallax parallaxgroupS'>
                <div className="parallaxlayer farlayer">
                    <div className="flexpaneldisplay" style={{height:"100%"}}>
                        <div className="apptxtFrontW">
                            <h1>
                                WE-PEH-KEH-<br/>WEH-MAH-KANA
                            </h1>
                        </div>   
                    </div>
                </div>
                <div className="parallaxlayer startlayer">
                    <div className='flexpaneldisplay' style={{height:"100%"}}>
                        <div className="apptxtFrontW" style={{marginTop:"60%"}}>
                            <h1>
                                They Are Coming Home
                            </h1>
                        </div>    
                    </div>        
                </div>
            </div>
           <div className='GroupParallax parallaxgroupS'>
                <div className="parallaxspacer"/>
           </div>
            {/* Top segment */}            
            <div className="GroupParallax parallaxgroupS">
                <div className="parallaxlayer baselayer">
                    <div className="itemplacementMid">
                        <div className="apptxtFrontW">
                            <h1>
                                A Wellness Model
                            </h1>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className='GroupParallax parallaxgroupS'>
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
            <div className='GroupParallax parallaxgroupS'>
                <div className="parallaxspacer"/>
            </div>
            <div className='GroupTop parallaxgroupS'>
                <div className="topLayer flexpaneldisplay">
                    <div className='circlecontainteachMob'>
                        <div className="quarterul">
                            <div className='qulpos'>
                                <Link href="/pages/AboutUsM" className="apptextB" style={{textDecoration:'none'}}>
                                    <Image
                                        src="/Eagleicon.png"
                                        alt="MenuBKG"
                                        width={60}
                                        height={60}
                                        loading='lazy'
                                        quality={90}
                                        style={{marginLeft: "10%", marginTop: "25%"}}
                                    />
                                    <h2>About Program</h2>
                                </Link>
                            </div>
                        </div>
                        <div className="quarterur">
                            <div className='qurpos'>
                                <Link href="/pages/LivingDocM" className="apptextB" style={{textDecoration:'none'}}>
                                    <Image
                                        src="/TreeofLifeicon.png"
                                        alt="MenuBKG"
                                        width={60}
                                        height={60}
                                        loading='lazy'
                                        quality={90}
                                        style={{marginRight: "10%", marginTop:"25%"}}
                                    />
                                    <h2>Living Document</h2>
                                </Link>
                            </div>
                        </div>
                        <div className="quarterll">
                            <div className='qllpos'>
                                <Link href="/pages/TeachHomeM" className="apptextB" style={{textDecoration:'none'}}>
                                    <h2>Teachings</h2>
                                    <Image
                                        src="/Teachingsicon.png"
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
                                <Link href="/pages/MediaHomeD" className="apptextB" style={{textDecoration:'none'}}>
                                    <h2>Media Library</h2>
                                    <Image
                                        src="/Wolficon.png"
                                        alt="MenuBKG"
                                        width={60}
                                        height={60}
                                        loading='lazy'
                                        quality={90}
                                        style={{marginRight: "8%",marginBottom:"25%"}}
                                    />
                                </Link>
                            </div>    
                        </div>   
                    </div>
                </div>
            </div>
            <div className='GroupParallax parallaxgroupS'>
                <div className="parallaxspacer"/>
            </div>
            <div className='GroupParallax parallaxgroupS'>
                <div className="parallaxlayer baselayer">
                    <div className='itemplacementMid'>
                        <div className="apptxtFrontW">
                            <h1>
                                Colonization had a devastating effect on our people.
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='GroupParallax parallaxgroupS'>
                <div className="parallaxlayer midlayer">
                    <div className='itemplacementMid'>
                        <div className="apptxtFrontW">
                            <h1>
                                This initiative was born from the dilemma of our people
                                who are suffering on the streets of the cities and our 
                                First Nations.
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='GroupParallax parallaxgroupXS'>
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
            <div className='GroupParallax parallaxgroupXS'>
                <div className="parallaxlayer midlayer">
                        <div className='contpaneltxtA'>
                            <div className="apptxtFrontW">
                                <h1>
                                    Indian Act
                                </h1>
                            </div>
                        </div>
                </div>
            </div>
            <div className='GroupParallax parallaxgroupXS'>
                <div className="parallaxlayer startlayer">
                        <div className='contpaneltxtB'>
                            <div className="apptxtFrontW">
                                <h1>
                                    Residential Schools
                                </h1>
                            </div>
                        </div>
                </div>
            </div>
            <div className='GroupParallax parallaxgroupXS'>
                <div className="parallaxlayer farlayer">
                        <div className='contpaneltxtA'>
                            <div className="apptxtFrontW">
                                <h1>
                                    Day Schools
                                </h1>
                            </div>
                        </div>
                </div>
            </div>
            <div className='GroupParallax parallaxgroupXS'>
                <div className="parallaxlayer midlayer">
                    <div className='itemplacementMid'>
                        <div className="apptxtFrontW">
                            <h1>
                                Loss of language, culture and spirituality is the primary result of
                                the imposed assimilation process.
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='GroupParallax parallaxgroupXS'>
                <div className="parallaxspacer"/>
            </div>
            <div className="GroupParallax parallaxgroupXS">
                <div className="parallaxlayer startlayer">
                        <div className='contpaneltxtB'>
                            <div className="apptxtFrontW">
                                <h1>
                                    Child Welfare Act
                                </h1>
                            </div>
                        </div>
                </div>
            </div>
            <div className="GroupParallax parallaxgroupXS">
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
                        <div className="contpaneltxtA">
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
          
            <div className='GroupParallax parallaxgroupS'>
                <div className="parallaxspacer"/>
            </div>
            <div className='GroupTop parallaxgroupS'>
                <div className="parallaxlayer startlayer">
                    <div className="contentpanel">
                        <div className="vidcontainer2">
                            <div className="vidwrapper">
                                <Iframe url="https://player.vimeo.com/video/811032864?h=bb18723052"
                                    width="100%"
                                    height="100%"
                                    id="Video1"
                                    className="vidplayer"
                                    style={{border: "none"}}
                                    loading='lazy'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* trad knowledge works  */}
            <div className='GroupParallax parallaxgroupS'>
                <div className="parallaxspacer"/>
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
                        <div className="itemplacementMid">
                            <div className="apptxtTitlesW">
                                <h1>
                                    Teachings
                                </h1>
                            </div>
                        </div>
                </div>
            </div>
            <div className="GroupParallax parallaxgroupS">
                <div className="parallaxlayer startlayer">
                        <div className='itemplacementMid'>
                            <div className="apptxtFrontW">  
                                <h1>
                                    Mounting evidence shows a high success rate in the
                                    rehabilitation and healing of our 
                                    people, when we use our customary ways of life.
                                </h1>
                            </div>
                        </div>
                </div>
            </div>
            {/* bundle origins */}
            <div className='GroupParallax parallaxgroupS'>
                <div className="parallaxspacer"/>
            </div>
            <div className='GroupParallax parallaxgroup'>
                <div className="parallaxlayer midlayer">
                        <div className="itemplacementMid">
                            <div className="apptxtFrontW">
                                <h1>
                                    It was deemed necessary to create something to
                                    help reconnect to the teachings <br/>
                                    for future generations. 
                                </h1>
                            </div>
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
                        <div className="itemplacementMid">
                            <div className="apptxtFrontW">
                                <h1>
                                    Medicine Bundle
                                </h1>
                                
                            </div>
                        </div>
                </div>
            </div>
            <div className='GroupParallax parallaxgroupS'>
                <div className="parallaxlayer startlayer">
                        <div className="itemplacementMid">
                            <div className="apptxtFrontW">
                                <h1>
                                    The Medicine Bundle we are creating
                                    represents the wealth of knowledge obtained from our deep connection 
                                    to the land, and our sense of kinship with
                                    all living things.
                                </h1> 
                            </div>
                        </div>
                </div>
            </div>
            <div className='GroupParallax parallaxgroupXS'>
                <div className="parallaxspacer"/>
            </div>
            {/* bkg change end */}
            <div className='GroupParallax parallaxgroupS'>
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
            </div>
            <div className='GroupParallax parallaxgroupS'>
                <div className="parallaxlayer startlayer">
                        <div className="itemplacementMid">
                            <div className="apptxtFrontW">
                                <h1>
                                    Each of the items in this bundle has a specific purpose.
                                </h1> 
                                <h1>
                                    Together they bring to life the essence of who we are as a people.
                                </h1> 
                            </div>
                        </div>
                </div>
            </div>
            <div className="`GroupParallax parallaxgroupS">
                <div className="parallaxspacer"/>
            </div>
            <div className='GroupParallax parallaxgroup'>
                <div className="parallaxlayer farlayer">
                    <div className="contpanelimgC">
                        <Image 
                            src="/PrayerMile20II.jpg" 
                            width={360} 
                            height={240}
                            style={{objectFit: "contain"}}
                            loading='lazy'
                            quality={90}
                            alt="Artist"
                        />
                    </div>
                </div>
            </div>
            <div className='GroupParallax parallaxgroup'>
                <div className="parallaxlayer baselayer">
                    <div className="itemplacementMid">
                        <div className="apptxtFrontW">
                            <h1>
                                Teachings
                            </h1>
                                
                            <h1 className="mgntop10">
                                Ceremonies & Songs
                            </h1>

                            <h1 className="mgntop10">
                                Language
                            </h1>

                            <h1 className="mgntop10">
                                Self- Identity 
                            </h1>
                            
                            <h1 className="mgntop10">
                                History of Our People
                            </h1>
                            
                            <h1 className="mgntop10">
                                Medicines on the Land
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="GroupParallax parallaxgroupS">
                <div className="parallaxspacer"/>
            </div> */}
            <div className='GroupParallax parallaxgroupXS'>
                <div className="parallaxlayer midlayer">
                        <div className="itemplacementMid">
                            <div className="apptxtFrontW">
                                <h1>
                                    Now The Work Begins
                                </h1>
                            </div>
                        </div>
                    </div>
            </div>
{/* changeOut */}
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
            </div>
            <div className='GroupParallax parallaxgroupS'>
                <div className="parallaxspacer"/>
            </div>
            <div className="GroupParallax parallaxgroupS">
                <div className="parallaxlayer startlayer">
                        <div className="itemplacementMid">
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
                        </div>
                </div>
            </div>
            {/* artist and pics */}
            <div className='GroupParallax parallaxgroupS'>
                <div className="parallaxspacer"/>
            </div>
            <div className='GroupTop parallaxgroup'>
                <div className="parallaxlayer midlayer">
                        <div className="itemplacementMid">
                            <div className="apptxtFrontW">
                                <h1>
                                    The primary focus of the project<br/> involves
                                    <br/> a series of paintings<br/> that bring the 
                                    teachings to life
                                </h1>  
                            </div>
                        </div>
                </div>
                <div className="parallaxlayer caplayer">
                        <div className='topLayerProfileM'>
                            <Link href="/pages/ArtistProfileM" className="apptext" style={{textDecoration:'none'}}>
                                <Image
                                    src="/jasonLucasART.jpg"
                                    alt="MenuBKG"
                                    width={150}
                                    height={150}
                                    quality={90}
                                />
                                <h1>Artist Profile</h1>
                            </Link>
                        </div>
                </div>
            </div>
            <div className="GroupParallax parallaxgroupS">
                <div className="parallaxspacer"/>
            </div>
            {/* project name today */}
            <div className="GroupParallax parallaxgroup">
                <div className="parallaxlayer midlayer">
                    <div className="itemplacementMid">
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
                    </div>
                </div>
            </div>
            <div className='GroupTop parallaxgroupS'>
                <div className="parallaxlayer startlayer">
                        <div className="vidcontainer2">
                            <div className="vidwrapper">
                                <Iframe url="https://player.vimeo.com/video/306814037?h=910c1e5f5f"
                                    width="100%"
                                    height="100%"
                                    id="Video2"
                                    className="vidplayer"
                                    style={{border: "none"}}
                                    loading='lazy'
                                />
                            </div>
                        </div>
                </div>
            </div>
           
            {/* sharing the knowledge */}
            <div className='GroupParallax parallaxgroupS' id="gatherings">
                <div className="parallaxlayer baselayer mgntop20">
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
                <div className="parallaxlayer startlayer">
                    <div className="flexpaneldisplay mgntop10" id="watchgather1D">
                        <div className="apptxtFrontW">
                            <h1>
                                Sharing the Knowledge 
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='GroupParallax parallaxgroupS'>
                <div className="parallaxspacer"/>
            </div>
            {/* collect knoledge keepers  */}
            <div className="GroupParallax parallaxgroupXS">
                <div className="parallaxlayer startlayer">
                        <div className="itemplacementMid">
                            <div className="apptxtFrontW">
                                <h1>
                                    Gatherings were held to capture the essence of the
                                    teachings project and all that it entails. 
                                </h1>
                            </div>
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
            </div>

            <div className="GroupParallax parallaxgroupS">
                <div className="parallaxlayer midlayer">
                    <div className="itemplacementMid">
                        <div className="apptxtFrontW">
                            <h1>
                                The invited guests shared their life/work 
                                experiences and life stories, 
                                pertaining specifically to culture, and customary ways.
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='GroupParallax parallaxgroupXS'>
                <div className="parallaxspacer"/>
            </div>
            <div className='GroupParallax parallaxgroupS'>
                <div className="parallaxlayer startlayer">
                    <div className="flexpaneldisplay" id="watchgather1D">
                        <div className="apptxtFrontW">
                            <h1>
                                Gathering the Knowledge Keepers 
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="GroupParallax parallaxgroupS">
                <div className="parallaxlayer baselayer">
                    <div className="contpanelimgC">
                        <Image 
                            src="/Drummersong.jpg" 
                            width={360} 
                            height={240}
                            style={{objectFit: "cover"}}
                            alt="GatheringOpen"
                        />
                    </div>
                </div>
            </div>

            <div className="GroupParallax parallaxgroupS">
                <div className="parallaxlayer midlayer">
                    <div className="contpanelimgC">
                        <Image 
                            src="/KnwdgeKeeperI.jpg" 
                            width={360} 
                            height={240}
                            style={{objectFit: "cover"}}
                            alt="GatheringOpen"
                        />
                    </div>
                </div>
            </div>
            <div className='GroupParallax parallaxgroupXS'>
                <div className="parallaxspacer"/>
            </div>
            <div className="GroupParallax parallaxgroupS">
                <div className="parallaxlayer farlayer">
                    <div className="contpanelimgC">
                        <Image 
                            src="/KnwdgeKeeperIII.jpg" 
                            width={360} 
                            height={240}
                            style={{objectFit: "cover"}}
                            alt="GatheringOpen"
                        />
                    </div>
                </div>
            </div>
            <div className="GroupParallax parallaxgroupS">
                <div className="parallaxlayer startlayer">
                    <div className="contpanelimgC">
                        <Image 
                            src="/honorkeepersII.jpg" 
                            width={360} 
                            height={240}
                            style={{objectFit: "cover"}}
                            alt="Gatheringthompson"
                        />
                    </div>
                </div>
            </div>
            <div className="GroupParallax parallaxgroupXS">
                <div className="parallaxspacer"/>
            </div>
            <div className="GroupParallax parallaxgroupS">
                <div className="parallaxlayer farlayer">
                    <div className="contpanelimgC">
                        <Image 
                            src="/thompson11.jpg" 
                            width={360} 
                            height={240}
                            style={{objectFit: "cover"}}
                            alt="GatheringOpen"
                        />
                    </div>
                </div>
            </div>
            {/* <div className="GroupParallax parallaxgroupXS">
                <div className="parallaxspacer"/>
            </div> */}
            {/* gathering on the land */}
           
            <div className="GroupParallax parallaxgroup">
                <div className="parallaxlayer farlayer">
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
                <div className="parallaxlayer startlayer">
                        <div className="contpaneltxtC">
                            <div className="apptxtFrontW">
                                <h1>
                                    Gatherings On the Land
                                </h1>
                            </div>
                        </div>
                </div>
            </div>
           <div className="GroupParallax parallaxgroupS">
                <div className="parallaxspacer"/>
           </div>
           <div className="GroupParallax parallaxgroupS">
                <div className="parallaxlayer baselayer">
                    <div className="contpanelimgC">
                        <Image 
                            src="/Mile20open.jpg" 
                            width={360} 
                            height={240}
                            style={{objectFit: "cover"}}
                            loading='lazy'
                            alt="GatheringOpen"
                        />
                    </div>
                </div>
            </div>
            <div className="GroupParallax parallaxgroupS">
                <div className="parallaxlayer startlayer">
                    <div className="contpanelimgC">
                        <Image 
                            src="/Mile20II.jpg" 
                            width={360} 
                            height={240}
                            style={{pbjectFit: "cover"}}    
                            loading='lazy'
                            alt="GatheringOpen"
                        />
                    </div>
                </div>
            </div>
            <div className="GroupParallax parallaxgroupS">
                <div className="parallaxspacer"/>
            </div>
            <div className="GroupParallax parallaxgroupS">
                <div className="parallaxlayer midlayer">
                    <div className="itemplacementMid">
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
                    <div className="contpanelimgC">
                        <Image 
                            src="/GatheringsIIBKG.jpg" 
                            width={360} 
                            height={240}
                            style={{objectFit: "contain"}} 
                            loading='lazy'   
                            alt="GatheringOpen"
                        />
                    </div>
                </div>
            </div>
            <div className="GroupParallax parallaxgroupS">
                <div className="parallaxlayer startlayer">
                    <div className="itemplacementMid">
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
            <div className="GroupParallax parallaxgroupXS">
                <div className="parallaxspacer"/>
            </div>
            <div className='GroupTop parallaxgroup'>
                <div className="parallaxlayer caplayer">
                    <div className='flexpaneldisplay'>
                        <div className='topLayeritembtn'>
                            <Link href="/pages/MedicineJourneyM" className="apptextB" style={{textDecoration:'none'}}>
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
                    <div className="contpaneltxtC">
                        <div className='apptxtTitlesW'>
                            <h1>
                                Ekosi
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="parallaxlayer startlayer">
                    <div className="contpaneltxtC mgntop20">
                        <div className='apptxtTitlesW'>
                            <h1>
                                Masi cho
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default CominghomecontentM;




