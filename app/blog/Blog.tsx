
import { Button,Container,Box,Heading,Text,Img,Flex, Avatar } from '@chakra-ui/react'

interface _Post {
    _id: string;
    coverImage: string;
    title: string;
}

interface Posts extends Array<_Post> {

}

export const BlogCard = ( {singlePost}:any )=> {
    console.log(singlePost)
    const handleClick = ()=>{
        let link = "https://0xnishchit.hashnode.dev/"+ singlePost.slug
        window.open(link,"_blank")
    }
    let date = new Date(singlePost.dateAdded)
    let StringDate = date.getDate() + '/'+ date.getMonth() +"/" + date.getFullYear()
  return (

    <Box w="225px" bg='whiteAlpha.400'  p="13px"  onClick={handleClick} cursor={"pointer"} _hover={{bg:'white',transition:'0.4s'}}> 
      <Box>
        <Flex flexDirection="column" gap="5px">
          <Box bg="white"  m="0 0 10px 0 ">
            <Img
              w="auto"
              h="120px"
              objectFit="scale-down"
              src={singlePost.coverImage}
            />
          </Box>

          <Text size=""  noOfLines={2}  color="black" as="b">
            {singlePost.title} 
          </Text>
          <Text fontSize="12px" noOfLines={3} color="black">
           {singlePost.brief}
          </Text>
        </Flex>
      </Box>
      <Flex m="7px 0 " align={"center"} gap={"10px"}>
        <Avatar size={"sm"} src="https://cdn.hashnode.com/res/hashnode/image/upload/v1685809351045/sJoOjA_bF.jpg"/>
        <Flex flexDirection={"column"}>
        <Text fontSize={"12px"}>0xNishchit</Text>
        <Text fontSize={"12px"}>{StringDate}</Text>
        </Flex>
       
      </Flex>
    </Box>
  );
};

export default async function Blogs({ posts }: any) {
    return (
        <>
            {posts.map((PostDetails:any)=>{
               return  BlogCard(PostDetails)
            })}
        </>
    )
}
