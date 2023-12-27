import React, { useState } from 'react'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { updateTask, deleteTask } from '../../features/task/taskSlice';
import { useDispatch } from "react-redux";
import { toast } from 'react-toastify';


export const SingleTask = ({ id, taskname, description, expiresAt }) => {
  // State variables for handling task updates
  const [updateTaskname, setUpdateTaskName] = useState(taskname);
  const [updateDescription, setUpdateDescription] = useState(description);
  const [updateExpiresAt, setUpdateExpiresAt] = useState(expiresAt);
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();


  // Function to close the update modal
  const handleClose = () => {
    setShow(false);
  };

  // Function to open the update modal
  const handleShow = () => {
    setShow(true);
  };

  // Function to handle update form submission
  const handleSubmit = () => {
    // Check if taskname and description are provided
    if (!updateTaskname || !updateDescription) {
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
      id,
      taskname: updateTaskname,
      description: updateDescription,
      expiresAt: isNaN(new Date(updateExpiresAt))
        ? expiresAt
        : new Date(updateExpiresAt).toLocaleString(),
    };

    // Dispatch the action for updating task
    dispatch(updateTask(newTask));

    // Close the update modal
    setShow(false);
  };

  return (
    <div className="singleTask shadow-lg p-3 mb-5 bg-white rounded">
      <div className="details">
        <h2>{taskname}</h2>
        <p style={{ color: "#5b5858db", paddingLeft: "20px" }}>{description}</p>
        <p>
          {" "}
          <b>Due date : </b>
          {expiresAt}
        </p>
      </div>

      {/* Buttons for task manipulation */}
      <div className="manipulateBtns">
        <Button variant="primary" onClick={handleShow}>
          {" "}
          Update task{" "}
        </Button>

        {/* Update task modal */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Editing a task "{taskname}" </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div>
                <label htmlFor="task">Task name : </label>
                <input
                  type="text"
                  name="task"
                  id="task"
                  value={updateTaskname}
                  onChange={(e) => setUpdateTaskName(e.target.value)}
                  style={{ marginLeft: "14px" }}
                />
              </div>
              <div>
                <label htmlFor="desc">Description : </label>
                <input
                  type="text"
                  name="desc"
                  id="desc"
                  value={updateDescription}
                  onChange={(e) => setUpdateDescription(e.target.value)}
                  style={{ marginLeft: "8px" }}
                />
              </div>
              <div>
                <label htmlFor="expiresAt">Expires At :</label>
                <input
                  type="datetime-local"
                  name="expiresAt"
                  id="expiresAt"
                  value={updateExpiresAt}
                  onChange={(e) => setUpdateExpiresAt(e.target.value)}
                  style={{ marginLeft: "15px" }}
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              {" "}
              Cancel{" "}
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              {" "}
              Save Changes{" "}
            </Button>
          </Modal.Footer>
        </Modal>

        <br />

        {/* Button to delete the task */}
        <Button variant="danger" onClick={() => {dispatch(deleteTask({id}))}}>
          Delete task
        </Button>
      </div>
    </div>
  );
};
