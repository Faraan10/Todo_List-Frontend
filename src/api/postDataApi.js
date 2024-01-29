import axios from "axios";

const postData = async (name) => {
  const response = await axios({
    url: "http://localhost:1020/todo/post/",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: JSON.stringify({ name }),
  });
  return response.data;
};

export default postData;
