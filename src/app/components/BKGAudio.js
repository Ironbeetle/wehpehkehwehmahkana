'use client';
import { useRef } from 'react';
import { FaVolumeUp } from "react-icons/fa";
const BKGAudio = () => {
    const audioBl = useRef();
    const toggleAudio = () => {
        if (audioBl.current.paused) {
            audioBl.current.play();
           //set volume to 0.2
            audioBl.current.volume = 0.8;
        } else {
            audioBl.current.pause();
        }
    };
    return (
        <>
            <audio ref={audioBl} src='/BKGmusic.mp3' loop />
            <button onClick={toggleAudio} className='audiobtn' id='buttonTitle' title='Music'>
                <FaVolumeUp size={'3rem'} />
            </button>
        </>
    );
}
export default BKGAudio;