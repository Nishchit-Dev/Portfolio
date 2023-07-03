import { useEffect, useState } from "react";

export const useFetchTotalPost = () => {
  const [data, setData] = useState(0);
  const Url = "https://api.hashnode.com/graphql";
  const query = `{
    user(username: "0xNishchit") {
        _id
        numPosts
      }
    }`;

  useEffect(() => {
    (async function () {
      const res = await fetch(Url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: query,
        }),
      });

      // console.log((await res.json()).data.user.publication.posts)
      setData((await res.json()).data.user.numPosts);
    })();
  }, []);

  return data;
};
export const useFetchBlog = () => {
  const [data, setData] = useState<any[]>([]);
  const Dquery = (page: number = 0) => {
    return `{
        user(username: "0xNishchit") {
          _id
          publication {
            title
            posts(page: ${page}) {
              _id
              title
              coverImage
              dateAdded
              brief
              slug
            }
          }
        }
      }`;
  };
  const Url = "https://api.hashnode.com/graphql";

  const CountPostPage = (): number => {
    let num: number = useFetchTotalPost();
    if (num / 6) {
      num = Math.round(num / 6 + 1);
    }
    console.log(num);
    return num;
  };
  let numberPost: number = CountPostPage();

  useEffect(() => {
    (async function () {
     
      console.log(numberPost);
      for (let i = 0; i < numberPost; i++) {
        let query = Dquery(i);
        const res = await fetch(Url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: query,
          }),
        });
        // let newData = (await res.json()).data.user.publication.posts ;
        // setData(async(prevData:any)=>[...prevData,newData]);
        const responseData = (await res.json()).data.user.publication.posts;
        setData((prevData) => {
          const newData = Array.isArray(prevData) ? [...prevData] : [];
          return [...newData, ...responseData];
        });
      }
      

      // console.log((await res.json()).data.user.publication.posts)
    })();
  }, [numberPost]);

  return data;
};
