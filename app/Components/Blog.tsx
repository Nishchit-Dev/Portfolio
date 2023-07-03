"use client";

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

  console.log("test");
  console.log(post);

  // here we have check if the array is filled with post then will set the data
  useEffect(() => {
    if(post.length > 0 ){
      setData(post);
    }
  }, [post]);

  return (
    <>
      <Center>
        <Box>
          <Heading>Read My Tech blog</Heading>
          <Center>
            <Text>Wanna Vist my Hashnode Profile ? </Text>
          </Center>
        </Box>
      </Center>
      <Center>
        <Flex
          flexDir={"row"}
          gap={"40px"}
          p={"50px"}
          flexWrap={"wrap"}
          align={"center"}
          justify={"center"}
        >
          {post.length > 0
            ? data.map((ele: any, index: number) => {
                console.log(ele);
                return <BlogCard singlePost={ele} key={index}/>;
                // return <h1 key={index}>hello</h1>
              })
            : ""}
        </Flex>
      </Center>
    </>
  );
}

export const BlogCard = ({ singlePost }: any) => {
  console.log("#2 ", singlePost);
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
      p="13px"
      onClick={handleClick}
      cursor={"pointer"}
      _hover={{ bg: "white", transition: "0.4s" }}
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
