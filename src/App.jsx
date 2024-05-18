import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Dashboard from "./Component/Dashboard";
import Review from "./Component/Review";
import ReadReviews from "./Component/ReadReviews";
import { Articles } from "./Component/Articles";

function App() {
    
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard/>,
    },
    {
      path: "/Review",
      element: <Review/>,
    },
    {
      path: "/ReadReviews",
      element: <ReadReviews/>,
    },
    {
      path: "/Articles",
      element: <Articles/>,
    },
  ]);
  
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  )
}

export default App
