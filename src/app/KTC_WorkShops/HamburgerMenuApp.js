'use client';
import React, {useState, useEffect} from 'react';
import Link  from "next/link";
import Image from 'next/image';
export default function HamburgerMenu() {
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
   
    function IMGsizer() {
        if (width < 479) {
            return 45
        }else if(width > 481 && width < 1024){
            return 60
        }else {
            return 75
        }
    }
    function LivingDocument() {
        if (width < 479) {
            return "/pages/LivingDocM"                    
        }else if(width > 481 && width < 1024){
            return '/pages/LivingDocT'
        }else {
            return '/pages/LivingDocD'
        }
    }
    function Teachings() {
        if (width < 479) {
            return "/pages/TeachHomeM"
        }else if(width > 481 && width < 1024){
            return '/pages/TeachHomeT'
        }else {
            return '/pages/TeachHomeD'
        }
    }
    function Program() {
        if (width < 479) {
            return "/pages/AboutUsM"
        }else if(width > 481 && width < 1024){
            return '/pages/AboutUsT'
        }else {
            return '/pages/AboutUsD'
        }
    }
    function VideoGallery() {
        if (width < 479) {
            return "/pages/MediaHomeD"
        }else if(width > 481 && width < 1024){
            return '/pages/MediaHomeD'
        }else {
            return '/pages/MediaHomeD'
        }
    }
    return (
        <>
            <div className="menuToggle">
                <input type="checkbox"/>
                <span></span>
                <span></span>
                <span></span>
                <ul className="menu">
                    <li>
                        <Link href="/KTC_WorkShops">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href='./KTC_WorkShops/WellnessPage1'>
                            <Image
                                src="/Butterflyicon.png"
                                alt="MenuBKG"
                                width={100}
                                height={100}
                                loading='lazy'
                                quality={90}
                            />
                            Self Care Tips Today
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href={{
                                pathname:"/pages/TeachHomeM" ,
                                query: {
                                    keyword: 'workshop'
                                }
                            }}
                        >
                            Sacred Teachings
                            <Image
                                src="/Eagleicon.png"
                                alt="MenuBKG"
                                width={100}
                                height={100}
                                loading='lazy'
                                quality={90}
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href='./KTC_WorkShops/WellnessPage3'>
                            <Image
                                src="/Caribouicon.png"
                                alt="MenuBKG"
                                width={100}
                                height={100}
                                loading='lazy'
                                quality={90}
                            />
                            Traditional Foods
                        </Link>
                    </li>
                    <li>
                        <Link href='./KTC_WorkShops/WellnessPage4'>
                            Other Resources
                            <Image
                                src="/Wolficon.png"
                                alt="MenuBKG"
                                width={100}
                                height={100}
                                loading='lazy'
                                quality={90}
                            />
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

