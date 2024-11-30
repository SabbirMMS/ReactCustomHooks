import { useQuery } from "@tanstack/react-query";
import axios2 from "./../utils/AxiosInstance2";

function GetPosts() {
  const fetchPostes = async () => {
    const { data } = await axios2.get("/posts");
    console.log("GetPost...", data);
    return data;
  };
  fetchPostes();

  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPostes,
    cacheTime: 1000 * 60 * 5, // 5 minutes
    staleTime: 1000 * 60 * 5, // 5 minutes
    //refetchInterval: 1000 * 60 * 5, // 5 minutes // it will automatically refresh (api call)
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data || data.length === 0) return <div>No posts found!</div>;

  return (
    <div>
      {data.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}

export default GetPosts;
