import { AdminPage } from "@/admin/page/AdminPage";

import { AdminLayout } from "@/admin/Layout/AdminLayout";
import { CharacterLayout } from "@/hero/Layout/Layout";
import { CharacterPage } from "@/hero/page/CharacterPage";




import { createBrowserRouter } from "react-router";
import { lazy } from "react";
import {HomePage} from "@/hero/home/HomePage";

const SearchPage = lazy(() => import("@/hero/search/SearchPage"))

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <CharacterLayout/>,
    children: [

      {
        path: 'search',
        element: <SearchPage/>
      },
      {
        index: true,
        element: <HomePage/>
      },
      {
        path: '/hero/1',
        element: <CharacterPage/>
      },
    ],
  },
  {
    path: '/admin',
    element: <AdminLayout/>,
    children: [
      
      {
        index: true,
        element: <AdminPage/>
      },
    ]
  }
])