import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import { useState } from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
function App() {
  const [dark, setDark] = useState(false);
  return (
    <div data-theme={dark ? "dark" : "light"} style={{ minHeight: "100vh" }}>
      <Navbar dark={dark} setDark={setDark} />
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
