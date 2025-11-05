import { Heart,} from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Jumbotron } from "@/components/ui/Custom/Jumbotron"
import { HeroStats } from "../components/HeroStats"
import { HeroGrid } from "../components/HerogGrid"
import { useState } from "react"
import { CustomPage } from "@/components/ui/Custom/CustomPage"
import { CustomBreadCrums } from "@/components/ui/Custom/CustomBreadCrums"

import { getHerosByPageAction } from "../API/Models/get-heroes"
import { useQuery } from "@tanstack/react-query"


export const HomePage = () => {

  const [activeTab, setActiveTab] = useState<
  'all' | 'favorites' | 'heroes' | 'villains' 
  >('all')

  const {data: heroRespose} = useQuery({
    queryKey: ['Heroes'],
    queryFn: () => getHerosByPageAction(),
    staleTime: 1000 * 60 * 5
  })
  

  return (
      <>
        {/* Header */}
        <Jumbotron 
            title="Pagiande de Personajes" 
            description="Descubre tu Personaje favorito"/>


        <CustomBreadCrums currentPage="Super Heroes"/>

        
        {/* Stats Dashboard */}
          <HeroStats/>

        {/* Advanced Filters */}
        

        {/* Tabs */}
        <Tabs value={activeTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger 
                  value="all"
                  onClick={ () => setActiveTab('all')}>All Characters (16)</TabsTrigger>
            <TabsTrigger 
                  value="favorites" 
                  className="flex items-center gap-2"
                  onClick={ () => setActiveTab('favorites')}>
              <Heart className="h-4 w-4" />
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger 
                value="heroes"
                onClick={ () => setActiveTab('heroes')}>Heroes (12)</TabsTrigger>
            <TabsTrigger 
                value="villains"
                onClick={ () => setActiveTab('villains')}>Villains (2)</TabsTrigger>
          </TabsList>
          {/* Todos los personajes */}
          <TabsContent value='all'>
            <HeroGrid heroes={heroRespose?.heroes ?? []}/>
            <h1>Todos los personajes</h1>
          </TabsContent>
          {/* Todos los personajes favoritos */}
          <TabsContent value='favorites'>
           
            <h1>Favoritos</h1>
          </TabsContent>
          {/* Todos los Heoroes */}
          <TabsContent value='heroes'>
           
            <h1>Heroes</h1>
          </TabsContent>
          {/* Todos los Villanos */}
          <TabsContent value='villains'>
        
            <h1>Villanos</h1>
          </TabsContent>

        </Tabs>


        {/* Character Grid */}
        

        {/* Pagination */}
        <CustomPage totalPages={5}/>
      </>

  )
}