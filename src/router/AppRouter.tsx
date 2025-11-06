import { AdminPage } from "@/admin/page/AdminPage";

import { AdminLayout } from "@/admin/Layout/AdminLayout";


// import { SearchPage } from "@/hero/search/SearchPage";

import { createBrowserRouter, Navigate } from "react-router";
import { lazy } from "react";
import {HomePage} from "@/hero/home/HomePage";
import { HeroesLayout } from "@/hero/Layout/Layout";
import { HeroPage } from "@/hero/page/HeroPage";


const SearchPage = lazy(() => import("@/hero/search/SearchPage"))

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <HeroesLayout/>,
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
        path: 'heroes/:idSlug',
        element: <HeroPage/>
      },
      {
        path: "*",
        element: <Navigate to='/'/>
      }
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