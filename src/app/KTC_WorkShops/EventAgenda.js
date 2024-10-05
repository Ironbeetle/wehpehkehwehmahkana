import React from 'react';
import Link from 'next/link';
import Image from "next/image";
function EventAgenda(){
    return(
        <>
            <div className="bklink">
                <Link href='/KTC_WorkShops'>
                    <div className="bkbtn">
                        <p>Back</p>
                    </div>
                </Link>
            </div>
            <div className="bkgcontainer">
                <Image
                    src="/Mile20BKGM.jpg"
                    alt="ArtGallerycontentD"
                    fill
                    loading="eager"
                    quality={90}
                />
            </div>
            <div className='appcontainer'>
                <div className='GroupParallax parallaxgroupS'>
                    <div className="parallaxlayer startlayer">
                        <div className='flexpaneldisplay' style={{height:"50%", marginTop:"5%"}}>
                            <div className='apptxtTitles'>
                                <h1>
                                  Event Name
                                </h1>
                            </div>
                            <div className='apptxtTitles'>
                                <h2>
                                  Event Date
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='GroupParallax parallaxgroup'>
                    <div className="parallaxlayer startlayer">
                        <div className='listitemapp'>
                            <div className='apptext'>
                                <h3>Schedule item Name</h3>
                                <h3>Schedule item Time</h3>
                                <h3>Schedule item Location</h3>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </>
    );
}
export default EventAgenda;