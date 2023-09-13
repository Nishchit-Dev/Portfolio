import {
  Flex,
  Box,
  Heading,
  Text,
  Img,
  Avatar,
  Center,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
export default function ResumeHeader() {
  return (
    <>
      <Box h="25px">
        <Center
          p={"10px 0 0 0 "}
          
        >
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            gap={"10px"}
            cursor={"pointer"}
            bg="white"
            w="min-content"
            p="10px 25px"
           zIndex={"9999"}
            m="5px"
            borderRadius={"9999px"}
            onClick={() => {
                window.open(
                  "https://drive.google.com/drive/folders/1ljj7S2ZzhOtKNAfHSkt4f4CDL_eRpZyF?usp=sharing",
                  "_blank"
                );
              }}
          >
            <Text>Resume</Text>

            <ExternalLinkIcon color="black" />
          </Flex>
        </Center>
      </Box>
    </>
  );
}
