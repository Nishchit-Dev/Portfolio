"use client";
import Marquee from "react-fast-marquee";

import { useEffect, useState } from "react";
import { useFetchBlog } from "../Hooks/useFetchBlog";
import {
  Flex,
  Box,
  Heading,
  Text,
  Img,
  Avatar,
  Center,
} from "@chakra-ui/react";
export default function Blogs() {
  const [data, setData] = useState<any>([]);
  const post: any = useFetchBlog();
  let dataSetOne = post.length >0 ? data.sort(()=>Math.random() - 0.5) : "" ;
  let dataSetTwo = post.length >0 ? data.sort(()=>Math.random() - 0.5) : "" ;

  // here we have check if the array is filled with post then will set the data
  useEffect(() => {
    if (post.length > 0) {
      setData(post);
    }
  }, [post]);

  return (
    <>
    <Box>

      <Center>
        <Flex flexDir="column" align={"center"}>
       
          <Heading >Read My Tech blog</Heading>
          <Center>
            <Text p="15px" wordBreak={"break-all"}>Let's read whats happening in the tech-world and learn something together!!!</Text>
          </Center>
        </Flex>
      </Center>
      <Center>
        <Flex flexDirection={"column"} minW={"330px"}>

        <Marquee>
          <Flex
            flexDir={"row"}
            gap={"40px"}
            p={"15px"}
            flexWrap={"wrap"}
            align={"center"}
            justify={"center"}
          >
            {post.length > 0
              ? dataSetOne.map((ele: any, index: number) => {
                  return <BlogCard singlePost={ele} key={index} />;
                  // return <h1 key={index}>hello</h1>
                })
              : ""}
          </Flex>
        </Marquee>
        <Marquee direction={"right"}>
          <Flex
            flexDir={"row"}
            gap={"40px"}
            p={"15px"}
            flexWrap={"wrap"}
            align={"center"}
            justify={"center"}
          >
            {post.length > 0
              ? dataSetTwo.map((ele: any, index: number) => {
                  return <BlogCard singlePost={ele} key={index} />;
                  // return <h1 key={index}>hello</h1>
                })
              : ""}
          </Flex>
        </Marquee>
        </Flex>

      </Center>
    </Box>

    </>
  );
}

export const BlogCard = ({ singlePost }: any) => {

  const handleClick = () => {
    let link = "https://0xnishchit.hashnode.dev/" + singlePost.slug;
    window.open(link, "_blank");
  };
  let date = new Date(singlePost.dateAdded);
  let StringDate =
    date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
  return (
    <Box
      w="225px"
      bg="whiteAlpha.400"
      p="20px 15px"
      onClick={handleClick}
      cursor={"pointer"}
      _hover={{ bg: "white", transition: "0.4s", transform: "scale(1.1)" }}
    >
      <Box>
        <Flex flexDirection="column" gap="5px">
          <Box bg="white" m="0 0 10px 0 ">
            <Img
              w="auto"
              h="120px"
              objectFit="scale-down"
              src={singlePost.coverImage}
            />
          </Box>

          <Text size="" noOfLines={2} color="black" as="b">
            {singlePost.title}
          </Text>
          <Text fontSize="12px" noOfLines={3} color="black">
            {singlePost.brief}
          </Text>
        </Flex>
      </Box>
      <Flex m="7px 0 " align={"center"} gap={"10px"}>
        <Avatar
          size={"sm"}
          src="https://cdn.hashnode.com/res/hashnode/image/upload/v1685809351045/sJoOjA_bF.jpg"
        />
        <Flex flexDirection={"column"}>
          <Text fontSize={"14px"}>0xNishchit</Text>
          <Text fontSize={"12px"}>{StringDate}</Text>
        </Flex>
      </Flex>
    </Box>
  );
};
