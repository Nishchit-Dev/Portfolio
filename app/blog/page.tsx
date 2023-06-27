"use client";

import { Center, Flex, Heading, Text, Box } from "@chakra-ui/react";
import { BlogCard } from "./Blog";
import { StaticBg } from "../HomeComponent/Heading";

export default async function FetchBlog() {
  const responce = await fetch("https://api.hashnode.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `{
                            user(username: "0xNishchit") {
                              _id
                              publication {
                                title
                                posts(page: 0) {
                                  _id
                                  title
                                  coverImage
                                  dateAdded
                                  brief
                                  slug
                                }
                              }
                            }
                          }
                `,
    }),
  });

  const { data } = await responce.json();
  let posts = data.user.publication.posts;

  return (
    <div>
      {" "}
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
          {posts.map((ele: any) => {
            return <BlogCard key={ele._id} singlePost={ele} />;
          })}
        </Flex>
      </Center>
    </div>
  );
}
