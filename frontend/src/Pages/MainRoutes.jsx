import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import ReqPay from "../HOC/ReqPay";
import RequiredAuth from "../HOC/RequiredAuth";
import Calendar from "./Calendar";
import Downloads from "./Downloads";
import Features from "./Features";
import Homepage from "./Homepage";
import Login from "./Login";
import Payment from "./Payment";
import Project from "./Project";
import Signup from "./Signup";
import TimeTracker from "./TimeTracker";
import Upgrade from "./Upgrade";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Homepage />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/features"
          element={
            <>
              <Navbar />
              <Features />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/download"
          element={
            <>
              <Navbar />
              <Downloads />
              <Footer />
            </>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route
          path="/tracker"
          element={
            <RequiredAuth>
              <TimeTracker />
            </RequiredAuth>
          }
        ></Route>
        <Route path="/upgrade" element={<Upgrade />}></Route>
        <Route path="/project" element={<Project />}></Route>
        <Route path="upgrade/payment" element={<Payment />}></Route>
        <Route
          path="/calendar"
          element={
            <ReqPay>
              <Calendar />
            </ReqPay>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default MainRoutes;
