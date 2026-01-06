import "./App.css";
import Footer from "./components/common/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Notification from "./pages/Notification";
import Promotions from "./pages/Promotions";

const MainFunction = () => {
  return (
    <div className=" bg-gray-300 h-[100vh] overflow-y-scroll">
      <div className="relative bg-white min-h-full sm:w-[40%] w-full mx-auto flex flex-col">
        <div className=' bg-gray-300 h-screen overflow-y-scroll'>
          <div className='relative bg-white min-h-full sm:w-[40%] w-full mx-auto flex flex-col'>
            <Navbar />
            <hr />
            <div className="grow">
              <Outlet />
            </div>
            <Footer />
          </div>
        </div>
        );
};

        const router = createBrowserRouter([
        {
          element: <MainFunction />,
        children: [
        {path: "/", element: <Home /> },
        {path: "/learn-more", element: <Notification /> },
        {path: "/promotions", element: <Promotions /> },
        ],
  },
        ]);

        function App() {
  return <RouterProvider router={router} />;
}

        export default App;
