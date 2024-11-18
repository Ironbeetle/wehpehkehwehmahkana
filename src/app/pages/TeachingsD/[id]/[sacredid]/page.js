import {use} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MdCopyright } from "react-icons/md";
import prisma from "../../../../../../server/db";


const page = async ({ params }) => {
    const {sacredid} = await params
    console.log(sacredid);
    const teaching = await prisma.post.findUnique({
        where: {
            id: sacredid
        }
    });
  
    
    const Sacred = () => {
        return(
            <div className='row1fr2fr tabcontent2' style={{height:"100vh"}}>
                <div className='flexpaneldisplay2' style={{width:"100%",height:"100dvh"}}>
                    <Image 
                        src={teaching.thumbimg} 
                        alt="medicineIMGHere" 
                        width={300} 
                        height={300}
                    />
                    <h1>{teaching.title}</h1>
                    <h2>{teaching.subtitle}</h2>
                    <h2>{teaching.comment}</h2>
                </div>
                <div className='flexpaneldisplay2 panelpadding'>
                    <iframe 
                        id="iframeId"
                        src={teaching.vidurl} 
                        width="720" 
                        height="480"
                        style={{border:'none'}} 
                    /> 
                    <div className='flexpaneldisplayR copyright'>
                        <p>Copyright&nbsp;</p> <MdCopyright/><p>&nbsp;2023&nbsp;</p><p>All Rights Reserved</p>
                    </div>
                </div>
            </div>   
        )
    }

   
    return(
        <div>
            <div className="bklink">
                <Link href='/pages/TeachingsD'>
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
                <Sacred/>
        </div>
    );
}

export default page;
