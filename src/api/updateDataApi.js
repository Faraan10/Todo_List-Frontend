import axios from "axios";

const updateData = async (id, name) => {
  const response = await axios({
    url: `http://localhost:1020/todo/update/${id}`,
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    data: JSON.stringify({ name }),
  });
  return response.data;
};

export default updateData;
