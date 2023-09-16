import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import './App.css'

function App() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <HomePage />
        }
    ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
