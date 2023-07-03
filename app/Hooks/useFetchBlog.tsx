import { useEffect, useState } from "react";

export const useFetchBlog = () => {
  const [data, setData] = useState<any>(null);
  const query = `{
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
      }`;
  const Url = "https://api.hashnode.com/graphql";

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
      })

      console.log(res)
      setData(res.json())
    })();
  }, []);

  return data;
};
