import {use} from 'react';
import Image from "next/image";
import Link from 'next/link';
import CreationLesson from "../../../stories/Storycontent";
import prisma from "../../../../../server/db";

const page = async ({ params }) => {
    const {tmid} = await params
    console.log(tmid);
    const sacredDB = await prisma.post.findMany({
        where: {
            topic: tmid
        }
    });
    const SacredTeaching = () => {
        return(
            <div className='tabcontent2' style={{height:"100vh"}}>
                <div className='appcontainer'>
                    <div className='flexpaneldisplay'>
                        <div>
                            {sacredDB.map((vid) =>(
                                <div className='listitem' key={vid.id}>
                                    <div className='flexpaneldisplayR'>
                                        <Image 
                                            src={vid.thumbnail} 
                                            alt="medicineIMGHere" 
                                            width={100} 
                                            height={100}
                                        />
                                        <div>
                                            <Link className='apptext' style={{textDecoration:'none', height:"100%"}} href={'/pages/TeachingsM/teachmid/' +vid.id}>
                                                <h3>{vid.title}</h3>
                                                <h3>{vid.subtitle}</h3>
                                            </Link>
                                        </div>
                                        <Image 
                                            src={vid.thumbimg} 
                                            alt="medicineIMGHere" 
                                            width={100} 
                                            height={100}
                                        />
                                    </div>
                                </div>
                            ))}    
                        </div>
                    </div>
                </div>
            </div>   
        )
    }

   
    return(
        <div>
            <div className="bklink">
                <Link href='/pages/TeachingsM'>
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
            <SacredTeaching/>
        </div>
    );
}

export default page;
