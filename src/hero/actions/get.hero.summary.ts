import { heroApi } from "../API/api.heroes"
import type { SummaryResponse } from "../Types/summary.information";

export const getSummaryAction = async() => {
    const {data} = await heroApi.get<SummaryResponse>('/summary');

    return data
}