import axios from "axios";
import client from "./client";

export const getAllPosts = async () => {
  try {
    const { data } = await axios("http://localhost:8000/api/posts");
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { message: error.message || error };
  }
};
