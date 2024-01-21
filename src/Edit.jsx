import { useState, useEffect } from "react";
import axios from "axios";
import { useParams,useNavigate } from "react-router-dom";
const BASE_URL = "https://6586e0af468ef171392ee7fa.mockapi.io";
function Edit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [todo, setTodo] = useState({
    name: "",
    status: "",
  });
  async function fetchTodo(todoId) {
    try {
      const response = await axios.get(`${BASE_URL}/todos/${todoId}`);
      setTodo(response.data);
    } catch (error) {
      console.log("error", error);
    }
  }
  useEffect(() => {
    fetchTodo(id);
  }, [id]);

  function handleNameChange(event) {
    setTodo((previousState) => ({
      ...previousState,
      name: event.target.value,
    }));
  }
  function handleStatusChange(event) {
    setTodo((previousState) => ({
      ...previousState,
      status: event.target.value,
    }));
  }

  async function updateName() {
    try {
      await axios.put(`${BASE_URL}/todos/${id}`, {
        name: todo.name,
        status: todo.status,
      });
      //alert("Success fully!");
      navigate("/");
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <>
      <div style={{margin:"1rem"}}>Hello Edit page {id}</div>
      <div>
        <div style={{margin:"1rem"}}>
          <input onChange={handleNameChange} type="text" value={todo.name} />
        </div>
        <div style={{margin:"1rem"}}>
          <input
            onChange={handleStatusChange}
            type="text"
            value={todo.status}
          />
        </div>
      </div>
      <div style={{margin:"1rem"}}>
      <button onClick={() => updateName()}>Edit</button>
      </div>
    </>
  );
}
export default Edit;
