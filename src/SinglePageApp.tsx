import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { RouterProvider } from "react-router"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { Router } from "./router/AppRouter"
import { FavoriteHeroProvider } from "./hero/context/FavoriteHero"


const queryClient = new QueryClient()

export const SinglePage = () => {
    return (
        <><QueryClientProvider client={queryClient}>
            <FavoriteHeroProvider>
            <RouterProvider router={Router}/>
            <ReactQueryDevtools initialIsOpen={false} />
            </FavoriteHeroProvider>
        </QueryClientProvider>
        </>
    )
}