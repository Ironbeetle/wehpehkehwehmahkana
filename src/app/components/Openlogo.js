'use client'
import React, {useState, useEffect} from 'react';
import Link from "next/link";
import Image from "next/image";
import KTClogoL from "../../../public/KTClogoL.jpg";
const Openlogo = () => {
    const [width, setWidth] = useState(0);
    useEffect(() => {
        setWidth(window.innerWidth);
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    function PageSelector() {
        if (width < 480) {
            return <Link href="/pages/CominghomeM"
                        className='linkbtnfront'
                    >
                        Enter
                    </Link>
        }else if(width > 481 && width < 1024){
            return <Link href="/pages/CominghomeT"
                        className='linkbtnfront'
                    >
                        Enter
                    </Link>
        } 
        else {
            return <Link href="/pages/CominghomeD"
                        className='linkbtnfront'
                    >
                        Enter
                    </Link>
        }
    }
    return (
        <>
            <div className="logobox">
                <div className='flexpaneldisplay'>
                    <Image
                        src={KTClogoL}
                        alt="KTClogo"
                        width={323}
                        height={182}
                        priority={true}
                        style={{objectFit: "contain"}}
                        quality={100}
                    />
                    <div className="apptextL">
                        <h1>Keewatin Tribal Council Inc.</h1>
                    </div>
                    <div className="btn">
                        <PageSelector/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Openlogo;
