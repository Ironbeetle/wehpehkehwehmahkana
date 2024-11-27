import {use} from 'react';
import Image from "next/image";
import Link from 'next/link';
import CreationLesson from "../../../stories/Storycontent";
import prisma from "../../../../../server/db";

const page = async ({ params }) => {
    const {smid} = await params
    console.log(smid);
    const sacredDB = await prisma.post.findMany({
        where: {
            topic: smid
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
                                            <Link className='apptext' style={{textDecoration:'none', height:"100%"}} href={'/pages/SelfCareM/selfcaremid/' +vid.id}>
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
                <Link href='/pages/SelfCareM'>
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
