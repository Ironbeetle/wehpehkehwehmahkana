'use client';
import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {motion} from 'framer-motion';
import HamburgerMenu from '../components/HamburgerMenu';
import { MdCopyright } from "react-icons/md";
import TeachHomeDBKG from "../../../public/TradTeachingsBKG.jpg";
const VideogalleryD = () => {
    const handleButtonClick = (videoUrl) => {
        const iframe = document.getElementById('iframeId');
        iframe.src = videoUrl;
    };
    return (
        <>
            <div className="hamlink">
            <HamburgerMenu/>
            </div>
            <div className="bkgcontainer">
                <video autoPlay className='videobkg'>
                        <source src="/webm/GalleryversionD.webm" type="video/webm; codecs=vp9"/>
                    </video>
                </div>
            <motion.div 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1, delay: 0.5, ease: 'easeInOut'}}
                className='vidgallerycontainer'
            >
                <div className='row2fr1fr'>
                   <div>
                        <div className='flexpaneldisplay' style={{height:"100dvh"}}>
                            <iframe 
                                id="iframeId"
                                src="https://player.vimeo.com/video/306814037?h=910c1e5f5f&portrait=0" 
                                width="720" 
                                height="480"
                                style={{border:'none'}} 
                            />
                            <div className='flexpaneldisplayR copyright'>
                                <p>Copyright&nbsp;</p> <MdCopyright/><p>&nbsp;2023&nbsp;</p><p>All Rights Reserved</p>
                            </div>
                        </div>
                   </div>
                   <div className='appcontainer' style={{height:"100dvh"}}>
                        <div className='playlist'>
                            <div className='listitem'>
                                <div className='apptext'>
                                    <h2>Project Documentary</h2>
                                    <h3>Ininew, Dene, Emglish</h3>
                                </div>
                            </div>
                            <div className='listitem'>
                                <div className='row1fr2fr'>
                                    <Image 
                                        src="/thumbnails/Jeffbrightnose.jpg" 
                                        alt="medicineIMGHere" 
                                        width={150} 
                                        height={150}
                                    />
                                    <button onClick={() => handleButtonClick('https://player.vimeo.com/video/306814037?h=910c1e5f5f&portrait=0')}
                                        style={{width:'100%', height:'100%'}} id='video1'>
                                        <div className='apptext'>
                                            <h3>We Peh Keh Weh Mah Kana</h3>
                                            <p><span>PART 1&nbsp;&nbsp;</span>English, 59 minutes</p>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className='listitem'>
                                <div className='row1fr2fr'>
                                    <Image 
                                        src="/thumbnails/Projectvision.jpg" 
                                        alt="medicineIMGHere" 
                                        width={150} 
                                        height={150}
                                    />
                                    <button onClick={() => handleButtonClick('https://player.vimeo.com/video/811032864?h=bb18723052')}
                                        style={{width:'100%', height:'100%'}} id='video1'>
                                        <div className='apptext'>
                                            <h3>We Peh Keh Weh Mah Kana</h3>
                                            <p><span>PART 2&nbsp;&nbsp;</span>English, 40 minutes</p>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className='listitem'>
                                <div className='row1fr2fr'>
                                    <div>
                                        <Image 
                                            src="/thumbnails/DocumentaryC.jpg" 
                                            alt="medicineIMGHere" 
                                            width={150} 
                                            height={150}
                                        />
                                    </div>
                                    <div className='listhover'>
                                        <button onClick={() => handleButtonClick('https://player.vimeo.com/video/883426175?h=92595cd4e0')}
                                                style={{width:'100%', height:'100%'}} id='video2'>
                                            <div className='apptext'>
                                                <h3>We Peh Keh Weh Mah Kana</h3>
                                                <p><span>Ininew&nbsp;&nbsp;</span>Part 1, 100 minutes</p>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='listitem'>
                                <div className='row1fr2fr'>
                                    <div>
                                        <Image 
                                            src="/thumbnails/MaryLA.jpg" 
                                            alt="medicineIMGHere" 
                                            width={150} 
                                            height={150}
                                        />
                                    </div>
                                    <div className='listhover'>
                                        <button onClick={() => handleButtonClick('https://player.vimeo.com/video/887120200?h=94d60b0bf7&portrait=0')}
                                                style={{width:'100%', height:'100%'}} id='video2'>
                                            <div className='apptext'>
                                                <h3>We Peh Keh Weh Mah Kana</h3>
                                                <p><span>Ininew&nbsp;&nbsp;</span>Part 2, 65 minutes</p>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='listitem'>
                                <div className='row1fr2fr'>
                                    <div>
                                        <Image 
                                            src="/thumbnails/Victor2017B.jpg" 
                                            alt="medicineIMGHere" 
                                            width={150} 
                                            height={150}
                                        />
                                    </div>
                                    <div className='listhover'>
                                        <button onClick={() => handleButtonClick('https://player.vimeo.com/video/999498610?badge=0')}
                                                style={{width:'100%', height:'100%'}} id='video2'>
                                            <div className='apptext'>
                                                <h3>We Peh Keh Weh Mah Kana</h3>
                                                <p><span>Dene&nbsp;&nbsp;</span>Part 1, 72 minutes</p>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='listitem'>
                                <div className='row1fr2fr'>
                                    <div>
                                        <Image 
                                            src="/thumbnails/SarahSamuel.jpg" 
                                            alt="medicineIMGHere" 
                                            width={150} 
                                            height={150}
                                        />
                                    </div>
                                    <div className='listhover'>
                                        <button onClick={() => handleButtonClick('https://player.vimeo.com/video/999924532?h=a0d5f82360&portrait=0')}
                                                style={{width:'100%', height:'100%'}} id='video2'>
                                            <div className='apptext'>
                                                <h3>We Peh Keh Weh Mah Kana</h3>
                                                <p><span>Dene&nbsp;&nbsp;</span>Part 2, 50 minutes</p>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='listitem'>
                                <div className='apptext'>
                                    <h2>Project Artist</h2>
                                    <h3>Interview & Art Comments</h3>
                                </div>
                            </div>
                            <div className='listitem'>
                                <div className='row1fr2fr'>
                                    <div>
                                        <div>
                                            <Image 
                                                src="/thumbnails/Artist.jpg" 
                                                alt="medicineIMGHere" 
                                                width={150} 
                                                height={150}
                                            />
                                        </div>
                                    </div>
                                    <div className='apptextB'>
                                        <button onClick={() => handleButtonClick('https://player.vimeo.com/video/880766122?h=02af9af9d3')}
                                            style={{width:'100%', height:'100%'}} id='video8'>
                                            <div className='apptext'>
                                                <h3>Jasyn Lucas</h3>
                                                <p>English</p>
                                            </div>
                                    </button>
                                    </div>
                                </div>
                            </div>
                            <div className='listitem'>
                                <div className='row1fr2fr'>
                                    <div>
                                        <div>
                                            <Image 
                                                src="/thumbnails/Buffalo.jpg" 
                                                alt="buffalo" 
                                                width={150} 
                                                height={150}
                                            />
                                        </div>
                                    </div>
                                    <div className='apptextB'>
                                    <button onClick={() => handleButtonClick('https://player.vimeo.com/video/880765308?h=bf8670ba81')}
                                            style={{width:'100%', height:'100%'}} id='video8'>
                                            <div className='apptext'>
                                                <h3>Buffalo</h3>
                                                <p>English</p>
                                            </div>
                                    </button>
                                    </div>
                                </div>
                            </div>
                            <div className='listitem'>
                                <div className='row1fr2fr'>
                                    <div>
                                        <div>
                                            <Image 
                                                src="/thumbnails/TreeofLife.jpg"
                                                alt="medicineIMGHere" 
                                                width={150} 
                                                height={150}
                                            />
                                        </div>
                                    </div>
                                    <div className='apptextB'>
                                    <button onClick={() => handleButtonClick('https://player.vimeo.com/video/880766951?h=87dafdc6aa')}
                                            style={{width:'100%', height:'100%'}} id='video8'>
                                            <div className='apptext'>
                                                <h3>Tree of Life</h3>
                                                <p>English</p>
                                            </div>
                                    </button>
                                    </div>
                                </div>
                            </div>
                            <div className='listitem'>
                                <div className='row1fr2fr'>
                                    <div>
                                        <div>
                                            <Image 
                                                src="/thumbnails/Wind.jpg"
                                                alt="medicineIMGHere" 
                                                width={150} 
                                                height={150}
                                            />
                                        </div>
                                    </div>
                                    <div className='apptextB'>
                                    <button onClick={() => handleButtonClick('https://player.vimeo.com/video/880765219?h=c5e90e2e7f')}
                                            style={{width:'100%', height:'100%'}} id='video8'>
                                            <div className='apptext'>
                                                <h3>Wind</h3>
                                                <p>English</p>
                                            </div>
                                    </button>
                                    </div>
                                </div>
                            </div>
                            <div className='listitem'>
                                <div className='row1fr2fr'>
                                    <div>
                                        <div>
                                            <Image 
                                                src="/thumbnails/Tobacco.jpg"
                                                alt="medicineIMGHere" 
                                                width={150} 
                                                height={150}
                                            />
                                        </div>
                                    </div>
                                    <div className='apptextB'>
                                    <button onClick={() => handleButtonClick('https://player.vimeo.com/video/880766791?h=f56899034e')}
                                            style={{width:'100%', height:'100%'}} id='video8'>
                                            <div className='apptext'>
                                                <h3>Tobacco</h3>
                                                <p>English</p>
                                            </div>
                                    </button>
                                    </div>
                                </div>
                            </div>
                            <div className='listitem'>
                                <div className='row1fr2fr'>
                                    <div>
                                        <div>
                                            <Image 
                                                src="/thumbnails/Sasquatch.jpg"
                                                alt="medicineIMGHere" 
                                                width={150} 
                                                height={150}
                                            />
                                        </div>
                                    </div>
                                    <div className='apptextB'>
                                    <button onClick={() => handleButtonClick('https://player.vimeo.com/video/880766695?h=c4561f640b')}
                                            style={{width:'100%', height:'100%'}} id='video8'>
                                            <div className='apptext'>
                                                <h3>Sasquatch</h3>
                                                <p>English</p>
                                            </div>
                                    </button>
                                    </div>
                                </div>
                            </div>
                            <div className='listitem'>
                                <div className='row1fr2fr'>
                                    <div>
                                        <div>
                                            <Image 
                                                src="/thumbnails/Cedar.jpg"
                                                alt="cedar" 
                                                width={150} 
                                                height={150}
                                            />
                                        </div>
                                    </div>
                                    <div className='apptextB'>
                                    <button onClick={() => handleButtonClick('https://player.vimeo.com/video/880766607?h=1b6017d7de')}
                                            style={{width:'100%', height:'100%'}} id='video8'>
                                            <div className='apptext'>
                                                <h3>Cedar</h3>
                                                <p>English</p>
                                            </div>
                                    </button>
                                    </div>
                                </div>
                            </div>
                            <div className='listitem'>
                                <div className='row1fr2fr'>
                                    <div>
                                        <div>
                                            <Image 
                                                src="/thumbnails/Loon.jpg"
                                                alt="loon" 
                                                width={150} 
                                                height={150}
                                            />
                                        </div>
                                    </div>
                                    <div className='apptextB'>
                                    <button onClick={() => handleButtonClick('https://player.vimeo.com/video/880766559?h=27a8fa2f61')}
                                            style={{width:'100%', height:'100%'}} id='video8'>
                                            <div className='apptext'>
                                                <h3>Loon</h3>
                                                <p>English</p>
                                            </div>
                                    </button>
                                    </div>
                                </div>
                            </div>
                            <div className='listitem'>
                                <div className='row1fr2fr'>
                                    <div>
                                        <div>
                                            <Image 
                                                src="/thumbnails/Fire.jpg"
                                                alt="fire" 
                                                width={150} 
                                                height={150}
                                            />
                                        </div>
                                    </div>
                                    <div className='apptextB'>
                                    <button onClick={() => handleButtonClick('https://player.vimeo.com/video/880765514?h=5da08630de')}
                                            style={{width:'100%', height:'100%'}} id='video8'>
                                            <div className='apptext'>
                                                <h3>Fire</h3>
                                                <p>English</p>
                                            </div>
                                    </button>
                                    </div>
                                </div>
                            </div>
                            <div className='listitem'>
                                <div className='row1fr2fr'>
                                    <div>
                                        <div>
                                            <Image 
                                                src="/thumbnails/Butterfly.jpg"
                                                alt="butterfly" 
                                                width={150} 
                                                height={150}
                                            />
                                        </div>
                                    </div>
                                    <div className='apptextB'>
                                    <button onClick={() => handleButtonClick('https://player.vimeo.com/video/880765360?h=12e7d48248')}
                                            style={{width:'100%', height:'100%'}} id='video8'>
                                            <div className='apptext'>
                                                <h3>Butterfly</h3>
                                                <p>English</p>
                                            </div>
                                    </button>
                                    </div>
                                </div>
                            </div>
                            <div className='listitem'>
                                <div className='row1fr2fr'>
                                    <div>
                                        <div>
                                            <Image 
                                                src="/thumbnails/Creation.jpg"
                                                alt="creation" 
                                                width={150} 
                                                height={150}
                                            />
                                        </div>
                                    </div>
                                    <div className='apptextB'>
                                    <button onClick={() => handleButtonClick('https://player.vimeo.com/video/880764909?h=19af316879')}
                                            style={{width:'100%', height:'100%'}} id='video8'>
                                            <div className='apptext'>
                                                <h3>Creation</h3>
                                                <p>English</p>
                                            </div>
                                    </button>
                                    </div>
                                </div>
                            </div>
                            <div className='listitem'>
                                <div className='row1fr2fr'>
                                    <div>
                                        <div>
                                            <Image 
                                                src="/thumbnails/nation.jpg"
                                                alt="allnationsIMGHere" 
                                                width={150} 
                                                height={150}
                                            />
                                        </div>
                                    </div>
                                    <div className='apptextB'>
                                    <button onClick={() => handleButtonClick('https://player.vimeo.com/video/880766004?h=29fab3210c')}
                                            style={{width:'100%', height:'100%'}} id='video8'>
                                            <div className='apptext'>
                                                <h3>All Nations</h3>
                                                <p>English</p>
                                            </div>
                                    </button>
                                    </div>
                                </div>
                            </div>
                            <div className='listitem'>
                                <div className='row1fr2fr'>
                                    <div>
                                        <div>
                                            <Image 
                                                src="/thumbnails/Eagle.jpg"
                                                alt="medicineIMGHere" 
                                                width={150} 
                                                height={150}
                                            />
                                        </div>
                                    </div>
                                    <div className='apptextB'>
                                    <button onClick={() => handleButtonClick('https://player.vimeo.com/video/880765771?h=0d20c6c4fc')}
                                            style={{width:'100%', height:'100%'}} id='video8'>
                                            <div className='apptext'>
                                                <h3>Eagle</h3>
                                                <p>English</p>
                                            </div>
                                    </button>
                                    </div>
                                </div>
                            </div>
                            <div className='listitem'>
                                <div className='row1fr2fr'>
                                    <div>
                                        <div>
                                            <Image 
                                                src="/thumbnails/Beaver.jpg"
                                                alt="beaver" 
                                                width={150} 
                                                height={150}
                                            />
                                        </div>
                                    </div>
                                    <div className='apptextB'>
                                    <button onClick={() => handleButtonClick('https://player.vimeo.com/video/880765098?h=40a8288926')}
                                            style={{width:'100%', height:'100%'}} id='video8'>
                                            <div className='apptext'>
                                                <h3>Beaver</h3>
                                                <p>English</p>
                                            </div>
                                    </button>
                                    </div>
                                </div>
                            </div>
                            <div className='listitem'>
                                <div className='row1fr2fr'>
                                    <div>
                                        <div>
                                            <Image 
                                                src="/thumbnails/PolarBear.jpg"
                                                alt="polarbear" 
                                                width={150} 
                                                height={150}
                                            />
                                        </div>
                                    </div>
                                    <div className='apptextB'>
                                    <button onClick={() => handleButtonClick('https://player.vimeo.com/video/880764998?h=220a0ef97d')}
                                            style={{width:'100%', height:'100%'}} id='video8'>
                                            <div className='apptext'>
                                                <h3>Polar Bear</h3>
                                                <p>English</p>
                                            </div>
                                    </button>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                   </div>
                </div>
            </motion.div>
        </>
    )
};
export default VideogalleryD;
