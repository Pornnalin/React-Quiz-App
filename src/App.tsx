import HomePage from "./pages/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
  ]);

  return (
    <div className="min-h-[100vh]">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
