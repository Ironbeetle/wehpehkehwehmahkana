import React from "react";
import Image from "next/image";
export default function Artcarousel(){
  function ImageLooper(){
    let Slides = [
      {img: "/thumbnails/Allnations.jpg", alt: "AllNations", titleC: "kâkinow", titleE: "All Nations", titleD: "horelyu ʔełk’ech’a Dené"},
      {img: "/thumbnails/Bear.jpg", alt: "Bear", titleC: "muskwa", titleE: "Bear", titleD: "sas"},
      {img: "/thumbnails/Beaver.jpg", alt: "Beaver", titleC: "amisk", titleE: "Beaver", titleD: "ts’á"},
      {img: "/thumbnails/Buffalo.jpg", alt: "Buffalo", titleC: "paskwowi", titleE: "Buffalo", titleD: "tł’ogheyaghi ejeré"},
      {img: "/thumbnails/Butterfly.jpg", alt: "Butterfly", titleC: "kamama bii", titleE: "Butterfly", titleD: "yágolé"},
      {img: "/thumbnails/Caribou.jpg", alt: "Caribou", titleC: "atiki atikamaytat", titleE: "Caribou", titleD: "ʔetthęn"},
      {img: "/thumbnails/Creation.jpg", alt: "Creation", titleC: "munto ka-kee-osi-tat", titleE: "Creation", titleD: "ta-tuho-lee"},
      {img: "/thumbnails/dragonfly.jpg", alt: "Dragonfly", titleC: "O-chocho-kala pi ses", titleE: "Dragonfly", titleD: "thi-stow’e"},
      {img: "/thumbnails/Eagle.jpg", alt: "Eagle", titleC: "mikisiw", titleE: "Eagle", titleD: "det’ąnchogh"},
      {img: "/thumbnails/Fire.jpg", alt: "Fire", titleC: "iskotew", titleE: "Fire", titleD: "kwőn dek’ąn"},
      {img: "/thumbnails/grandmothermoon.jpg ", alt: "GrandMotherMoon", titleC: "kookuminow", titleE: "Grandmother Moon", titleD: "tedhe zah"},
      {img: "/thumbnails/Loon.jpg", alt: "Loon", titleC: "ma kwa", titleE: "Loon", titleD: "dadzęné"},
      {img: "/thumbnails/mouse.jpg", alt: "Mouse", titleC: "apâkōsîs", titleE: "Mouse", titleD: "glune’"},
      {img: "/thumbnails/sage.jpg", alt: "Sage", titleC: "paskwawihkaskwa", titleE: "Sage", titleD: "naídi detth’agh"},
      {img: "/thumbnails/sandhillcrane.jpg", alt: "Sandhill Crane", titleC: "ocikak", titleE: "Sandhill Crane", titleD: "déł"},
      {img: "/thumbnails/Sasquatch.jpg", alt: "Sasquatch", titleC: "ookeematow", titleE: "Sasquatch", titleD: "dechęn yaghe hot’ine"},
      {img: "/thumbnails/Sweetgrass.jpg", alt: "Sweetgrass", titleC: "weekâskwâ", titleE: "Sweetgrass", titleD: "nadedelthi"},
      {img: "/thumbnails/Thunderbird.jpg", alt: "Thunderbird", titleC: "pinasoh", titleE: "Thunderbird", titleD: "ʔidié"},
      {img: "/thumbnails/Tobacco.jpg", alt: "Tobacco", titleC: "cistemaw", titleE: "Tobacco", titleD: "ts’elt’wi"},
      {img: "/thumbnails/TreeofLife.jpg", alt: "Tree of Life", titleC: "ototamatik", titleE: "Tree of Life", titleD: "daychenebataani"},
      {img: "/thumbnails/Turtle.jpg", alt: "Turtle", titleC: "mikinak", titleE: "Turtle", titleD: "eguretth’ęné"},
      {img: "/thumbnails/turtleisland.jpg", alt: "Turtle Island", titleC: "mikinak miwistik", titleE: "Turtle Island", titleD: "nuhnęné"},
      {img: "/thumbnails/watercreatures.jpg", alt: "Water Creatures", titleC: "kanoosaymakak", titleE: "Water Creatures", titleD: "Ti͙ch’adii"},
      {img: "/thumbnails/Wind.jpg", alt: "Wind", titleC: "notin", titleE: "Wind", titleD: "niłts’i"},
      {img: "/thumbnails/Wolf.jpg", alt: "Wolf", titleC: "mahigan", titleE: "Wolf", titleD: "nunié"},
      {img: "/thumbnails/Wolverine.jpg", alt: "Wolverine", titleC: "ominacis", titleE: "Wolverine", titleD: "nąghaí"},
    ]
    return(
      <>
        {Slides.map((slide, index) => (
          <div className="artitemT" key={index}>
            <div className="gallerypanel">
              <Image 
                  src={slide.img}
                  fill
                  style={{objectFit: 'contain'}}
                  loading='lazy'
                  alt={slide.alt}
                  className="btnposinnerimg"
                  unoptimized
              />
            </div>
            <div className="gallerypanel">
              <div className="tiletxtC">
                <h2>{slide.titleC}</h2>
              </div>
              <div className="tiletxtE">
                <h2>{slide.titleE}</h2>
              </div>
              <div className="tiletxtD">
                <h2>{slide.titleD}</h2>
              </div>
            </div>    
          </div>
        ))}
      </>
    )
  } 
  return <ImageLooper/>   
};

