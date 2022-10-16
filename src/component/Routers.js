import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { GamePages } from "../pages/GamesPage";
import { useLocalStorage } from "./LocalStorage";

export const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          exact
          element={
            <GuestRoute>
              <LoginPage />
            </GuestRoute>
          }
        ></Route>
        <Route
          path="/private"
          element={
            <PrivateRouter>
              <GamePages />
            </PrivateRouter>
          }
        />
      </Routes>
    </Router>
  );
};
function PrivateRouter({ children, ...rest }) {
  const [user] = useLocalStorage("user");
  return user ? children : <Navigate to="/login" />;
}
function GuestRoute({ children, ...rest }) {
  const [user] = useLocalStorage("user");
  return !user ? children : <Navigate to="/private" />;
}
