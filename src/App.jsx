import "./App.css";
import Footer from "./components/common/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/common/Navbar";
import Notification from "./pages/Notification";
import LoginPage from "./components/common/Login";
import Account from "./pages/Account";
import SafeBox from "./pages/SafeBox";
import GameStatistics from "./pages/GameStatistics";
import Setting from "./pages/Setting";
import Feedback from "./pages/Feedback";
import Guide from "./pages/Guide";
import About from "./pages/About";

const MainFunction = () => {
  return (
    <div className=" bg-gray-300 h-[100vh] overflow-y-scroll">
      <div className="relative bg-white min-h-full sm:w-[40%] w-full mx-auto flex flex-col">
        <Navbar />
        <hr />
        <div className="flex-grow">
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
      { path: "/", element: <Home /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/account", element: <Account /> },
      { path: "/safebox", element: <SafeBox /> },
      { path: "/game-statistics", element: <GameStatistics /> },
      { path: "/setting", element: <Setting /> },
      { path: "/feedback", element: <Feedback /> },
      { path: "/guide", element: <Guide /> },
      { path: "/about", element: <About /> },
      { path: "/learn-more", element: <Notification /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
