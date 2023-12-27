import React, { useState } from 'react'
import { toast } from 'react-toastify';
import './styles.css'
import { Button } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { addTask } from '../../features/task/taskSlice';


export const InputContainer = () => {
  // State variables for task input fields
  const [taskname, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [expiresAt, setExpiresAt] = useState(new Date());

  const dispatch = useDispatch();
  

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if taskname and description are provided
    if (!taskname || !description) {
      toast.error("Task name and description are required!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    // Create a new task object
    const newTask = {
      id: new Date().getTime(), //
      taskname,
      description,
      expiresAt: new Date(expiresAt).toLocaleString(),
    };

    // Dispatch the addTask action to add the new task to the store
    dispatch(addTask(newTask));

    // Display a success toast message
    toast("Successfully added task", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    // Reset form fields after submitting
    setTaskName("");
    setDescription("");
    setExpiresAt(new Date());
  };

  return (
    <div className="inputContainer shadow-lg p-3 mb-5 bg-white rounded">
      <h1 className="headertext">Add Task</h1>

      <form onSubmit={handleSubmit} className="formStyle">
        <div className="singleInputContainer">
          <label htmlFor="task">Task name :</label>
          <br />
          <input
            type="text"
            name="task"
            id="task"
            placeholder="Title"
            value={taskname}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>

        <div className="singleInputContainer">
          <label htmlFor="desc">Description :</label>
          <br />
          <input
            type="text"
            name="desc"
            id="desc"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="singleInputContainer">
          <label htmlFor="expiresAt">Due date :</label>
          <br />
          <input
            type="datetime-local"
            name="expiresAt"
            id="expiresAt"
            value={expiresAt}
            onChange={(e) => setExpiresAt(e.target.value)}
          />
        </div>

        <Button variant="primary" type="submit">
          Add Task
        </Button>
      </form>
    </div>
  );
}
