import { React, useEffect } from "react";
import { getAllPosts } from "../api/post";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../redux/apiCalls/postApiCall";

let pageNumber = 0;
let limit = 9;

export default function Home() {
  // const fetchPosts = async () => {
  //   const { error, data } = await getAllPosts();

  //   if (error) return console.log(error);
  //   console.log(data);
  // };

  // useEffect(() => {
  //   fetchPosts();
  // }, []);

  const dispatch = useDispatch();
  const {posts} = useSelector(state => state.post)

  useEffect(() => {
    dispatch(getPost(0));
  }, []);

  console.log(posts);

  return <div>Home</div>;
}
