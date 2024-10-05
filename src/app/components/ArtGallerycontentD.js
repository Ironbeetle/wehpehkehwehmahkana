'use client';
import React, {useEffect, useRef} from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import UpArrow from "../../../public/UPArrow.svg";
import DownArrow from "../../../public/DOWNArrow.svg";
import WWolverine from "../../../public/wolverine.jpg";
import WWolf from "../../../public/wolf.jpg";
import WWind from "../../../public/wind.jpg";
import WWatercreatures from "../../../public/watercreatures.jpg";
import TTurtleisland from "../../../public/turtleisland.jpg";
import TTurtle from "../../../public/turtle.jpg";
import TTreeoflife from "../../../public/treeoflife.jpg";
import TTobacco from "../../../public/tobacco.jpg";
import TThunderbird from "../../../public/thunderbird.jpg";
import SSweetgrass from "../../../public/sweetgrass.jpg";
import SSasquatch from "../../../public/sasquatch.jpg";
import SSandhillcrane from "../../../public/sandhillcrane.jpg";
import SSage from "../../../public/sage.jpg";
import MMouse from "../../../public/mouse.jpg";
import LLoon from "../../../public/loon.jpg";
import GGrandmothermoon from "../../../public/grandmothermoon.jpg";
import FFire from "../../../public/fire.jpg";
import EEagle from "../../../public/eagle.jpg";
import DDragonfly from "../../../public/dragonfly.jpg";
import CCreation from "../../../public/creation.jpg";
import CCaribou from "../../../public/caribou.jpg";
import BButterfly from "../../../public/butterfly.jpg";
import BBuffalo from "../../../public/buffalo.jpg";
import BBeaver from "../../../public/beaver.jpg";
import BBear from "../../../public/bear.jpg";
import AAllnations from "../../../public/allnations.jpg";
import KTCpageBKG from "../../../public/TeachingsBKG.jpg";

const ArtGallerycontentD = () => {

  useEffect(() => {
    const SlideContainer = document.querySelector('.vertcontainer');
    const SliderLeft = document.querySelector('.leftslide');
    const SliderRight = document.querySelector('.rightslide');
    const Upbtn = document.querySelector('.actionbtnr');
    const Downbtn = document.querySelector('.actionbtnl');

    let activeSlideIndex = 0;
    SliderRight.style.top = `-${(SliderLeft.children.length - 1) * 100}vh`;
    Upbtn.addEventListener('click', () => changeSlide('up'));
    Downbtn.addEventListener('click', () => changeSlide('down'));
    const changeSlide = (direction) => {
      const sliderHeight = SlideContainer.clientHeight;
      if (direction === 'up') {
        activeSlideIndex++;
        if (activeSlideIndex > SliderLeft.children.length - 1) {
          activeSlideIndex = 0;
        }
      } else if (direction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
          activeSlideIndex = SliderLeft.children.length + 1;
        }
      }
      SliderRight.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
      SliderLeft.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
    } 

  });
  return (
    <>
    <div className="bklink">
      <Link href='/pages/MediaHomeD'>
          <div className="bkbtn">
              <p>Back</p>
          </div>
      </Link>
    </div>
    <div className="bkgcontainer">
      <Image
          src={KTCpageBKG}
          alt="ArtGallerycontentD"
          fill
          loading="eager"
          quality={90}
      />
    </div>
    <div className="appshell">
    <motion.div 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 2, delay: 0.5, ease: 'easeInOut'}}    
      className="appcontainer tabcontent">
      {/* Art gallery carousel */}
      <div className="contentpanel">
        <div className="vertcontainer">
          {/* left Text side */}
          <div className="leftslide">
            <div className="slideitemv" id="tile01">
              <div className="tiletxtC">
                <h1>kâkinow</h1>
              </div>
              <div className="tiletxtED">
                <h1>All Nations</h1>
              </div>
              <div className="tiletxtD">
                <h1>horelyu ʔełk’ech’a Dené</h1>
              </div>
              <div className="tile1S"/>
            </div>
            <div className="slideitemv" id="tile02">
              
              <div className="tiletxtC">
              <h1>muskwa</h1>
              </div>
              <div className="tiletxtED">
                <h1>Bear</h1>
              </div>
              <div className="tiletxtD">
                <h1>sas</h1>
              </div>
              <div className="tile2S"/>
            </div>
            <div className="slideitemv" id="tile03">
              <div className="tiletxtED">
                <h1>Beaver</h1>
              </div>
              <div className="tiletxtC">
                <h1>amisk</h1>
              </div>
              <div className="tiletxtD">
                <h1>ts’á</h1>
              </div>
              <div className="tile3S"/>
            </div>
            <div className="slideitemv" id="tile04">
              <div className="tiletxtED">
                <h1>Buffalo</h1>
              </div>
              <div className="tiletxtC">
                <h1>paskwowi</h1>
              </div>
              <div className="tiletxtD">
                <h1>tł’ogheyaghi ejeré</h1>
              </div>
              <div className="tile4S"/>
            </div>
            <div className="slideitemv" id="tile05">
              <div className="tiletxtED">
                <h1>Butterfly</h1>
              </div>
              <div className="tiletxtC">
                <h1>kamama bii</h1>
              </div>
              <div className="tiletxtD">
                <h1>yágolé</h1>
              </div>
              <div className="tile5S"/>
            </div>
            <div className="slideitemv" id="tile06">
              <div className="tiletxtED">
                <h1>Caribou</h1>
              </div>
              <div className="tiletxtC">
                <h1>atiki atikamaytat</h1>
              </div>
              <div className="tiletxtD">
                <h1>ʔetthęn</h1>
              </div>
              <div className="tile6S"/>
            </div>
            <div className="slideitemv" id="tile08">
              <div className="tiletxtED">
                <h1>Creation</h1>
              </div>
              <div className="tiletxtC">
                <h1>munto ka-kee-osi-tat</h1>
              </div>
              <div className="tiletxtD">
                <h1>ta-tuho-lee</h1>
              </div>
              <div className="tile8S"/>
            </div>
            <div className="slideitemv" id="tile09">
              <div className="tiletxtED">
                <h1>Dragonfly</h1>
              </div>
              <div className="tiletxtC">
                <h1>O-chocho-kala pi ses</h1>
              </div>
              <div className="tiletxtD">
                <h1>thi-stow’e</h1>
              </div>
              <div className="tile9S"/>
            </div>
            <div className="slideitemv" id="tile10">
              <div className="tiletxtED">
                <h1>Eagle</h1>
              </div>
              <div className="tiletxtC">
                <h1>mikisiw</h1>
              </div>
              <div className="tiletxtD">
                <h1>det’ąnchogh</h1>
              </div>
              <div className="tile10S"/>
            </div>
            <div className="slideitemv" id="tile11">
              <div className="tiletxtED">
                <h1>Fire</h1>
              </div>
              <div className="tiletxtC">
                <h1>iskotew</h1>
              </div>
              <div className="tiletxtD">
                <h1>kwőn dek’ąn</h1>
              </div>
              <div className="tile11S"/>
            </div>
            <div className="slideitemv" id="tile12">
              <div className="tiletxtED">
                <h1>Grandmother Moon</h1>
              </div>
              <div className="tiletxtC">
                <h1>kookuminow </h1>
              </div>
              <div className="tiletxtD">
                <h1>tedhe zah</h1>
              </div>
              <div className="tile12S"/>
            </div>
            <div className="slideitemv" id="tile13">
              <div className="tiletxtED">
                <h1>Loon</h1>
              </div>
              <div className="tiletxtC">
                <h1>ma kwa</h1>
              </div>
              <div className="tiletxtD">
                <h1>dadzęné</h1>
              </div>
              <div className="tile13S"/>
            </div>
            <div className="slideitemv" id="tile14">
              <div className="tiletxtED">
                <h1>Mouse</h1>
              </div>
              <div className="tiletxtC">
                <h1>apâkōsîs</h1>
              </div>
              <div className="tiletxtD">
                <h1>glune’</h1>
              </div>
              <div className="tile14S"/>
            </div>
            <div className="slideitemv" id="tile16">
              <div className="tiletxtED">
                <h1>Sage</h1>
              </div>
              <div className="tiletxtC">
                <h1>paskwawihkaskwa</h1>
              </div>
              <div className="tiletxtD">
                <h1>naídi detth’agh</h1>
              </div>
              <div className="tile16S"/>
            </div>
            <div className="slideitemv" id="tile17">
              <div className="tiletxtED">
                <h1>Sandhill Crane</h1>
              </div>
              <div className="tiletxtC">
                <h1>ocikak</h1>
              </div>
              <div className="tiletxtD">
                <h1>déł</h1>
              </div>
              <div className="tile17S"/>
            </div>
            <div className="slideitemv" id="tile18">
              <div className="tiletxtED">
                <h1>Sasquatch</h1>
              </div>
              <div className="tiletxtC">
                <h1>ookeematow</h1>
              </div>
              <div className="tiletxtD">
                <h1>dechęn yaghe hot’ine</h1>
              </div>
              <div className="tile18S"/>
            </div>
           
            <div className="slideitemv" id="tile20">
              <div className="tiletxtED">
                <h1>Sweetgrass</h1>
              </div>
              <div className="tiletxtC">
                <h1>weekâskwâ</h1>
              </div>
              <div className="tiletxtD">
                <h1>nadedelthi</h1>
              </div>
              <div className="tile20S"/>
            </div>
            <div className="slideitemv" id="tile21">
              <div className="tiletxtED">
                <h1>Thunderbird</h1>
              </div>
              <div className="tiletxtC">
                <h1>pinasoh</h1>
              </div>
              <div className="tiletxtD">
                <h1>ʔidié</h1>
              </div>
              <div className="tile21S"/>
            </div>
            <div className="slideitemv" id="tile22">
              <div className="tiletxtED">
                <h1>Tobacco</h1>
              </div>
              <div className="tiletxtC">
                <h1>cistemaw</h1>
              </div>
              <div className="tiletxtD">
                <h1>ts’elt’wi</h1>
              </div>
              <div className="tile22S"/>
            </div>
            <div className="slideitemv" id="tile23">
              <div className="tiletxtED">
                <h1>Tree of Life</h1>
              </div>
              <div className="tiletxtC">
                <h1>ototamatik</h1>
              </div>
              <div className="tiletxtD">
                <h1>daychenebataani</h1>
              </div>
              <div className="tile23S"/>
            </div>
            <div className="slideitemv" id="tile24">
              <div className="tiletxtED">
                <h1>Turtle</h1>
              </div>
              <div className="tiletxtC">
                <h1>mikinak</h1>
              </div>
              <div className="tiletxtD">
                <h1>eguretth’ęné</h1>
              </div>
              <div className="tile24S"/>
            </div>
            <div className="slideitemv" id="tile25">
              <div className="tiletxtED">
                <h1>Turtle Island</h1>
              </div>
              <div className="tiletxtC">
                <h1>mikinak miwistik</h1>
              </div>
              <div className="tiletxtD">
                <h1>nuhnęné</h1>
              </div>
              <div className="tile25S"/>
            </div>
            <div className="slideitemv" id="tile26">
              <div className="tiletxtED">
                <h1>Water Creatures</h1>
              </div>
              <div className="tiletxtC">
                <h1>kanoosaymakak</h1>
              </div>
              <div className="tiletxtD">
                <h1>Ti͙ch’adii</h1>
              </div>
              <div className="tile26S"/>
            </div>
            <div className="slideitemv" id="tile28">
              <div className="tiletxtED">
                <h1>Wind</h1>
              </div>
              <div className="tiletxtC">
                <h1>notin</h1>
              </div>
              <div className="tiletxtD">
                <h1>niłts’i</h1>
              </div>
              <div className="tile28S"/>
            </div>
            <div className="slideitemv" id="tile29">
              <div className="tiletxtED">
                <h1>Wolf</h1>
              </div>
              <div className="tiletxtC">
                <h1>mahigan</h1>
              </div>
              <div className="tiletxtD">
                <h1>nunié</h1>
              </div>
              <div className="tile29S"/>
            </div>
            <div className="slideitemv" id="tile30">
              <div className="tiletxtED">
                <h1>Wolverine</h1>
              </div>
              <div className="tiletxtC">
                <h1>ominacis</h1>
              </div>
              <div className="tiletxtD">
                <h1>nąghaí</h1>
              </div>
              <div className="tile30S"/>
            </div>

          </div>
          {/* right Image side */}
          <div className="rightslide">
            <div className="sacreditemv">
                <Image
                    src={WWolverine}
                    alt="wolverineBKG1"
                    fill="contain"
                    style={{objectFit: "cover"}}
                    loading="eager"
                    quality={90}
                    unoptimized
                />
            </div>
            <div className="sacreditemv">
                <Image
                    src={WWolf}
                    alt="WolfBKG2"
                    fill="contain"
                    style={{objectFit: "cover"}}
                    loading="eager"
                    quality={90}
                    unoptimized
                />
            </div>
            <div className="sacreditemv">
                <Image
                    src={WWind}
                    alt="ComingHomeBKG3"
                    fill="contain"
                    style={{objectFit: "cover"}}
                    loading="eager"
                    quality={90}
                    unoptimized
                />
            </div>
            <div className="sacreditemv">
                <Image
                    src={WWatercreatures}
                    alt="ComingHomeBKG5"
                    fill="contain"
                    style={{objectFit: "cover"}}
                    loading="eager"
                    quality={90}
                    unoptimized
                />
            </div>
            <div className="sacreditemv">
                <Image
                    src={TTurtleisland}
                    alt="ComingHomeBKG6"
                    fill="contain"
                    style={{objectFit: "cover"}}
                    loading="eager"
                    quality={90}
                    unoptimized
                />
            </div>
            <div className="sacreditemv">
              <Image
                src={TTurtle}
                alt="ComingHomeBKG7"
                fill="contain"
                style={{objectFit: "cover"}}
                loading="eager"
                quality={90}
                unoptimized
              />
            </div>
            <div className="sacreditemv">
              <Image
                src={TTreeoflife}
                alt="ComingHomeBKG8"
                fill="contain"
                style={{objectFit: "cover"}}
                loading="eager"
                quality={90}
                unoptimized
                />
            </div>
            <div className="sacreditemv">
              <Image
                src={TTobacco}
                alt="ComingHomeBKG9"
                fill="contain"
                style={{objectFit: "cover"}}
                loading="eager"
                quality={90}
                unoptimized
                />
            </div>
            <div className="sacreditemv">
              <Image
                src={TThunderbird}
                alt="ComingHomeBKG10"
                fill="contain"
                style={{objectFit: "cover"}}
                loading="eager"
                quality={90}
                unoptimized
                />
            </div>
            <div className="sacreditemv">
              <Image
                src={SSweetgrass}
                alt="ComingHomeBKG11"
                fill="contain"
                style={{objectFit: "cover"}}
                loading="eager"
                quality={90}
                unoptimized
                />
            </div>
            <div className="sacreditemv">
              <Image
                src={SSasquatch}
                alt="ComingHomeBKG13"
                fill="contain"
                style={{objectFit: "cover"}}
                loading="eager"
                quality={90}
                unoptimized
                />
            </div>
            <div className="sacreditemv">
              <Image
                src={SSandhillcrane}
                alt="ComingHomeBKG14"
                fill="contain"
                style={{objectFit: "cover"}}
                loading="eager"
                quality={90}
                unoptimized
                />
            </div>
            <div className="sacreditemv">
              <Image
                src={SSage}
                alt="ComingHomeBKG15"
                fill="contain"
                style={{objectFit: "cover"}}
                loading="eager"
                quality={90}
                unoptimized
                />
            </div>
            <div className="sacreditemv">
              <Image
                src={MMouse}
                alt="ComingHomeBKG17"
                fill="contain"
                style={{objectFit: "cover"}}
                loading="eager"
                quality={90}
                unoptimized
                />
            </div>
            <div className="sacreditemv">
              <Image
                src={LLoon}
                alt="ComingHomeBKG18"
                fill="contain"
                style={{objectFit: "cover"}}
                loading="eager"
                quality={90}
                unoptimized
                />
            </div>
            <div className="sacreditemv">
              <Image
                src={GGrandmothermoon}
                alt="ComingHomeBKG19"
                fill="contain"
                style={{objectFit: "cover"}}
                loading="eager"
                quality={90}
                unoptimized
                />
            </div>
            <div className="sacreditemv">
              <Image
                src={FFire}
                alt="ComingHomeBKG20"
                fill="contain"
                style={{objectFit: "cover"}}
                loading="eager"
                quality={90}
                unoptimized
                />
            </div>
            <div className="sacreditemv">
              <Image
                src={EEagle}
                alt="ComingHomeBKG21"
                fill="contain"
                style={{objectFit: "cover"}}
                loading="eager"
                quality={90}
                unoptimized
                />
            </div>
            <div className="sacreditemv">
              <Image
                src={DDragonfly}
                alt="ComingHomeBKG22"
                fill="contain"
                style={{objectFit: "cover"}}
                loading="eager"
                quality={90}
                unoptimized
                />
            </div>
            <div className="sacreditemv">
              <Image
                src={CCreation}
                alt="ComingHomeBKG23"
                fill="contain"
                style={{objectFit: "cover"}}
                loading="eager"
                quality={90}
                unoptimized
                />
            </div>
            <div className="sacreditemv">
              <Image
                src={CCaribou}
                alt="ComingHomeBKG25"
                fill="contain"
                style={{objectFit: "cover"}}
                loading="eager"
                quality={90}
                unoptimized
                />
            </div>
            <div className="sacreditemv">
              <Image
                src={BButterfly}
                alt="ComingHomeBKG26"
                fill="contain"
                style={{objectFit: "cover"}}
                loading="eager"
                quality={90}
                unoptimized
                />
            </div>
            <div className="sacreditemv">
              <Image
                src={BBuffalo}
                alt="ComingHomeBKG27"
                fill="contain"
                style={{objectFit: "cover"}}
                loading="eager"
                quality={90}
                unoptimized
                />
            </div>
            <div className="sacreditemv">
              <Image
                src={BBeaver}
                alt="ComingHomeBKG28"
                fill="contain"
                style={{objectFit: "cover"}}
                loading="eager"
                quality={90}
                unoptimized
                />
            </div>
            <div className="sacreditemv">
              <Image
                src={BBear}
                alt="ComingHomeBKG29"
                fill="contain"
                style={{objectFit: "cover"}}
                loading="eager"
                quality={90}
                unoptimized
                />
            </div>
            <div className="sacreditemv">
              <Image
                src={AAllnations}
                alt="ComingHomeBKG30"
                fill
                style={{objectFit: "cover"}}
                loading="eager"
                quality={90}
                unoptimized
              />
            </div>
          </div>
          {/* action buttons */}
          <div className="actionbtns">
            <button className="actionbtnl downbtn">
              <Image 
                src={DownArrow}
                alt="downarrow"
                fill="contain"
                loading="eager"
                quality={100}
              />
            </button>
            <button className="actionbtnr upbtn">
              <Image 
                src={UpArrow}
                alt="uparrow"
                fill="contain"
                loading="eager"
                quality={100}
              />
            </button>
          </div> 
        </div>
      </div>
    </motion.div>
    </div>
    </>
  );
}
export default ArtGallerycontentD;

