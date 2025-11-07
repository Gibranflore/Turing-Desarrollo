import { useQuery } from "@tanstack/react-query"
import { getHerosByPageAction } from "../API/Models/get-heroes";



export const useHeroPagination = (page: number, limit:number, category = 'all') => {

    
    return useQuery({
    queryKey: ['Heroes', {page, limit, category}],
    queryFn: () => getHerosByPageAction(+page, +limit, category),
    staleTime: 1000 * 60 * 5
  })
}