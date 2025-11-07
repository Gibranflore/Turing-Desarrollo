import { Jumbotron } from "@/components/ui/Custom/Jumbotron"
import { HeroStats } from "../components/HeroStats"
import { SearchControls } from "./ui/SearchControls"

import { useSearchParams } from "react-router";

import { HeroGrid } from "../components/HerogGrid";
import { useQuery } from "@tanstack/react-query";
import { searchHeroesAction } from "../actions/get.Search.Hero";


export const SearchPage = () => {
  const [searchParams] = useSearchParams();

  const name = searchParams.get('name') ?? undefined;
  const strength = searchParams.get('strength') ?? undefined;

  const { data: heroes = [] } = useQuery({
    queryKey: ['search', { name, strength }],
    queryFn: () => searchHeroesAction({ name, strength }),
    staleTime: 1000 * 60 * 5, // 5 minutos
  });

  return (
    <>
      <Jumbotron
        title="Búsqueda de SuperHéroes"
        description="Descubre, explora y administra super héroes y villanos"
      />

      <Jumbotron
        title="Buscador de héroes"
        // breadcrumbs={[
        //   { label: 'Home1', to: '/' },
        //   { label: 'Home2', to: '/' },
        //   { label: 'Home3', to: '/' },
        // ]}
      />

      {/* Stats Dashboard */}
      <HeroStats />

      {/* Filter and search */}
      <SearchControls />

      {/*  */}

      <HeroGrid heroes={heroes} />
    </>
  );
};

export default SearchPage;