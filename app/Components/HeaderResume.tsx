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
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          gap={"10px"}
          p="8px 0 0 0 "
        >
          <Center
            cursor={"pointer"}
            bg="white"
            p="10px 25px"
            borderRadius={"999px"}
            gap={"10px"}
          >
            <Text
              textAlign={"center"}
              onClick={() => {
                window.open(
                  "https://drive.google.com/drive/folders/1ljj7S2ZzhOtKNAfHSkt4f4CDL_eRpZyF?usp=sharing",
                  "_blank"
                );
              }}
            >
              Resume
            </Text>

            <ExternalLinkIcon color="black" />
          </Center>
        </Flex>
      </Box>
    </>
  );
}
