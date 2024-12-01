import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios2 from "./../utils/AxiosInstance2";
import { useState } from "react";

function GetPosts() {
  const fetchPostes = async () => {
    const { data } = await axios2.get("/posts");
    console.log("GetPost...", data);
    return data;
  };
  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPostes,
    cacheTime: 1000 * 60 * 5, // 5 minutes
    staleTime: 1000 * 60 * 5, // 5 minutes
    //refetchInterval: 1000 * 60 * 5, // 5 minutes // it will automatically refresh (api call)
  });

  // useMutationStart
  const [title, setTitle] = useState("");
  const queryCLient = useQueryClient();

  const { isPending, isSuccess, isError, mutate } = useMutation({
    mutationFn: (data) => {
      // Posting data to server
      console.log(data);
      return axios2.post("/posts", data);
    },

    // onSuccess is a pessimistic update system (First update in server then in the cache)
    /*onSuccess: (response) => { 
      //queryCLient.invalidateQueries(["posts"]); // this line invalidates th cache and perform a recall in the API
      queryCLient.setQueryData(["posts"], (oldData) => [...oldData, response.data]);
    },*/

    // onMutate is a optimistic Update method which updates data in cache first and then to update
    onMutate: (newPost) => {
      // Using Chat-GPT...
      // Cancel any outgoing queries to prevent race conditions
      //await queryCLient.cancelQueries(["posts"]);
      // Snapshot the previous value for rollback in case of an error
      const previousData = queryCLient.getQueryData(["posts"]);
      // Optimistically update the cache with the new post
      queryCLient.setQueryData(["posts"], (oldData) => {
        return [...oldData, newPost];
      });
      // Return a rollback function in case of mutation failure
      return { previousData };
    },
  });

  // useMutationEnd

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data || data.length === 0) return <div>No posts found!</div>;

  return (
    <div>
      <h2>Post&apos;s Information</h2>
      {/* use Mutation Start */}

      <input
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button
        onClick={() => {
          mutate({
            title,
            id: (parseInt(data[data.length - 1].id) + 1).toString(),
            views: 323,
          });
        }}
      >
        Add Post
      </button>

      {/* use Mutation End */}

      {/* These from the previous class of useMuration class */}
      {data.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}

export default GetPosts;
