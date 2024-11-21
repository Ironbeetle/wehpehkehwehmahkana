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
    let relate = teaching?.topic;
    const relateDB = await prisma.post.findMany({
        where: {
            topic: relate
        }
    })
    const Sacred = () => {
        return(
            <div>
                <div className='row2fr1fr tabcontent2' style={{height:"100%"}}>
                    <div style={{marginTop:"10%",marginLeft:"5%" ,padding:"1rem"}}>
                        <div className='row1fr2fr2fr apptxtTitlesW flexpaneldisplay6676' style={{width:"85%", backgroundColor:"rgba(26,26,26,0.5)"}}>
                            <Image 
                                src={teaching.thumbimg} 
                                alt="medicineIMGHere" 
                                width={150} 
                                height={150}
                            />
                            <h3>{teaching.title}</h3>
                            <h3>{teaching.subtitle}</h3>
                        </div>
                        <div className='flexpaneldisplay' style={{width:"85%"}}>
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
                    <div className='appcontainer'>
                        <div className='playlist' style={{height:"100%"}}>
                            {relateDB.map((list) => (
                                <div key={list.id} className='listapp row1fr2fr' style={{marginBottom:"2rem"}}>
                                    <Image
                                        src={list.thumbnail}
                                        alt="MenuBKG"
                                        width={150}
                                        height={150}
                                        loading='lazy'
                                        quality={90}
                                    />
                                    <Link 
                                        className="apptextB flexpaneldisplayR" 
                                        style={{width:"250px",textDecoration:'none', lineHeight:"1rem",height:"100%"}} 
                                        href={'/pages/SelfCareD/sacredid/' +list.id}
                                    >
                                        <h4>{list.title}</h4>
                                        <h4>{list.subtitle}</h4>
                                    </Link>
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
                <Link href='/pages/TeachingsD'>
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
            <Sacred/>
        </div>
    );
}
export default page;
