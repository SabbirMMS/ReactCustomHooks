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
          // Using Interceptor
          instance.interceptors.request.use(
            (config) => {
              config.headers["Auth"] = "Sabbir";
              return config;
            },
            (error) => {
              console.error("Error", error);
              // Handle error
              return Promise.reject(error);
            }
          );
          instance.interceptors.response.use(
            (response) => {
              response.headers["Auth"] = "Sabbir";
              return response;
            },
            (error) => {
              console.error("Error", error);
              // Handle error
              return Promise.reject(error);
            }
          );

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
