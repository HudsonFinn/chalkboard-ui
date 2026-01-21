import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { HomePage } from "./pages/HomePage";
import { ButtonPage } from "./pages/ButtonPage";
import { IconPage } from "./pages/IconPage";
import { DropdownPage } from "./pages/DropdownPage";
import { TypographyPage } from "./pages/TypographyPage";
import { ColorsPage } from "./pages/ColorsPage";
import { MessagePage } from "./pages/MessagePage";
import { TagPage } from "./pages/TagPage";
import { InputPage } from "./pages/InputPage";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="button" element={<ButtonPage />} />
          <Route path="icon" element={<IconPage />} />
          <Route path="dropdown" element={<DropdownPage />} />
          <Route path="typography" element={<TypographyPage />} />
          <Route path="colors" element={<ColorsPage />} />
          <Route path="message" element={<MessagePage />} />
          <Route path="tag" element={<TagPage />} />
          <Route path="input" element={<InputPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
