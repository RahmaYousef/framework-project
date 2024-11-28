import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout/Layout"

import Home from "./assets/pages/Home/Home"
import About from "./assets/pages/About/About"
import Portfolio from "./assets/pages/portfolio/Portfolio"
import Contact from "./assets/pages/Contact/Contact"


export default function App() {
    const router = createBrowserRouter([
       {path:"/",element:<Layout/>,children:[
        {index:true,element:<Home/>},

        {path:"/about",element:<About/>},
        {path:"/portfolio",element:<Portfolio/>},
        {path:"/contact",element:<Contact/>},
       ]
     }
    ])
  return (
    <>
    <RouterProvider router ={router} />

    </>
  )
}
