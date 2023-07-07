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
  const [status, setStatus] = useState(false);
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
    if (status) {
      return;
    }
    (async function () {
      let responseData: Object[] = [];
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

        const moreData = (await res.json()).data.user.publication.posts;
        responseData = [...responseData, ...moreData];

        if (i == numberPost - 1) {
          return responseData;
        }
      }
    })().then((res: any) => {
      setData(res || []);
    });
  }, [numberPost]);

  return data;
};
