import React from 'react';
import Image from "next/image";
import Link from 'next/link';
export default function page() {
  
    let Viewdefault = () => {
        return(
            <div className='row1fr1fr' style={{height:"100dvh"}}>
                <div></div>
                <div className='flexpaneldisplay' style={{height:"100%"}}>         
                    <Link className='apptxtHugeB' style={{textDecoration:'none'}} href={"/pages/TeachingsD/" + "sacredteachings"}>
                        <h1>Sacred Teachings</h1>
                    </Link>

                    <Link className='apptxtHugeB' style={{textDecoration:'none'}} href={"/pages/TeachingsD/" + "sacrednature"}>
                        <h1>Plants & Animals</h1>
                    </Link>
                                    
                    <Link className='apptxtHugeB' style={{textDecoration:'none'}} href={"/pages/TeachingsD/" + "ceremony"}>
                        <h1>Ceremony</h1>
                    </Link>
                </div> 
            </div>
        );
    }
    return(
        <div>
            <div className="bklink">
                <Link href='/pages/TeachHomeD'>
                    <div className="bkbtn">
                        <p>Back</p>   
                    </div>
                </Link>
            </div>
            <div className="bkgcontainer">
                <video autoPlay className='videobkg'>
                    <source src="/webm/Caribou.webm" type="video/webm; codecs=vp9"/>
                </video>
            </div>
            <div className="appcontainer">
                <Viewdefault/>
            </div>
        </div>
    );
}
