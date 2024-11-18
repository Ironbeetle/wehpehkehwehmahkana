import {use} from 'react';
import Image from "next/image";
import Link from 'next/link';
import CreationLesson from "../../../stories/Storycontent";
import prisma from "../../../../../server/db";


const page = async ({ params }) => {
    const {id} = await params
    console.log(id);
  
   
        const sacredDB = await prisma.post.findMany({
            where: {
                topic: id
            }
        });
   
   
    const SacredTeaching = () => {
        return(
            <div className='tabcontent2' style={{height:"100vh"}}>
              
                <div className='appcontainer'>
                   <div className='flexpaneldisplay'>
                   
                    <div>
                    {sacredDB.map((vid) =>(
                    <div className='listpanel' key={vid.id}>
                        <div className='row1fr1fr1fr'>
                            <Image 
                                src={vid.thumbnail} 
                                alt="medicineIMGHere" 
                                width={300} 
                                height={300}
                            />
                            <div style={{width:"500px"}}>
                                <Link href={'/pages/TeachingsD/sacredid/' +vid.id}>
                                    <div className='apptext'>
                                        <h3>{vid.title}</h3>
                                        <p>{vid.subtitle}</p>
                                    </div>
                                </Link>
                            </div>
                            <Image 
                                src={vid.thumbimg} 
                                alt="medicineIMGHere" 
                                width={300} 
                                height={300}
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

    const Display = () => {
        if (id === "creation") {
            return  <CreationLesson/>
        }else if (id !== null && id !== "creation") {
            return  <SacredTeaching/>
        }else if (id !== null && id !== "creation" && id === "culture" && id === "language") {
            return  <SacredTeaching/>
        }
        else{
            return  <div>
                        <h1>404 Page Not Found</h1>
                    </div>
        }
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
            <Display/>
        </div>
    );
}

export default page;
