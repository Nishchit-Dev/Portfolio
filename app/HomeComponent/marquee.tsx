"use client"
import { Box, Flex,Heading,Text } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";
export default function Skill_Marquee() {
  return (
    <Box  bg={"black"}>
        <Marquee>
          <Flex gap={25} m={2} color={"white"}>
            <Box><Heading>UI/UX design</Heading></Box>
            <Box><Heading>&#183;</Heading></Box>
            <Box><Heading>Front-End</Heading></Box>
            <Box><Heading>&#183;</Heading></Box>
            <Box><Heading>Back-End</Heading></Box>
            <Box><Heading>&#183;</Heading></Box>
            <Box><Heading>Blockchain</Heading></Box>
            <Box><Heading>&#183;</Heading></Box>
            <Box><Heading>Solidity</Heading></Box>
          </Flex>
        </Marquee>
    </Box>
  );
}
