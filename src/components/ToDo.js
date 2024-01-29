import React, { useState, useEffect } from "react";
import getDataApi from "../api/getDataApi";
import postDataApi from "../api/postDataApi";
import updateDataApi from "../api/updateDataApi";
import deleteDataApi from "../api/deleteDataApi";

export default function ToDo() {
  const [data, setData] = useState({ name: "" }); // for setting data from onChange
  const [id, setId] = useState();
  const [items, setItems] = useState([]); // storing data in array to map ( map can only be used for array items)
  const [update, setUpdate] = useState(false);

  const { name } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  //console.log(data);

  const getData = async () => {
    const response = await getDataApi();
    setItems(response);
  };

  const postData = async (todo) => {
    await postDataApi(todo);
    getData();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    postData(name);
    setData({
      name: "",
    });
  };
  //console.log(items);

  // updating data
  const updateData = async (id, name) => {
    setUpdate(true);
    setData({ name });
    setId(id);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await updateDataApi(id, name);
    setUpdate(false);
    setData({
      name: "",
    });
    setId(null);
    getData();
  };

  // deleting data
  const deleteData = async (id) => {
    await deleteDataApi(id);
    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <form className="form" onSubmit={update ? handleUpdate : handleSubmit}>
        <input type="text" name="name" value={name} onChange={handleChange} />
        <button type="submit">
          <span>{update ? "Update" : "Add"}</span>
        </button>
      </form>
      <div>
        <table>
          {items.map((e) => (
            <tr key={e.id}>
              <li>{e.name}</li>
              <td>
                <i
                  className="fa-regular alignedit fa-pen-to-square"
                  onClick={() => updateData(e._id, e.name)}
                ></i>
                <i
                  className="fa-solid aligndelete fa-trash"
                  onClick={() => deleteData(e._id)}
                ></i>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
