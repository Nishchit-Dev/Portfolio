'use client'

import { Box, Center, Container,Text,Flex, Heading } from "@chakra-ui/react"
import { StaticBg } from "./Heading"

export default function Colloab (){
    return(<>
        <Box  h='75vh'>
            <StaticBg/>
                <Center h={"inherit"}>
                    <Flex direction={"column"} align={"center"}>

                    <Text fontWeight={"light"} m="30px">
                        Collaboration
                    </Text>
                    <Heading >
                        Let's talk to
                    </Heading>
                    <Text  fontSize={{ base: '34px', md: '50px', lg: '70px' }} fontWeight={"900"}>Collaborate</Text>
                    </Flex>
                </Center>

        </Box>
    </>)
}