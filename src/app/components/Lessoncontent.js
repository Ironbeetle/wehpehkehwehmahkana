'use client';
import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation'; 
const Teachcontent = () =>{
    const searchParams = useSearchParams();
    const lesson = searchParams.get('keyword');
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
    let Lessontitle = () =>{
        switch(lesson){
            case "natural1":
                return 'The Natural Laws';
            case "natural2":
                return "Teachings of the Bear";
            case "natural3":
                return 'Teachings of the Beaver';
            case "natural4":
                return 'Teachings of the Wolf';
            case "natural5":
                return 'Teachings of the Caribou';
            case "natural6":
                return 'Love for Yourself & Others';
            case "natural7":
                return 'Respecting Others';
            case "sacred1":
                return 'Teachings of the Trees';
            case "sacred2":
                return 'Plants & Medicines';
            case "sacred3":
                return 'The Elements';
            case "sacred4":
                return 'Fasting Ceremony';
            case "sacred5":
                return 'The Northern Lights';
            default:
                return "Lesson Title";
        }
    }
    let Lessonvid = () =>{
        switch(lesson){
            case "natural1":
                return 'https://www.youtube.com/embed/9elzdRQ4J_g?si=QBYGtXMd7hIPJ7lh';
            case "natural2":
                return 'https://www.youtube.com/embed/AawBxjEtTZo?si=v72mqF2uZ677Zf4P';
            case "natural3":
                return 'https://www.youtube.com/embed/TjtypnD-1Yw?si=zoGbqEloGLV8GadL';
            case "natural4":
                return 'https://www.youtube.com/embed/SPeRpIkZpWI?si=KHEb80T8SAZq-PKS';
            case "natural5":
                return 'https://www.youtube.com/embed/nboyKrOJbPA?si=yUfyDTpiPbqz-JHr';
            case "natural6":
                return 'https://www.youtube.com/embed/kGr6jtnMB7U?si=NOo0bOhzjb8d2q_2';
            case "natural7":
                return 'https://www.youtube.com/embed/KtQ3clIW1EI?si=agiKITDDfINYq_gA';
            case "sacred1":
                return 'https://www.youtube.com/embed/FG1MZ0a5RIs?si=9tnXN-kdS6fTiI3W';
            case "sacred2":
                return 'https://www.youtube.com/embed/j026XLn0ty0?si=FxByEk-IGG7n4EbF';
            case "sacred3":
                return 'https://www.youtube.com/embed/Pqgw4SoI88Y?si=KL5ueIvL9mMXCEPA';
            case "sacred4":
                return 'https://www.youtube.com/embed/TLU7lwF4-mA?si=4XS8RHGU72h-XiSX';
            case "sacred5":
                return 'https://www.youtube.com/embed/kZhF-ad3-2M?si=KKXGrA3bReiXAw5';
            default:
                return 'https://www.youtube.com/embed/TLU7lwF4-mA?si=4XS8RHGU72h-XiSX';
        }
    }
    let backSacred = () => {
        if (width < 480) {
            return "/pages/TeachingsM"
        }else if (width > 481 && width < 1024){
            return "/pages/TeachingsT"
        }else {
            return "/pages/TeachingsD"
        }
    }
    let backTeachings = () => {
        if (width < 479) {
            return "/pages/SelfCareM"
        }else if (width > 481 && width < 1024){
            return "/pages/SelfCareT"
        }else {
            return "/pages/SelfCareD"
        }
    }
    let LessonReturn = () =>{
        switch(lesson){
            case "love":
                return backTeachings();
            case "respect":
                return backTeachings();
            case "courage":
                return backTeachings();
            case "honesty":
                return backTeachings();
            case "wisdom":
                return backTeachings();
            case "truth":
                return backTeachings();
            case "humility":
                return backTeachings();
            case "sacred1":
                return backSacred();
            case "sacred2":
                return backSacred();
            case "sacred3":
                return backSacred();
            case "sacred4":
                return backSacred();
            case "sacred5":
                return backSacred();
            case "sacred6":
                return backSacred();
            case "sacred7":
                return backSacred();
            default:
                return backTeachings();
        }
    }
    let PanelPLacer = () => {
        if (width < 480) {
            return 'objectCenter';
        }else if (width > 481 && width < 1024){
            return 'flexpaneldisplay';
        }else {
            return 'row1fr2fr';
        }
    }
    let vidContain = () => {
        if (width < 480) {
            return 'objectInner';
        }else if (width > 481 && width < 1024){
            return 'flexpaneldisplay2';
        }else {
            return 'flexpaneldisplay';
        }
    }
    let vidSizeW = () => {
        if (width < 480) {
            return '100%';
        }else if (width > 481 && width < 1024){
            return '720';
        }else {
            return '720';
        }
    }
    let vidSizeH = () => {
        if (width < 479) {
            return '55%';
        }else if (width > 480 && width < 1023){
            return '405';
        }else {
            return '405';
        }
    }
    let Bkgselector = () =>{
        if (width < 480) {
            return (
                <>
                    <video autoPlay loop className='videobkg'>
                        <source src="/webm/LessonMobilesize.webm" type="video/webm; codecs=vp9"/>
                    </video>
                </>
            )
        }else if (width > 481 && width < 1024){
            return (
                <>
                    <video autoPlay loop className='videobkg'>
                        <source src="/webm/LessonTabletSize.webm" type="video/webm; codecs=vp9"/>
                    </video>
                </>
            )
        }else {
            return (
                <>
                    <video autoPlay loop className='videobkg'>
                        <source src="/webm/LessonBKG.webm" type="video/webm; codecs=vp9"/>
                    </video>
                </>
            )
        }
    }
    return(
        <>
            <div className="bklink">
                <Link 
                    href={{
                        pathname: LessonReturn(),
                        query: {
                            keyword: 'activeview'
                        }
                    }}
                >
                    <div className="bkbtn">
                        <p>Back</p>   
                    </div>
                </Link>
            </div>
            <div className="bkgcontainer">
                <Bkgselector/>
            </div>
            <div className={PanelPLacer()} style={{height:"100dvh"}}>
                <div></div>
                <div className={vidContain()} style={{height:"100%"}}>
                    <iframe 
                        src={Lessonvid()}
                        width={vidSizeW()}
                        height={vidSizeH()}
                        style={{border:'none'}} 
                    />
                    <h1 style={{display:'flex',justifyContent:"center"}}>{Lessontitle()}</h1>
                </div>
            </div>
        </>  
    );
}
export default Teachcontent;