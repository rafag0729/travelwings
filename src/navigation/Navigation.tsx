import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RootState } from "reduxStore";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

export const Navigation = () => {

  const {logged} = useSelector(({auth}: RootState) => auth)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<PublicRoutes isAuthenticated={logged}/>} />

        <Route path="admin" element={<PrivateRoutes isAuthenticated={logged}/>}/>
      </Routes>
    </BrowserRouter>
  )
}
