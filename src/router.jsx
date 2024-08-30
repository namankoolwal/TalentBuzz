/* eslint-disable no-unused-vars */
import { Route , createBrowserRouter, createRoutesFromElements ,useRouteError  } from "react-router-dom";
import Layout from "./Layout";
import LandingPage from "./components/LandingPage/LandingPage";
import AboutUs from "./components/AboutUs/AboutUs";
import Features from "./components/Features/Features";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="" element={<LandingPage/>} />
            <Route path="features" element={<Features/>} />
            <Route path="about" element={<AboutUs/>} />

        </Route>
    )
)
// function ErrorBoundary() { 
//     let error = useRouteError();
//     console.error(error);
//     // Uncaught ReferenceError: path is not defined
//     return <div>Dang!</div>;
//   }
export default router;
