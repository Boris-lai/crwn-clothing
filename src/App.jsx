import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import SignIn from "./routes/sign-in/sign-in.component";

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

const router = createBrowserRouter([
  {
    element: <Navigation />,
    path: "/",
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        element: <Shop />,
        path: "/shop",
      },
      {
        element: <SignIn />,
        path: "/sign-in",
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
