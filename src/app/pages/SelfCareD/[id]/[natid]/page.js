import {use} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MdCopyright } from "react-icons/md";
import prisma from "../../../../../../server/db"

const page = async ({ params }) => {
    const {natid} = await params
    console.log(natid);
    const teaching = await prisma.post.findUnique({
        where: {
            id: natid
        }
    });
    let relate = teaching?.topic;
    const relateDB = await prisma.post.findMany({
        where: {
            topic: relate
        }
    })
    const NatLaws = () => {
        return(
            <div>
                <div className='row1fr2fr1fr tabcontent2' style={{height:"100%"}}>
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
                    <div className='flexpaneldisplay'>
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
                    <div>
                        <div className='playlist' style={{height:"100%"}}>
                            {relateDB.map((list) => (
                                <div key={list.id} className='listapp' style={{marginBottom:"2rem"}}>
                                    <div className='flexpaneldisplayR' style={{width:"100%"}}>
                                            <Image
                                                src={list.thumbnail}
                                                alt="MenuBKG"
                                                width={150}
                                                height={150}
                                                loading='lazy'
                                                quality={90}
                                            />
                                       <Link href={'/pages/SelfCareD/natid/' + list.id} >
                                        <div className="apptextB" style={{width:"100%", height:"151px"}}>
                                            <h4>{list.title}</h4>
                                            <h4>{list.subtitle}</h4>
                                        </div>
                                       </Link>
                                        <Image
                                            src={list.thumbimg}
                                            alt="MenuBKG"
                                            width={150}
                                            height={150}
                                            loading='lazy'
                                            quality={90}    
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
                <Link href='/pages/SelfCareD'>
                    <div className="bkbtn">
                        <p>Back</p>   
                    </div>
                </Link>
            </div>
            <div className="bkgcontainer">
                <video autoPlay className='videobkg'>
                    <source src="/webm/GalleryversionD.webm" type="video/webm; codecs=vp9"/>
                </video>
            </div>
            <NatLaws/>
        </div>
    );
}
export default page;
