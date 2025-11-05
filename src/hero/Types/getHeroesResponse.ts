import type { Hero } from "./HeroInterface";

export interface HeroesResponse {
    total:  number;
    pages:  number;
    heroes: Hero[];
}
