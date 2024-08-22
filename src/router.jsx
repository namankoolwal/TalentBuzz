/* eslint-disable no-unused-vars */
import { Route , createBrowserRouter, createRoutesFromElements ,useRouteError  } from "react-router-dom";
import Layout from "./Layout";
import LandingPage from "./components/LandingPage/LandingPage";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="" element={<LandingPage/>} />
            <Route path="features" element={<> <div>Hello features</div></>} />
            <Route path="about" element={<> <div>Hello about</div></>} />
            <Route path="contact" element={<> <div>Hello contact</div></>} />

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
