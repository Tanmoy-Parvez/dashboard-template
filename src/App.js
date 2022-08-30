import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import { useState } from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Test from './Components/Test/Test';
function App() {
  const [dark, setDark] = useState(false);
  return (
    <div data-theme={dark ? "dark" : "light"} style={{ minHeight: "100vh" }}>
      <Navbar dark={dark} setDark={setDark} />
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/" element={<Test/>}/>
      </Routes>
    </div>
  );
}

export default App;
