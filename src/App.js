import "./styles/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Layout, NoPage, Jobs, Other } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="other" element={<Other />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
