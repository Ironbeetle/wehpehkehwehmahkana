import {use} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MdCopyright } from "react-icons/md";
import prisma from "../../../../../../server/db";
import TeachCarousel from '../../../../components/Teachcarousel';
const page = async ({ params }) => {
    const {teachmid} = await params
    console.log(teachmid);
    const teaching = await prisma.post.findUnique({
        where: {
            id: teachmid
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
            <div className='vidgallerycontainer tabcontent2' style={{height:"100dvh"}}>
                <div className='splitpaneltopH'>
                    <div className="bklinkm">
                        <Link href='/pages/TeachingsM'>
                            <div className="bkbtn flexpaneldisplay" style={{height:"100%"}}>
                                <h4>Back</h4>   
                            </div>
                        </Link>
                    </div>
                    <div className='row1fr2fr' style={{width:"100vw", backgroundColor:"rgba(26,26,26,0.5)"}}>
                        <Image 
                            src={teaching.thumbimg} 
                            alt="medicineIMGHere" 
                            width={100} 
                            height={100}
                            style={{objectFit:"cover"}}
                        />
                        <div className='apptxtTitlesW'>
                            <h4>{teaching.title}</h4>
                            <h4>{teaching.subtitle}</h4>
                        </div>
                    </div>
                    <div className='teachpanelMM' style={{height:'100%'}}>
                        <iframe 
                            id="iframeId"
                            src="https://player.vimeo.com/video/306814037?h=910c1e5f5f&portrait=0" 
                            width="100%" 
                            height="100%"
                            style={{border:'none'}} 
                        >
                        </iframe>
                        <div className='flexpaneldisplayR copyright'>
                                <p>Copyright&nbsp;</p> <MdCopyright/><p>&nbsp;2023&nbsp;</p><p>All Rights Reserved</p>
                            </div>
                    </div>
                            
                </div>
                <div className='splitpanelbotH'>
                    <TeachCarousel>
                    {relateDB.map((list) => (
                        <div key={list.id} className='listitemM'>
                            <div className='flexpaneldisplay'>
                                <Link 
                                    className="apptextB" 
                                    style={{textDecoration:'none', lineHeight:"1rem"}} 
                                    href={'/pages/TeachingsM/teachmid/' +list.id}
                                >
                                    <Image
                                    src={list.thumbnail}
                                    alt="MenuBKG"
                                    width={150}
                                    height={150}
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
        )
    }
    return(
        <div>
            
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
