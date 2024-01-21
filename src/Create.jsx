import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const BASE_URL = "https://6586e0af468ef171392ee7fa.mockapi.io";
function Create() {
  const navigate = useNavigate();
  const [todo, setTodo] = useState({
    name: "",
    status: "",
  });
  useEffect(() => {
  }, []);
  async function addName() {
    try {
      await axios.post(`${BASE_URL}/todos`, {
        name: todo.name,
        status: todo.status,
      });
      //alert("Success fully!");
      navigate("/");
    } catch (error) {
      console.log("error", error);
    }
  }

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

  return (
    <>
      <div style={{margin:"1rem"}}>Hello Edit page</div>
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
      <button onClick={() => addName()}>Add</button>
      </div>
    </>
  );
}
export default Create;
