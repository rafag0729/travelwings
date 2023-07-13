import { AdminTW, ErrorScreen, HomeScreen, Login, OfferDetails } from "pages";
import { createBrowserRouter } from "react-router-dom";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
    errorElement: <ErrorScreen />
  },
  // {
  //   path: "*",
  //   element: <HomeScreen />,
  // },
  // {
  //   path: "/login",
  //   element: <Login />, 
  // },
  // {
  //   path: "/admin",
  //   element: <AdminTW />, 
  // },
  // {
  //   path: "/admin/offerDetails",
  //   element: <OfferDetails />, 
  // },
  // {
  //   path: "/admin/addOffer",
  //   element: <AddOffer />,
  // },
])