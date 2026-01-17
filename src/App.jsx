import "./App.css";
import Footer from "./components/common/Footer";
import { createBrowserRouter, Outlet, RouterProvider, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Notification from "./pages/Notification";
import Promotions from "./pages/Promotions";
import WalletPage from "./pages/WalletPage";
import LoginPage from "./components/common/Login";
import Account from "./pages/Account";
import SafeBox from "./pages/SafeBox";
import GameStatistics from "./pages/GameStatistics";
import Setting from "./pages/Setting";
import Feedback from "./pages/Feedback";
import Guide from "./pages/Guide";
import About from "./pages/About";
import CategoriesListing from "./components/home/CategoriesListing";
import MoreGames from "./components/home/MoreGames";
import RegisterPage from "./components/common/RegisterPage";
import ForgotPage from "./components/common/ForgotPage";
import ScrollToTop from "./pages/ScrollToTop";
import WithDraw from "./pages/WithDraw";
import Deposit from "./pages/Deposit";
import WithDrawHistory from "./pages/WithDrawHistory";
import WalletHistory from "./pages/DepositHistory";
import DepositHistory from "./pages/DepositHistory";


const MainFunction = () => {

  return (
    <div className="min-h-screen flex items-center justify-center font-sans bg-[var(--color-neon-bg)]">
      <div className="relative bg-[var(--color-neon-bg)] h-[100vh] sm:max-h-[850px] w-full sm:w-[400px] md:w-[420px] sm:rounded-[10px] shadow-2xl overflow-hidden flex flex-col border border-[var(--color-neon-accent)] ring-1 ring-[var(--color-neon-accent)]">
        <Navbar />
         <ScrollToTop  />
        <div className="grow overflow-y-auto no-scrollbar scroll-smooth bg-[#1A1C20]">
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
      { path: "/promotions", element: <Promotions /> },
      { path: "/wallet", element: <WalletPage /> },
      { path: "/categories", element: <CategoriesListing /> },
      { path: "/more-games", element: <MoreGames /> },
      { path: "/register", element: <RegisterPage /> },
      { path: "/forgot-password", element: <ForgotPage /> },
      { path: "/withdraw", element: <WithDraw /> },
      { path: "/deposit", element: <Deposit /> },
      { path: "/withdrawhistory", element: <WithDrawHistory /> },
      { path: "/deposithistory", element: <DepositHistory /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;