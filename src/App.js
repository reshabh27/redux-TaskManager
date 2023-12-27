
import { ToastContainer } from 'react-toastify';
import './App.css';
import { InputContainer } from './components/InputContainer';
import NavbarContainer from "./components/NavbarContainer";
import { TaskContainer } from './components/TaskContainer';
import "bootstrap/dist/css/bootstrap.min.css";
 import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <NavbarContainer />

      {/* InputContainer component for adding new tasks */}
      <InputContainer />

      {/* TaskContainer component for displaying tasks */}
      <TaskContainer />

      {/* ToastContainer for displaying toast messages */}
      <ToastContainer />
    </div>
  );
}

export default App;
