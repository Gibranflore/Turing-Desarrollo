

import { useQuery } from '@tanstack/react-query'
import { getSummaryAction } from '../actions/get.hero.summary'

export const useHeroSummary = () => {

    return useQuery({
        queryKey:['Summary-information'],
        queryFn: getSummaryAction,
        staleTime: 1000 * 60 * 5,

    })
}
