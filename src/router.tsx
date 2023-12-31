import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Search from "./pages/search";
import Home from "./pages/home";
import MountainList from "./pages/mountain-list";
import MountainDetail from "./pages/mountain_detail";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "search/*",
                element: <Search />,
            },
            {
                path: "home",
                element: <Home />,
            },
            {
                path: "mountain-list/*",
                element: <MountainList />,
            },
            {
                path: "mountain-detail/*",
                element: <MountainDetail />,
            },
        ]
    }
])

