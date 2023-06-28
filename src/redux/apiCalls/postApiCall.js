import { postActions } from "../slices/postsSlice";
import client from "../../api/client";
// get post
export function getPost(pageNumber) {
  return async (dispatch) => {
    try {
      const { data } = await client.get(`/api/posts?pageNumber=${pageNumber}`);
      dispatch(postActions.setPosts(data));
    } catch (error) {
      console.log(error);
    }
  };
}
