
import { RouterProvider } from "react-router"
import { Router } from "./router/AppRouter"


export const SinglePage = () => {
    return (
        <>
            <RouterProvider router={Router}/>
        </>
    )
}
