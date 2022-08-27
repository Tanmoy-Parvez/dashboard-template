import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import { publicRoutes } from './Routes/publicRoutes';
import { useState } from 'react';
function App() {
  const [dark, setDark] = useState(false);
  return (
    <div data-theme={dark ? "dark" : "light"} style={{ minHeight: "100vh" }}>
      <Navbar dark={dark} setDark={setDark} />
      <Routes>
        {publicRoutes.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />}></Route>
        ))}
      </Routes>
    </div>
  );
}

export default App;
