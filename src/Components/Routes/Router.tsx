import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import TechAndTools from "../../Pages/ToolsAndTech/ToolsAndTech";
import Projects from "../../Pages/Projects/Projects";
import Location from "../../Pages/Location/Location";
import PageError from "../PageError/PageError";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/about', element: <About />},
            { path: '/techandtools', element: <TechAndTools />},
            { path: '/projects', element: <Projects />},
            { path: '/location', element: <Location/> },
            { path: '*', element: <PageError /> }
        ],
    },
]);