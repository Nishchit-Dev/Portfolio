"use client";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";
export default function Skill_Marquee() {
  return (
    <>
      <Box position={"sticky"} p="70px 0" overflow={"clip"}>
        <Box
          bg={"black"}
          style={{ rotate: "2deg" }}
          position={"absolute"}
          transform={"translateX(-15px)"}
          w="110%"
        >
          <Marquee>
            <Flex gap={25} m={2} color={"white"}>
              <Box>
                <Heading>UI/UX design</Heading>
              </Box>
              <Box>
                <Heading>`&#183;`</Heading>
              </Box>
              <Box>
                <Heading>Front-End</Heading>
              </Box>
              <Box>
                <Heading>`&#183;`</Heading>
              </Box>
              <Box>
                <Heading>Back-End</Heading>
              </Box>
              <Box>
                <Heading>`&#183;`</Heading>
              </Box>
              <Box>
                <Heading>Blockchain</Heading>
              </Box>
              <Box>
                <Heading>`&#183;`</Heading>
              </Box>
              <Box>
                <Heading>Solidity</Heading>
              </Box>
            </Flex>
          </Marquee>
        </Box>
        <Box
          //   style={{ rotate: "-5deg" }}
          bg={"black"}
          rotate="-5deg"
          overflow={"hidden"}
          transform={{
            base: "translateX(-15px) rotate(-10deg)",
            md: "translateX(-15px) rotate(-5deg)",
            lg: "translateX(-15px) rotate(-3deg)",
          }}
          w="110%"
        >
          <Marquee speed={80}>
            <Flex gap={25} m={2} color={"white"}>
              <Box>
                <Heading>UI/UX design</Heading>
              </Box>
              <Box>
                <Heading>`&#183;`</Heading>
              </Box>
              <Box>
                <Heading>Front-End</Heading>
              </Box>
              <Box>
                <Heading>`&#183;`</Heading>
              </Box>
              <Box>
                <Heading>Back-End</Heading>
              </Box>
              <Box>
                <Heading>`&#183;`</Heading>
              </Box>
              <Box>
                <Heading>Blockchain</Heading>
              </Box>
              <Box>
                <Heading>`&#183;`</Heading>
              </Box>
              <Box>
                <Heading>Solidity</Heading>
              </Box>
            </Flex>
          </Marquee>
        </Box>
      </Box>
    </>
  );
}
