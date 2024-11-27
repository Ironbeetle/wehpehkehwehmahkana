import {use} from 'react';
import Image from "next/image";
import Link from 'next/link';
import CreationLesson from "../../../stories/Storycontent";
import prisma from "../../../../../server/db";

const page = async ({ params }) => {
    const {tid} = await params
    console.log(tid);
    const sacredDB = await prisma.post.findMany({
        where: {
            topic: tid
        }
    });
    const SacredTeaching = () => {
        return(
            <div className='tabcontent2' style={{height:"100vh"}}>
              
                <div className='appcontainer'>
                   <div className='flexpaneldisplay'>
                   
                    <div>
                    <div style={{padding:"2rem"}}>
                    {sacredDB.map((vid) =>(
                    <div className='listitem' key={vid.id}>
                        <div className='row1fr2fr2fr'>
                            <Image 
                                src={vid.thumbnail} 
                                alt="medicineIMGHere" 
                                width={150} 
                                height={150}
                            />
                            <div style={{width:"500px"}}>
                                <Link className='apptext' style={{textDecoration:'none', height:"100%"}} href={'/pages/TeachingsT/sacredtid/' +vid.id}>
                                    <h2>{vid.title}</h2>
                                    <h3>{vid.subtitle}</h3>
                                </Link>
                            </div>
                            <Image 
                                src={vid.thumbimg} 
                                alt="medicineIMGHere" 
                                width={150} 
                                height={150}
                            />
                        </div>
                    </div>
                   ))}    
                   </div>
                    </div>                
                   </div>
                </div>
            </div>   
        )
    }

   
    return(
        <div>
            <div className="bklink">
                <Link href='/pages/TeachingsT'>
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
