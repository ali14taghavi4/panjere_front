import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddPost from "./pages/addPost/inedx";
import Home from "./pages/home";
import 'bootstrap/dist/css/bootstrap.css';
import Login from "./pages/login";
import Main from "./pages/main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/ad" element={<AddPost/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;