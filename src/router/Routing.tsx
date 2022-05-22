import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "components/Layout/Layout";
import Home from "components/Home/Home";

/**
 * Application Routing
 * Only one route (Home)
 */
export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="" element={<Navigate replace to="home" />} />
          <Route path="/home" element={<Home />} />
        </Route>

        <Route path="*" element={<Navigate replace to="home" />} />
      </Routes>
    </BrowserRouter>
  );
}
