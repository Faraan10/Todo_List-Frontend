import axios from "axios";

const getData = async () => {
  const response = await axios({
    url: "http://localhost:1020/todo/",
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
};

export default getData;
