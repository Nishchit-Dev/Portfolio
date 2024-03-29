import { useEffect, useState } from "react";

export const useFetchTotalPost = () => {
  const [data, setData] = useState(0);
  const Url = "https://gql.hashnode.com/";
  const query = `{
    user(username: "0xNishchit") {
        id
        posts(pageSize: 0, page: 1) {
          totalDocuments
        }
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

      // console.log((await res.json()).data.user.posts.totalDocuments)
      setData((await res.json()).data.user.posts.totalDocuments);
    })();
  }, []);

  return data;
};
export const useFetchBlog = () => {
  const [status, setStatus] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const Dquery = (page: number = 0) => {
    return `{
        publication(id: "64574d4030be1a2397aa5cb5") {
          id
          title
          displayTitle
          url
          canonicalURL
          posts(first: 10) {
            totalDocuments
            edges {
                node {
                    id
                    slug
                    title
                    url
                    brief
                    publishedAt
                    coverImage {
                        url
                    }
                }
            }
      }
      }`;
  };
  const Url = "https://gql.hashnode.com/";

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

        const moreData = (await res.json());
        console.log(moreData);
        // responseData = [...responseData, ...moreData];

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
