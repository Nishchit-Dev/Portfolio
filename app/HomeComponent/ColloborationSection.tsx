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
import { StaticBg } from "./Heading";

export default function Colloab() {
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
                    color={"white"}
                    background={"blackAlpha.600"}
                    onClick={()=>{window.open("https://twitter.com/0xNishchit","_blank")}}
                  >
                    Twitter
                  </Button>
                  <Button
                    leftIcon={<Img src={discord.src} width={"35px"} />}
                    color={"white"}
                    _hover={{ opacity: 1, bg: "white", color: "black" }}
                    opacity={"0.8"}
                    background={"blackAlpha.600"}
                  >
                    Discord
                  </Button>
                  <Button
                    leftIcon={<Img src={hashnode.src} width={"35px"} />}
                    color={"white"}
                    _hover={{ opacity: 1, bg: "white", color: "black" }}
                    opacity={"0.8"}
                    background={"blackAlpha.600"}
                  >
                    Hashnode
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
