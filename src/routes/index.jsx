import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Page_Description } from "../pages/Description";

export const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Page_Description />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
