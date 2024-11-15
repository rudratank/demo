import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import StudentList from "./StudentList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Define routes here */}
  
        <Route path="/students" element={<StudentList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
