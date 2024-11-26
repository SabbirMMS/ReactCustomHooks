import { useEffect, useState } from "react";
import instance from "../../utils/Instance";

// This class name is written useFetch in class...
export const useAddPost = (url, requestData) => {
  const [dataA, setData] = useState(null);
  const [errorA, setError] = useState(null);
  const [isLoadingA, setIsLoading] = useState(false);

  useEffect(
    () => {
      const fetchData = async () => {
        try {
          // Get Method
          /*const response = await instance.get(url);*/
          // Post Method
          /*const response = await instance.post(url, requestData);*/
          // Put Method
          /*const response = await instance.put(url, requestData);*/
          // Patch Method
          const response = await instance.patch(url, requestData, {
            headers: {
              "Content-Type": "application/json",
              sabbirMMS: "SabbirMMS",
            },
          });
          setData(response.data);
        } catch (error) {
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      };
      fetchData();
    },
    [
      /*url, reqData*/
      /* It Reloads extra times */
    ]
  );
  return { dataA, errorA, isLoadingA };
};
