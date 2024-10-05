'use client';
import React, {useState, useEffect} from 'react';
import { ComingHomePage } from './CominghomeInsideT'; 
export default function CominghomecontentT(){
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
    let PageView = () => {
        return <ComingHomePage/>
    }
    let PageFlipView = () => {
        return(
            <>
                <div className="logobox">
                    <div className='flexpaneldisplay'>
                        <div className="apptextL">
                            <h1>Please Turn To Portrait</h1>
                        </div>
                    </div>
                </div>
            </>
        );
    }
    let FullPageView = () => {
        if (width > 1024) {
            return <PageFlipView/>
        }else {
            return <PageView/>
        }
    }
    return <FullPageView/>
}




