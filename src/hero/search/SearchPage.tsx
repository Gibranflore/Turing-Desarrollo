import { Jumbotron } from "@/components/ui/Custom/Jumbotron"
import { HeroStats } from "../components/HeroStats"
import { SearchControls } from "./ui/SearchControls"
import { CustomBreadCrums } from "@/components/ui/Custom/CustomBreadCrums"


export const SearchPage = () => {
  return (
    <>
      <Jumbotron 
          title="Pagiande de Busqueda" 
          description="Descubre tu heroe favorito"/>

      <CustomBreadCrums 
        currentPage="Buscador de Heroes"
        breadcrumbs={[
          { label: 'homePage1', to: '/' },
          { label: 'homePage2', to: '/' },
          { label: 'homePage3', to: '/' },
        ]}
      />

      {/* Stats Dashboard */}
      <HeroStats/>

      {/*Busqueda */}
      <SearchControls/>
    </>
  )
}
export default SearchPage