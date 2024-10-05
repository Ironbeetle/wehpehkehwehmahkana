'use client';
import React, {useEffect, useState, useRef} from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Linkystyle = styled.div`
  text-decoration: none;
  text-align: center;
  align-content: center;
  padding: 0;
  width: 100%;
`;

const linkstyler = {
  textDecoration: 'none',
  width: '100%',
  color: 'rgba(255, 255, 255, 0.8)',
  fontSize: 'clamp(2.5rem, 1.5vw + 1.5rem , 3rem)',  
} 
  
const TeachingsCarousel = ({children}) => {

    const [width, setWidth] = useState(0);
    const sacred_wrapper = useRef();

    useEffect(() => {
        setWidth(sacred_wrapper.current.scrollWidth - sacred_wrapper.current.offsetWidth);
    }, []);

    return (
      <div className="sacredseven">
        <motion.div className="sacred_wrapper"
            ref={sacred_wrapper} 
            whileTap={{cursor: "grabbing"}}
        >
          <motion.div className="sacred_inner"
              drag="x"
              dragConstraints={{left: -width, right: 0}}  
          >
           {children}
          </motion.div>
        </motion.div>
      </div>
    )
  };

  export default TeachingsCarousel;