import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";

import "./App.css";
import Dashboard from "./views/Dashboard";
import LoginPage from "./views/LoginPage";
import React from "react";

const App: React.FC = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
export default App;

const Root: React.FC = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </main>
  );
};

const router = createBrowserRouter([{ path: "*", Component: Root }]);
