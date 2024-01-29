import axios from "axios";
import url from "../Constants";

const updateData = async (id, name) => {
  const response = await axios({
    url: `${url}/todo/update/${id}`,
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    data: JSON.stringify({ name }),
  });
  return response.data;
};

export default updateData;
