import { HomeScreen } from 'pages';
import { AdminTW } from 'pages/AdminTW';
import { ErrorScreen } from 'pages/ErrorScreen';
import { OfferDetails } from 'pages/OfferDetails';
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />, 
    errorElement: <ErrorScreen />
  },
  {
    path: "/*",
    element: <HomeScreen />, 
    errorElement: <ErrorScreen />
  },
  {
    path: "/admin",
    element: <AdminTW />, 
    errorElement: <ErrorScreen />
  },
  {
    path: "/admin/offerDetails",
    element: <OfferDetails />, 
    errorElement: <ErrorScreen />
  },
])