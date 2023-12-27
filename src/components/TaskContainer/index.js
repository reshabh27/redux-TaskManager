import React from 'react'

import { useSelector } from "react-redux";
import { SingleTask } from './SingleTask';
import './styles.css'

export const TaskContainer = () => {
  // Get tasks from global state
  const tasks = useSelector((state) => state.taskState.taskItems);
  console.log(tasks);

  // Display a message if no tasks are added
  if(tasks?.length===0)
  {
    return "No tasks added";
  }

  return (
    <div className="taskcontainer ">
      <h2 style={{margin:'30px auto'}}>Tasks</h2>
      <div>
        {tasks?.map((task) => {
          return <SingleTask key={task.id} {...task} />;
        })}
      </div>
    </div>
  );
}
