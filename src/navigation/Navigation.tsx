import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<PublicRoutes />}/>

        <Route path="admin" element={<PrivateRoutes />}/>
      </Routes>
    </BrowserRouter>
  )
}
