/* eslint-disable no-unused-vars */
import { Route , createBrowserRouter, createRoutesFromElements ,useRouteError  } from "react-router-dom";
import Layout from "./Layout";
import LandingPage from "./components/LandingPage/LandingPage";
import ModelParent from "./components/GetInTouchModel/ModelParent";
import AboutUs from "./components/AboutUs/AboutUs";
import Toast from "./components/Toast";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="" element={<LandingPage/>} />
            <Route path="features" element={<Toast showToast={false}/>} />
            <Route path="about" element={<> <AboutUs/></>} />
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
