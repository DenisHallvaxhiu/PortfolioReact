import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import profile from "../images/Denis_Hallvaxhiu.jpeg"
const greeting = "Hello, I am Denis!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <img style={{borderRadius:"50%", height:"200px"}} src={profile}/>
    <h1 style={{fontSize:"24px"}}>{greeting}</h1>
    <h1 style={{fontSize:"44px",fontWeight:"bold"}}>{bio1}</h1>
    <h1 style={{fontSize:"44px",fontWeight:"bold"}}>{bio2}</h1>
  </FullScreenSection>
);

export default LandingSection;
