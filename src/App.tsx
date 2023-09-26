import { createBrowserRouter, RouterProvider } from "react-router-dom";
//
import TrackingPage from "./pages/Tracking/TrackingPage.tsx";
import LoginPage from "./pages/Login/LoginPage.tsx";
import RootLayout from "./pages/layout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <LoginPage />,
      },
      {
        path: "/tracking",
        element: <TrackingPage />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
