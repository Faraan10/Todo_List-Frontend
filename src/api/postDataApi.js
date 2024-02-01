import axios from "axios";
import url from "../Constants";

const postData = async (name) => {
  const response = await axios({
    url: `${url}/todo/post/`,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: JSON.stringify({ name }),
  });
  return response.data;
};

export default postData;
