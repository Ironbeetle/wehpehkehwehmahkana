import {use} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MdCopyright } from "react-icons/md";
import prisma from "../../../../../../server/db";
import TeachCarousel from '../../../../components/Teachcarousel';
const page = async ({ params }) => {
    const {sacredtid} = await params
    console.log(sacredtid);
    const teaching = await prisma.post.findUnique({
        where: {
            id: sacredtid
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
                <div className='tabcontent2' style={{height:"100%"}}>
                    <div style={{marginTop:"10%"}}>
                        <div className='row1fr2fr2fr apptxtTitlesW' style={{width:"100%", backgroundColor:"rgba(26,26,26,0.5)"}}>
                            <Image 
                                src={teaching.thumbimg} 
                                alt="medicineIMGHere" 
                                width={150} 
                                height={150}
                            />
                            <h3>{teaching.title}</h3>
                            <h3>{teaching.subtitle}</h3>
                        </div>
                        <div className='flexpaneldisplay' style={{width:"100%"}}>
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
                        <div style={{width:"100vw", marginTop:"2rem"}}>
                            <TeachCarousel>
                            {relateDB.map((list) => (
                                <div key={list.id} className='listitemMM'>
                                    <div className='flexpaneldisplay'>
                                        
                                        <Link 
                                            className="apptextB flexpaneldisplayR" 
                                            style={{textDecoration:'none', lineHeight:"1rem",height:"100%"}} 
                                            href={'/pages/TeachingsT/sacredtid/' +list.id}
                                        >
                                            <Image
                                            src={list.thumbnail}
                                            alt="MenuBKG"
                                            width={250}
                                            height={250}
                                            loading='lazy'
                                            quality={90}
                                        />
                                            <h4>{list.title}</h4>
                                            <h4>{list.subtitle}</h4>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                            </TeachCarousel>
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
                    <source src="/webm/GalleryversionD.webm" type="video/webm; codecs=vp9"/>
                </video>
            </div>
            <Sacred/>
        </div>
    );
}
export default page;
