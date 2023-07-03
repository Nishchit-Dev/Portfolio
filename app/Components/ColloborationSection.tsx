"use client";

import {
  Box,
  Center,
  Container,
  Text,
  Flex,
  Img,
  Heading,
  Button,
  Icon,
  IconButton,
} from "@chakra-ui/react";
import discord from "../resources/icons/discord.png";
import twitter from "../resources/icons/twitter.png";
import hashnode from "../resources/icons/hashnode.png";
import github from "../resources/icons/github.png"
import { StaticBg } from "./LandingPage";
import linkedIn from '../resources/icons/linkedin.png'

export default function Collaboration() {
  return (
    <>
      <Box h="75vh">
        <StaticBg />
        <Center h={"inherit"}>
          <Flex direction={"column"} align={"center"}>
            <Heading>Let's talk to</Heading>
           
            <Text
              fontSize={{ base: "34px", md: "50px", lg: "70px" }}
              fontWeight={"900"}
            >
              Collaborate
            </Text>
            <Button
              _hover={{ opacity: 1 }}
              opacity={"0.8"}
              background={"blackAlpha.600"}
              color={"white"}
              onClick={()=>{window.open("https://twitter.com/messages/1333328191633592326-1333328191633592326?text=Hey!! Nishchit","_blank")}}
            >
              Collaborate 🤝
            </Button>
            <Flex m="40px 0" direction={"column"}>
              <Center>
                <Text fontWeight={"thin"} fontSize={"4xl"}>
                  Wanna Connect ?{" "}
                </Text>
              </Center>
              <Center m="10px 0">
                <Flex gap={"10px"} direction={{ base: "column", lg: "row" }}>
                  <Button
                    leftIcon={<Img src={twitter.src} width={"35px"} />}
                    _hover={{ opacity: 1, bg: "white", color: "black" }}
                    opacity={"0.8"}
                    color={"blackAlpha.800"}
                    background={"whiteAlpha.600"}
                    onClick={()=>{window.open("https://twitter.com/0xNishchit","_blank")}}
                  >
                    Twitter
                  </Button>
                  <Button
                    leftIcon={<Img src={github.src} width={"35px"} />}
                    _hover={{ opacity: 1, bg: "white", color: "black" }}
                    opacity={"0.8"}
                    color={"blackAlpha.800"}
                    background={"whiteAlpha.600"}
                    onClick={()=>{window.open("https://github.com/Nishchit-Dev/","_blank")}}
                  >
                    GitHub
                  </Button>
                  <Button
                    leftIcon={<Img src={hashnode.src} width={"35px"} />}
                    color={"blackAlpha.800"}
                    _hover={{ opacity: 1, bg: "white", color: "black" }}
                    opacity={"0.8"}
                    background={"whiteAlpha.600"}
                    onClick={()=>{window.open("https://0xnishchit.hashnode.dev/","_blank")}}
                  >
                    Hashnode
                  </Button>
                  <Button
                    leftIcon={<Img src={linkedIn.src} width={"35px"} />}
                    color={"blackAlpha.800"}
                    _hover={{ opacity: 1, bg: "white", color: "black" }}
                    opacity={"0.8"}
                    background={"whiteAlpha.600"}
                    onClick={()=>{window.open("https://in.linkedin.com/in/nishchit-malasana-450766175","_blank")}}
                  >
                    LinkedIN
                  </Button>
                </Flex>
              </Center>
            </Flex>
          </Flex>
        </Center>
      </Box>
    </>
  );
}
