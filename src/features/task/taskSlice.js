import { createSlice, current } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const defaultState = {
  taskItems: [],
  count:0
};  

const getTaskFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("tasks")) || defaultState;
};


const taskSlice = createSlice({
  name: "tasks",
  initialState: getTaskFromLocalStorage(),
  reducers: {
    // Reducer to add a new task
    addTask: (state, action) => {
      const newTask = action.payload;
      state.taskItems.push(newTask);
      //   console.log(current(state));

      // Update local storage with the current state
      localStorage.setItem("tasks", JSON.stringify(current(state)));
    },

    // Reducer to delete a task
    deleteTask: (state, action) => {
      const { id } = action.payload;
      const updatedTasks = state.taskItems.filter((task) => task.id !== id);
      state.taskItems = updatedTasks;

      // Update local storage with the current state
      localStorage.setItem("tasks", JSON.stringify(state.taskItems));

      // Display a toast indicating successful deletion
      toast("Deleted Task Successfully", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },

    // Reducer to update a task
    updateTask: (state, action) => {
      const updatedTask = action.payload;
      //   console.log(newTask);
      const { id } = updatedTask;

      // Find the index of the task in the taskItems array
      const taskIndex = state.taskItems.findIndex((task) => task.id === id);

      state.taskItems[taskIndex] = {
        ...state.taskItems[taskIndex],
        ...updatedTask,
      };
      // console.log(current(state.taskItems));

      // Update local storage with the current state
      localStorage.setItem("tasks", JSON.stringify(state.taskItems));
    },
  },
});


// Export action creators
export const { addTask, deleteTask, updateTask } = taskSlice.actions;

// Export the reducer
export default taskSlice.reducer;
