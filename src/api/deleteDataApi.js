import axios from "axios";

const deleteData = async (id) => {
  const response = await axios({
    url: `http://localhost:1020/todo/delete/${id}`,
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
};

export default deleteData;
