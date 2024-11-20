import React from 'react';
import Image from "next/image";
import Link from 'next/link';
export default function page() {
  
    let Viewdefault = () => {
        return(
            <div className='row1fr1fr' style={{height:"100dvh"}}>
                <div></div> 
                <div className='flexpaneldisplay2' style={{height:"100dvh"}}>
                    <Link className='apptxtHugeB' href={"/pages/SelfCareD/" + "naturallaws"}>
                        <h1>The Natural Laws</h1> 
                    </Link>
                            
                    <Link className='apptxtHugeB' href={"/pages/SelfCareD/" + "socialroles"}>
                        <h1>Social Roles</h1>
                    </Link>
                            
                    <Link className='apptxtHugeB' href={"/pages/SelfCareD/" + "socialmanners"}>
                        <h1>Social Etiquette</h1>
                    </Link>
                                    
                    <Link className='apptxtHugeB' href={"/pages/SelfCareD/" + "wellbeing"}>
                        <h1>Personal Well Bieng</h1>
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
                    <source src="/webm/TurtleVidBKG.webm" type="video/webm; codecs=vp9"/>
                </video>
            </div>
            <div className="appcontainer">
                <Viewdefault/>
            </div>
        </div>
    );
}
