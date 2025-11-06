import { heroApi } from "../API/api.heroes";
import type { Hero } from "../Types/HeroInterface";


const BASE_URL = import.meta.env.VITE_API_URL;

export const getHeroAction = async (idSlug: string) => {
  const { data } = await heroApi.get<Hero>(`/${idSlug}`);

  return {
    ...data,
    image: `${BASE_URL}/images/${data.image}`,
  };
};