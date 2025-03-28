import Browse from "./Browse"
import SignInSignUp from "./SignInSignUp"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const Body = () =>{

    const approuter = createBrowserRouter([
        {
            path:"/",
            element:<SignInSignUp/>
        },
        {
            path:"/browse",
            element:<Browse/>
        },
    ])
    return(
        <RouterProvider router={approuter} />
    )
}

export default Body