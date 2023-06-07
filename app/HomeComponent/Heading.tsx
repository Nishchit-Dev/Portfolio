"use client";
import { Box, Flex, Heading } from "@chakra-ui/layout";
import { Center } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import face from "../resources/memoji/face.png";
import { Img } from "@chakra-ui/image";
import background from "../resources/bg/Frame 10.png";
import react from "../resources/icons/Frame 1.png";
import node from "../resources/icons/Frame 2.png";
import sol from "../resources/icons/Frame 3.png";
import sql from "../resources/icons/Frame 4.png";
import mongo from "../resources/icons/Frame 5.png";
import git from "../resources/icons/Frame 6.png";
import ts from "../resources/icons/Frame 7.png";
import js from "../resources/icons/Frame 8.png";
import polygon from "../resources/icons/Group 2.png";
import polygon2 from "../resources/icons/Group 5.png";
import vs from "../resources/icons/Visual Studio.png";
import eth from "../resources/icons/Group 4.png";
import metamask from "../resources/icons/Group 3.png";
import vscode from "../resources/icons/VSCode.png";
import ubuntu from "../resources/icons/Frame 9.png";
import figma from "../resources/icons/Frame 10.png";



import { useEffect} from "react";

const FloatingObject = () => {
  return (
    <>
      <Box
        position={"relative"}
        overflow={"hidden"}
        maxH={"100vh"}
        width={"full"}
      >
        <Img
          src={react.src}
          w="250px"
          pos={"absolute"}
          top={"15%"}
          left={"55%"}
          className="parallex check"
          translateX={"-50%"}
          translateY={"-50%"}
          data-speedx="0.3"
          data-speedy="0.18"
        />
        <Img
          src={sol.src}
          pos={"absolute"}
          top={"70%"}
          left={"76%"}
          className="parallex"
          translateX={"-50%"}
          translateY={"-50%"}
          data-speedx="0.27"
          data-speedy="0.15"
        />
        <Img
          src={node.src}
          pos={"absolute"}
          top={"30%"}
          left={"13%"}
          className="parallex"
          translateX={"-50%"}
          translateY={"-50%"}
          data-speedx="0.20"
          data-speedy="0.11"
        />
        <Img
          src={sql.src}
          pos={"absolute"}
          top={"18%"}
          left={"80%"}
          className="parallex"
          translateX={"-50%"}
          translateY={"-50%"}
          data-speedx="0.23"
          data-speedy="0.09"
        />
        <Img
          src={mongo.src}
          pos={"absolute"}
          top={"80%"}
          left={"22%"}
          className="parallex"
          translateX={"-50%"}
          translateY={"-50%"}
          data-speedx="0.18"
          data-speedy="0.07"
        />
        <Img
          src={git.src}
          pos={"absolute"}
          top={"60%"}
          left={"40%"}
          className="parallex"
          translateX={"-50%"}
          translateY={"-50%"}
          data-speedx="0.15"
          data-speedy="0.2"
        />
        <Content></Content>

        <Img
          src={ts.src}
          pos={"absolute"}
          top={"90%"}
          left={"70%"}
          className="parallex"
          translateX={"-50%"}
          translateY={"-50%"}
          data-speedx="0.11"
          data-speedy="0.3"
        />
        <Img
          src={js.src}
          pos={"absolute"}
          top={"38%"}
          left={"88%"}
          className="parallex"
          translateX={"-50%"}
          translateY={"-50%"}
          data-speedx="0.09"
          data-speedy="0.12"
        />

        <Img
          src={polygon2.src}
          pos={"absolute"}
          top={"7%"}
          left={"39%"}
          className="parallex"
          translateX={"-50%"}
          translateY={"-50%"}
          data-speedx="0.12"
          data-speedy="0.14"
        />
        <Img
        w="120px"
          src={polygon.src}
          pos={"absolute"}
          top={"60%"}
          left={"9%"}
          className="parallex"
          translateX={"-50%"}
          translateY={"-50%"}
          data-speedx="0.12"
          data-speedy="0.14"
        />
        <Img
          src={eth.src}
          pos={"absolute"}
          top={"24%"}
          left={"25%"}
          className="parallex"
          translateX={"-50%"}
          translateY={"-50%"}
          data-speedx="0.16"
          data-speedy="0.16"
        />
        <Img
          src={metamask.src}
          pos={"absolute"}
          w="180px"
          top={"42%"}
          left={"36%"}
          className="parallex"
          translateX={"-50%"}
          translateY={"-50%"}
          data-speedx="0.19"
          data-speedy="0.17"
        />
        <Img
          src={vscode.src}
          pos={"absolute"}
          top={"60%"}
          left={"30%"}
          className="parallex"
          translateX={"-50%"}
          translateY={"-50%"}
          data-speedx="0.23"
          data-speedy="0.18"
          zIndex={11}
        />
        <Img
          src={vs.src}
          pos={"absolute"}
          top={"40%"}
          left={"62%"}
          className="parallex"
          translateX={"-50%"}
          translateY={"-50%"}
          data-speedx="0.2"
          data-speedy="0.4"
          zIndex={11}

        />
         <Img
          src={ubuntu.src}
          pos={"absolute"}
          w="120px"
          top={"66%"}
          left={"52%"}
          zIndex={-1}
          className="parallex"
          translateX={"-50%"}
          translateY={"-50%"}
          data-speedx="0.16"
          data-speedy="0.18"
        />
         <Img
          src={figma.src}
          pos={"absolute"}
          w="120px"
          top={"76%"}
          left={"42%"}
          zIndex={-1}
          className="parallex"
          translateX={"-50%"}
          translateY={"-50%"}
          data-speedx="0.16"
          data-speedy="0.18"
        />
      </Box>
    </>
  );
};
const Content = () => {
  return (
    <Center h="100vh" p="150px 0 0 0 ">
      <Flex flexDir={"column"} align={"center"}>
        <Img src={face.src} w="90%" zIndex={10} filter={"drop-shadow(-14px 11px 21px rgba(0, 0, 0, 0.45));"}/>
        <Text fontWeight={"100"} fontSize={"90px"}>
          Hey!!
        </Text>
        <Heading fontSize={"70px"}>Its Nishchit</Heading>
      </Flex>
    </Center>
  );
};

const StaticBg = () => {
  return (
    <>
      <Img
        width={"full"}
        src={background.src}
        position={"fixed"}
        zIndex={"-1"}
      />
    </>
  );
};

export function LandingPage() {
  useEffect(() => {
    const parallexEffect = () => {
      const parallex = document.querySelectorAll(".parallex");

      let xValue = 0;
      let yValue = 0;

      window.addEventListener("mousemove", (e) => {
        xValue = e.clientX - window.innerWidth / 2;
        yValue = e.clientY - window.innerHeight / 2;

        console.log(xValue);
        console.log(parallex);

        parallex.forEach((e:HTMLElement) => {
          let speedx = e.dataset.speedx;
          let speedy = e.dataset.speedy;
          e.style.transform = `translateX(calc(-50% - ${xValue * speedx}px)) translateY(calc(-50% - ${yValue * speedy*0.5}px))`;
        });
      });
    };
    parallexEffect();
  }, []);
  return (
    <>
      <StaticBg />
      <Box h="100vh" bg={background.src}>
        <FloatingObject />
      </Box>
    </>
  );
}
