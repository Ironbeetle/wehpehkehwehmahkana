"use client";
import React from 'react';
import { useSearchParams } from 'next/navigation';
import { PrismaClient } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import { MdCopyright } from "react-icons/md";

const db = new PrismaClient();

export default function Page(){
    const searchParams = useSearchParams();
    const videoid = searchParams.get('keyword');
    const backbtn = searchParams.get('keyword2');

   
      
  
 
    return(
        <div>
            <div>
                <h1></h1>
            </div>
            <div className='tabcontent'>
                <div className='flexpaneldisplay' style={{height:"100dvh"}}>
                    {/* <iframe 
                        id="iframeId"
                        src="" 
                        width="1280" 
                        height="720"
                        style={{border:'none'}} 
                    /> */}
                    <div className='flexpaneldisplayR copyright'>
                        <h1>{videoid}</h1>
                        <p>Copyright&nbsp;</p> <MdCopyright/><p>&nbsp;2023&nbsp;</p><p>All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
