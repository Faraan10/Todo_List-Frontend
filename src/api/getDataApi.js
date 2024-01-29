import axios from "axios";
import url from "../Constants";

const getData = async () => {
  const response = await axios({
    url: `${url}/todo/`,
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
};

export default getData;
