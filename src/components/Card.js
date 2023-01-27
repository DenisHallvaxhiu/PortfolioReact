import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <section>
      <div style={{backgroundColor:"white",borderRadius:"20px",color:"black"}}>
        <img style={{borderRadius:"20px"}} src={imageSrc}></img>
        <h3 style={{padding:"10px 20px",fontSize:"24px",fontWeight:"bold"}}>{title}</h3>
        <p style={{padding:"10px  20px", color:"gray"}}>{description}</p>
        <a style={{fontSize:"20px",padding:"10px  20px",cursor:"pointer"}}>See more <FontAwesomeIcon icon={faArrowRight} size="1x" /></a>
        <div style={{height:"10px"}}></div>
      </div>
    </section>
  );
};

export default Card;
