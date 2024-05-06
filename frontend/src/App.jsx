import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./pages/home/RootLayout.jsx";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import TakeATest from "./pages/home/TakeATest.jsx";
import TestResults from "./pages/home/TestResults.jsx";
import {authUserHomeLoader, sharedResultsLoader, testResultsLoader} from "./utils.js";
import EmptyState from "./pages/home/EmptyState.jsx";
import notFoundImg from "./assets/404_error.svg";


const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        loader: authUserHomeLoader,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/take-a-test",
                loader: authUserHomeLoader,
                element: <TakeATest />
            },
            {
                path: "/test-results",
                loader: testResultsLoader,
                element: <TestResults />
            },
            {
                path: "/test-results/:key",
                loader: sharedResultsLoader,
                element: <TestResults />
            },
            {
                path: "*",
                element: <EmptyState imgSrc={notFoundImg} heading="404! Page Not Found." body="Look's like you have lost your way."/>
            }
        ]
    },
    {
        path: "/login",
        loader: authUserHomeLoader,
        element: <Login />
    },
    {
        path: "/signup",
        loader: authUserHomeLoader,
        element: <SignUp />
    }
])

function App() {


    return (
        <RouterProvider router={router} />
    );
}

export default App;
